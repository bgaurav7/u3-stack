const { config } = require('dotenv');
const path = require('path');

/**
 * Environment variable utilities for U3-Stack
 */

/**
 * Load environment variables from .env file
 * @param {string} envPath - Path to .env file (optional)
 */
function loadEnv(envPath) {
  const envFile = envPath || path.resolve(process.cwd(), '.env');
  config({ path: envFile });
}

/**
 * Get environment variable with optional default value
 * @param {string} key - Environment variable key
 * @param {string} defaultValue - Default value if not found
 * @returns {string} Environment variable value or default
 */
function getEnv(key, defaultValue = '') {
  return process.env[key] || defaultValue;
}

/**
 * Get required environment variable (throws if not found)
 * @param {string} key - Environment variable key
 * @returns {string} Environment variable value
 * @throws {Error} If environment variable is not found
 */
function requireEnv(key) {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Required environment variable ${key} is not set`);
  }
  return value;
}

module.exports = {
  loadEnv,
  getEnv,
  requireEnv,
};
