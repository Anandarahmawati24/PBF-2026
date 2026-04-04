import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
    // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
    dir: './',
});

const config = {
    testEnvironment: 'jsdom',
    modulePaths: ['<rootDir>/src/'],
    collectCoverage: true,
    collectCoverageFrom: [
        '**/*.{ts,tsx}',
        '**/*.d.ts',
        '!**/node_modules/**',
        '!**/.next/**',
        '!**/coverage/**',
        '!**/jest.config.mjs',
        '!**/next.config.mjs',
        '!**/types/**',
        '!**/views/**',
        '!**/pages/api/**',
    ],
};

export default createJestConfig(config);