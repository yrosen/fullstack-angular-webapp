# FULLSTACK ANGULAR + EXPRESS + PRISMA

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.9, and components added manually with NPM.

**What is it?** The goal of this project is to provide a starter kit for a fullstack web application. It provides:
 * a frontend via Angular
 * a backend via Express.js
 * unified testing via Jest
 * shared data models and an ORM via Prisma

## DEVELOPMENT SERVER

Run `npm run start` for a dev server. Navigate to `http://localhost:4200/` to load up Angular. The Express backend is available at `http://localhost:3000`. In the dev server, Weback will proxy all requests to `/api` to the backend.

You can also run only specific components by running `npm run start:server` or `npm run start:client`.

## PRODUCTION BUILD

Run `npm run build` to build all components to the dist/ directory.

As usual, you can also run `npm run build:client` or `npm run build:server` to build either the frontend or the backend.

For production usage, you'll need something to serve `dist/client` to the browser and to run `dist/server` via node. Another option is to use `express.static` in the server to serve the files in `dist/client`.

## DATABASE

The database is handled via the [Prisma ORM](https://www.prisma.io/). You define your database configuration and data models in `schema.prisma`, and TypeScript models can be generated into a `shared` directory for use on both the frontend and the backend.

Use `npm run db:generate` to create the shared TypeScript files for the models defined in `schema.prisma`. Use `npm run db:push` to push your database structure to the database server (e.g. MySQL).

## RUNNING UNIT TESTS

Run `npm run test` to execute all unit tests via [Jest](https://jestjs.io/).

You can run only the frontend tests with `npm run test:client` and only the backend tests with `npm run test:server`.

## RUNNING END-TO-END TESTS
TK