/** @type {import('jest').Config} */
const config = {
    displayName: 'Fullstack Angular + Express',
    preset: 'ts-jest',
    projects: [
        "src/client/jest.config.ts",
        "src/server/jest.config.ts"
    ]
};

export default config;