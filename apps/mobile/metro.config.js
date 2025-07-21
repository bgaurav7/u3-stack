const { getDefaultConfig } = require('@expo/metro-config');
const path = require('node:path');

const projectRoot = __dirname;
const workspaceRoot = path.resolve(projectRoot, '../..');

const config = getDefaultConfig(projectRoot);

// 1. Watch all files within the monorepo
config.watchFolders = [workspaceRoot];

// 2. Let Metro know where to resolve packages and in what order
config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, 'node_modules'),
  path.resolve(workspaceRoot, 'node_modules'),
];

// 3. Force Metro to resolve (sub)dependencies only from the `nodeModulesPaths`
config.resolver.disableHierarchicalLookup = true;

// 4. Enable symlinks for monorepo
config.resolver.unstable_enableSymlinks = true;

// 5. Ensure proper platform resolution
config.resolver.platforms = ['ios', 'android', 'native', 'web'];

// 6. Additional transformer settings for better compatibility
config.transformer = {
  ...config.transformer,
  unstable_allowRequireContext: true,
};

module.exports = config;
