#!/usr/bin/env node

/**
 * Environment validation script for U3-Stack
 * This script validates the environment configuration system
 */

const {
  config,
  validateConfig,
  isDevelopment,
  isProduction,
  isTest,
} = require('../packages/config/config.js');

console.log('🔍 Validating U3-Stack Environment Configuration...\n');

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

function validateEnvironmentSystem() {
  const results = [];

  // 1. Test configuration loading
  log('1️⃣ Testing configuration loading...', colors.yellow);
  try {
    log(`  ✅ App Name: ${config.app.name}`, colors.green);
    log(`  ✅ Environment: ${config.app.nodeEnv}`, colors.green);
    log(`  ✅ Server Port: ${config.server.port}`, colors.green);
    results.push({ test: 'Configuration loading', success: true });
  } catch (error) {
    log(`  ❌ Configuration loading failed: ${error.message}`, colors.red);
    results.push({
      test: 'Configuration loading',
      success: false,
      error: error.message,
    });
  }

  // 2. Test environment detection
  log('\n2️⃣ Testing environment detection...', colors.yellow);
  try {
    log(`  ✅ Is Development: ${isDevelopment}`, colors.green);
    log(`  ✅ Is Production: ${isProduction}`, colors.green);
    log(`  ✅ Is Test: ${isTest}`, colors.green);
    results.push({ test: 'Environment detection', success: true });
  } catch (error) {
    log(`  ❌ Environment detection failed: ${error.message}`, colors.red);
    results.push({
      test: 'Environment detection',
      success: false,
      error: error.message,
    });
  }

  // 3. Test type safety
  log('\n3️⃣ Testing type safety...', colors.yellow);
  try {
    // Test that types are correct
    const port = config.server.port;
    const isAnalytics = config.features.enableAnalytics;
    const logLevel = config.logging.level;

    if (
      typeof port === 'number' &&
      typeof isAnalytics === 'boolean' &&
      typeof logLevel === 'string'
    ) {
      log('  ✅ Type safety validation passed', colors.green);
      results.push({ test: 'Type safety', success: true });
    } else {
      throw new Error('Type validation failed');
    }
  } catch (error) {
    log(`  ❌ Type safety failed: ${error.message}`, colors.red);
    results.push({ test: 'Type safety', success: false, error: error.message });
  }

  // 4. Test configuration validation
  log('\n4️⃣ Testing configuration validation...', colors.yellow);
  try {
    validateConfig();
    log('  ✅ Configuration validation passed', colors.green);
    results.push({ test: 'Configuration validation', success: true });
  } catch (error) {
    log(`  ❌ Configuration validation failed: ${error.message}`, colors.red);
    results.push({
      test: 'Configuration validation',
      success: false,
      error: error.message,
    });
  }

  // 5. Test feature flags
  log('\n5️⃣ Testing feature flags...', colors.yellow);
  try {
    const features = config.features;
    log(`  ✅ Analytics: ${features.enableAnalytics}`, colors.green);
    log(`  ✅ Error Tracking: ${features.enableErrorTracking}`, colors.green);
    log(`  ✅ Hot Reload: ${features.hotReload}`, colors.green);
    log(`  ✅ DevTools: ${features.enableDevtools}`, colors.green);
    results.push({ test: 'Feature flags', success: true });
  } catch (error) {
    log(`  ❌ Feature flags failed: ${error.message}`, colors.red);
    results.push({
      test: 'Feature flags',
      success: false,
      error: error.message,
    });
  }

  // Summary
  log('\n📊 Environment Validation Summary:', colors.yellow);
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
      '\n🎉 All environment validation tests passed! The configuration system is working correctly.',
      colors.green
    );
    process.exit(0);
  } else {
    log(
      '\n💥 Some validation tests failed. Please check the errors above.',
      colors.red
    );
    process.exit(1);
  }
}

// Run validation
try {
  validateEnvironmentSystem();
} catch (error) {
  log(`💥 Environment validation script failed: ${error.message}`, colors.red);
  process.exit(1);
}
