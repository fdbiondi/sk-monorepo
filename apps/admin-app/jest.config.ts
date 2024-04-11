/* eslint-disable */
export default {
  coverageDirectory: '../../coverage/admin-app',
  displayName: 'admin-app',
  moduleFileExtensions: ['ts', 'js', 'jsx', 'tsx'],
  passWithNoTests: true,
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]s$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }],
  },
};
