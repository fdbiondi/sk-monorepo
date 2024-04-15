import { defaults } from 'jest-config';

export default {
  collectCoverageFrom: ['src/**/*.{js,ts}'],
  coverageDirectory: '../../coverage/edge-api',
  displayName: 'edge-api',
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'mts', 'cts'],
};
