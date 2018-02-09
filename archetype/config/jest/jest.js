// root jest configuration
// allows to define the following jest settings
// https://github.com/facebook/jest/blob/de8f2e37d95d02514573f05886b9a25c6e5839c3/packages/jest-config/src/index.js#L76-L115

module.exports = {
  projects: ['./client', './server'],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
  collectCoverageFrom: [
    'client/**/*.{js,jsx}',
    'server/**/*.{js,jsx}',
    '!**/*.test.js?(x)',
    '!**/*.test-data.js?(x)',
    '!**/*.spec-data.js?(x)',
  ],
};
