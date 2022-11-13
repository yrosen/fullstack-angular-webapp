import baseConfig from '../../jest.config';

/** @type {import('jest').Config} */
const config = {
    displayName: `${baseConfig.displayName} - SERVER`,
    verbose: true,
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.ts?$',
    transform: { '^.+\\.ts?$': 'ts-jest' },
};

export default config;