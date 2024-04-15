/* eslint-disable */
export default {
  coverageDirectory: '../../coverage/plugins/pulumi',
  displayName: 'pulumi',
  moduleFileExtensions: ['ts', 'js', 'html'],
  passWithNoTests: true,
  transform: {
    '^.+\\.[tj]s$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }],
  },
};
