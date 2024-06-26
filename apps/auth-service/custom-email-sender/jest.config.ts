/* eslint-disable */
export default {
  coverageDirectory: '../../coverage/auth-service/cognito-handlers',
  displayName: 'auth-service/cognito-handlers',
  moduleFileExtensions: ['ts', 'js', 'html'],
  passWithNoTests: true,
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]s$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }],
  },
};
