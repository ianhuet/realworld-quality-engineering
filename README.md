# RealWorld Quality Engineering

> This is intended as an exercise in systematic quality engineering. I'm going to take an existing project from it's currently functional state, establish an setup local development environment, a deployment pipeline, and bring it to a point where it is supported by a systematic test strategy, implemented across multiple layers.

## Setup Local Development Environment
[Yarn](https://yarnpkg.com/) is the preferred package manager on this project. [Docker Desktop](https://www.docker.com/products/docker-desktop/) is also required to provide the Postgres database the system needs.

From the root directory:

1. Clone the repository.
2. Run `yarn install` to install the dependencies for all packages.
3. Run `yarn db:start` to download & setup the docker database image.
4. Run `yarn db:setup` to apply Prisma migration and data seeding.
5. Run `yarn app:dev` to launch both frontend and backend development servers.
6. Go to [http://localhost:5100](http://localhost:5100).
