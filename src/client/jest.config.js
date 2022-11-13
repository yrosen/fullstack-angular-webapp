const baseConfig = require('../../jest.config');

/** @type {import('jest').Config} */
module.exports = {
    ...baseConfig,
    displayName: `${baseConfig.displayName} - CLIENT`,
    preset: 'jest-preset-angular',
    setupFilesAfterEnv: ['<rootDir>/src/client/setup-jest.ts'],
    globalSetup: 'jest-preset-angular/global-setup',
    roots: [ '<rootDir>/src/client' ],
};