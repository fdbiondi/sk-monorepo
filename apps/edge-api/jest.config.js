const { defaults } = require("jest-config");

/** @type {import('jest').Config} */
const config = {
  collectCoverage: false,
  collectCoverageFrom: ['src/**/*.{js,ts}'],
  moduleFileExtensions: [...defaults.moduleFileExtensions, "mts", "cts"],
};

module.exports = config;
