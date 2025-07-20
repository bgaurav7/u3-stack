#!/usr/bin/env node

/**
 * Workspace validation script for U3-Stack monorepo
 * This script validates that all packages can communicate and import from each other
 */

const { execSync } = require('node:child_process');
const fs = require('node:fs');

console.log('🔍 Starting workspace validation...\n');

// Colors for console output
const colors = {
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  reset: '\x1b[0m',
};

function log(message, color = colors.reset) {
  console.log(`${color}${message}${colors.reset}`);
}

function runCommand(command, description) {
  try {
    log(`📋 ${description}...`, colors.blue);
    const output = execSync(command, { encoding: 'utf8', stdio: 'pipe' });
    log(`✅ ${description} - SUCCESS`, colors.green);
    return { success: true, output };
  } catch (error) {
    log(`❌ ${description} - FAILED`, colors.red);
    log(`Error: ${error.message}`, colors.red);
    return { success: false, error: error.message };
  }
}

async function validateWorkspace() {
  const results = [];

  // 1. Validate pnpm recursive exec works
  log('\n1️⃣ Testing pnpm recursive exec...', colors.yellow);
  const recursiveTest = runCommand(
    'pnpm recursive exec -- echo "Package validation successful"',
    'pnpm recursive exec test'
  );
  results.push({ test: 'pnpm recursive exec', ...recursiveTest });

  // 2. Test TypeScript compilation
  log('\n2️⃣ Testing TypeScript compilation...', colors.yellow);
  const typescriptTest = runCommand(
    'pnpm run typecheck',
    'TypeScript compilation check'
  );
  results.push({ test: 'TypeScript compilation', ...typescriptTest });

  // 3. Test cross-package imports by running the test files
  log('\n3️⃣ Testing cross-package imports...', colors.yellow);

  // First, let's try to compile the test files
  const compileTest = runCommand(
    'npx tsc --noEmit packages/config/hello.ts packages/types/hello.ts apps/hello.ts',
    'Cross-package import compilation'
  );
  results.push({ test: 'Cross-package imports', ...compileTest });

  // 4. Validate package.json files exist and are valid
  log('\n4️⃣ Validating package.json files...', colors.yellow);
  const packageFiles = [
    'package.json',
    'packages/config/package.json',
    'packages/types/package.json',
  ];

  const packageValidation = { success: true, output: '' };
  for (const file of packageFiles) {
    try {
      const content = fs.readFileSync(file, 'utf8');
      JSON.parse(content); // Validate JSON
      log(`  ✅ ${file} is valid`, colors.green);
    } catch (error) {
      log(`  ❌ ${file} is invalid: ${error.message}`, colors.red);
      packageValidation.success = false;
    }
  }
  results.push({ test: 'package.json validation', ...packageValidation });

  // 5. Check workspace configuration
  log('\n5️⃣ Validating workspace configuration...', colors.yellow);
  try {
    const workspaceConfig = fs.readFileSync('pnpm-workspace.yaml', 'utf8');
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));

    if (
      packageJson.workspaces &&
      workspaceConfig.includes('apps/*') &&
      workspaceConfig.includes('packages/*')
    ) {
      log('  ✅ Workspace configuration is valid', colors.green);
      results.push({ test: 'Workspace configuration', success: true });
    } else {
      throw new Error('Workspace configuration is incomplete');
    }
  } catch (error) {
    log(`  ❌ Workspace configuration error: ${error.message}`, colors.red);
    results.push({
      test: 'Workspace configuration',
      success: false,
      error: error.message,
    });
  }

  // 6. Test environment management system
  log('\n6️⃣ Testing environment management system...', colors.yellow);
  try {
    // Check if env folder exists
    if (!fs.existsSync('env')) {
      throw new Error('env/ folder not found');
    }

    // Check if required env files exist
    const requiredEnvFiles = [
      'env/.env.defaults',
      'env/.env.development',
      'env/.env.production',
    ];
    for (const file of requiredEnvFiles) {
      if (!fs.existsSync(file)) {
        throw new Error(`${file} not found`);
      }
    }

    // Test configuration loading
    const { config } = require('../packages/config/config.js');
    if (config?.app?.name) {
      log('  ✅ Environment configuration loads correctly', colors.green);
      log(`  ✅ App name: ${config.app.name}`, colors.green);
      log(`  ✅ Environment: ${config.app.nodeEnv}`, colors.green);
      results.push({ test: 'Environment management system', success: true });
    } else {
      throw new Error('Configuration object is invalid');
    }
  } catch (error) {
    log(
      `  ❌ Environment management system error: ${error.message}`,
      colors.red
    );
    results.push({
      test: 'Environment management system',
      success: false,
      error: error.message,
    });
  }

  // Summary
  log('\n📊 Validation Summary:', colors.yellow);
  const successful = results.filter(r => r.success).length;
  const total = results.length;

  for (const result of results) {
    const status = result.success ? '✅' : '❌';
    const color = result.success ? colors.green : colors.red;
    log(`  ${status} ${result.test}`, color);
  }

  log(
    `\n🎯 Results: ${successful}/${total} tests passed`,
    successful === total ? colors.green : colors.red
  );

  if (successful === total) {
    log(
      '\n🎉 All workspace validations passed! The monorepo is properly configured.',
      colors.green
    );
    process.exit(0);
  } else {
    log(
      '\n💥 Some validations failed. Please check the errors above.',
      colors.red
    );
    process.exit(1);
  }
}

// Run validation
validateWorkspace().catch(error => {
  log(`💥 Validation script failed: ${error.message}`, colors.red);
  process.exit(1);
});
