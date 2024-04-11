const { defaults } = require("jest-config");

/** @type {import('jest').Config} */
const config = {
  collectCoverageFrom: ['src/**/*.{js,ts}'],
  moduleFileExtensions: [...defaults.moduleFileExtensions, "mts", "cts"],
};

module.exports = config;
