// client jest configuration
// allows to define the following jest settings
// https://github.com/facebook/jest/blob/de8f2e37d95d02514573f05886b9a25c6e5839c3/packages/jest-config/src/index.js#L116-L152

module.exports = {
  rootDir: '../', // relative to /server folder
  testEnvironment: 'node',
  testMatch: ['<rootDir>/server/**/?(*.)(test).js?(x)'],
  setupFiles: ['<rootDir>/archetype/config/jest/setup-server.js'],
  // have to repeat the below line for server config as well
  // otherwise if client test is executed after server test module mocks are not applied
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/archetype/config/jest/fileMock.js',
    '\\.(css|scss)$': '<rootDir>/archetype/config/jest/styleMock.js',
  },
};
