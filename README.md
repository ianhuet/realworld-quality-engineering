# RealWorld Quality Engineering

This is a systematic, exercise in quality engineering. Based on an existing [Client](https://github.com/gothinkster/react-redux-realworld-example-app/tree/master) / [Server](https://github.com/SeuRonao/realworld-express-prisma/tree/main) application, drawn from the [RealWorld demo app](https://www.realworld.how/) initiative. It will be used to take a testing strategy through a full cycle - from initial research to full implementation and commisioning.

**Backend**
Built with Typescript + Express + Prisma including CRUD operations, authentication, routing, pagination, and more.

**Database**
Built with PostgreSql.

**Frontend**
React + Redux codebase containing real world examples (CRUD, auth, advanced patterns, etc) that adheres to the RealWorld spec and API.

## Setup Local Development Environment
[Yarn](https://yarnpkg.com/) is the preferred package manager on this project. [Docker Desktop](https://www.docker.com/products/docker-desktop/) is also required to provide the Postgres database the system needs.

> Note: `.env.development` files have been committed in both the frontend and backend packages. This is not normal practice but has been done here to simplify the setup process.

From the root directory:

1. Clone the repository.
2. Run `yarn setup` to install the dependencies for all packages.
3. Run `yarn db:start` to download & setup the docker database image.
4. Run `yarn db:setup` to apply Prisma migration and data seeding.
5. Run `yarn app:dev` to launch both frontend and backend development servers.
6. Go to [http://localhost:5100](http://localhost:5100).

> Ports: FE (5100), API (5101), DB (54320)

## CI Pipeline

```
# - name: Run tests # Run tests of all packages
#   run: npx lerna exec npm run test
```