import baseConfig from '../../jest.config.js';

/** @type {import('jest').Config} */
const config = {
    ...baseConfig,
    displayName: `${baseConfig.displayName} - SERVER`,
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.ts?$',
    roots: [ './' ],
};

export default config;