module.exports = {
  preset: "jest-expo",
  testPathIgnorePatterns: ["/node_modules"],
  setupFilesAfterEnv: [
    "@testing-library/jest-native/extend-expect",
    "./jest-setup.js",
  ],
  /*  moduleNameMapper: {
      "\\.svg": "<rootDir>/src/__mocks__/svgMock.js",
    }, */
  transformIgnorePatterns: [
    "node_modules/(?!((jest-)?react-native|moti|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)",
  ],
};
