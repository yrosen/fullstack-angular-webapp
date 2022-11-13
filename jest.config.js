/** @type {import('jest').Config} */
module.exports = {
    displayName: 'Fullstack Angular + Express',
    preset: 'ts-jest',
    roots: [ '<rootDir>/src/server/', '<rootDir>/src/client/' ],
    transform: { '^.+\\.ts?$': 'ts-jest' },
    verbose: true,
};