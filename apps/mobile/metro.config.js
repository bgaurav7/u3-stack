const { getDefaultConfig } = require('@expo/metro-config');
const path = require('node:path');

const projectRoot = __dirname;
const workspaceRoot = path.resolve(projectRoot, '../../');

const config = getDefaultConfig(projectRoot);

// 1. Watch all files in the workspace
config.watchFolders = [workspaceRoot];

// 2. Prioritize resolution paths to avoid duplicated packages
config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, 'node_modules'),
  path.resolve(workspaceRoot, 'node_modules'),
];

// 3. Enforce monorepo-compatible module resolution
config.resolver.disableHierarchicalLookup = true;
config.resolver.unstable_enableSymlinks = true;

// 4. Support multi-platform
config.resolver.platforms = ['ios', 'android', 'native'];

// 5. Ensure compatibility with older require.context usage
config.transformer.unstable_allowRequireContext = true;

config.resolver.sourceExts = [...config.resolver.sourceExts, 'cjs', 'mjs'];

module.exports = config;
