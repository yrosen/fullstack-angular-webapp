import baseConfig from '../../jest.config';

/** @type {import('jest').Config} */
const config = {
    displayName: `${baseConfig.displayName} - CLIENT`,
    preset: 'jest-preset-angular',
    setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
    transform: { '^.+\\.(ts|js|mjs|html)$': 'jest-preset-angular' },
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
    globalSetup: 'jest-preset-angular/global-setup',
};

export default config;