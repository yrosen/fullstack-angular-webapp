/** @type {import('jest').Config} */
module.exports = {
    displayName: 'Fullstack Angular + Express',
    preset: 'ts-jest',
    roots: [ '<rootDir>/src/server/' ],
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.ts?$',
    transform: { '^.+\\.ts?$': 'ts-jest' },
    verbose: true,
};