const { getDefaultConfig } = require('expo/metro-config');
const path = require('node:path');

const config = getDefaultConfig(__dirname);

// Add workspace packages to watchFolders
config.watchFolders = [path.resolve(__dirname, '../../packages')];

// Configure resolver for monorepo
config.resolver.nodeModulesPaths = [
  path.resolve(__dirname, 'node_modules'),
  path.resolve(__dirname, '../../node_modules'),
];

// Enable symlinks for workspace packages
config.resolver.unstable_enableSymlinks = true;

module.exports = config;
