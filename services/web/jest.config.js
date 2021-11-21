module.exports = {
  extensionsToTreatAsEsm: [".ts", ".tsx"],

  // The test environment that will be used for testing
  // next.js: 'jsdom'
  testEnvironment: "jest-environment-node",

  testPathIgnorePatterns: ["node_modules/", ".next"],

  transform: {
    /* Use babel-jest to transpile tests with the next/babel preset
      https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object */
    "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
  },

  transformIgnorePatterns: ["node_modules/"],
};
