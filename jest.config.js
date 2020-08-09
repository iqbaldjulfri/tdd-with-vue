module.exports = {
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
  },
  preset: '@vue/cli-plugin-unit-jest',
  resetMocks: true,
  testMatch: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)', '**/*.spec.{j,t}s?(x)'],
  // testPathIgnorePatterns: ['/node_modules/', '/src/(.*).step-(.*)'],
};
