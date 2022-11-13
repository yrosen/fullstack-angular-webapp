import baseConfig from '../../jest.config.js';

/** @type {import('jest').Config} */
const config = {
    ...baseConfig,
    displayName: `${baseConfig.displayName} - SERVER`,
    roots: [ './' ],
};

export default config;