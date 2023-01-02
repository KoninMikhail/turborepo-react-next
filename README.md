# Turborepo Starter

![Build Status](https://github.com/itsjavi/turborepo-starter/actions/workflows/CI.yml/badge.svg?branch=main)

Opinionated Turborepo template repository, based on the official Yarn (Berry) starter turborepo,
created with testing, design systems, DDD and reactive programming in mind.

Main tools, frameworks and libraries: Turbo, Yarn, TypeScript, ReactJS, NextJS, ESLint, Prettier, Husky, Jest, Storybook, Styled Components, tsup.

## Software Patterns and Principles

The project is a monorepo that comes with a series of examples that follow these software design patterns:

- Reactive programming / Reactive UI using the observer pattern, which allows us to decouple the business logic and the state from the framework and UI components. Easier to test and more scalable.
- Atomic Design
- Domain-Driven Design (DDD) rather than framework-oriented separation of concerns.
- Clean/Onion architecture. The main applications have a series of layers separating Business Logic (Domain and Use Cases), Entry Points (aka. presentation layer), Infrastructure (providers, interface implementations, vendor extensions, etc.) and Configuration (which wraps everything together).

This project does not feature Micro Frontends / Module Federation, but it can be easily implemented.

## What's inside?

This turborepo uses [Yarn](https://yarnpkg.com/) as a package manager. It includes the following packages/apps:

### Apps and Packages

- `apps/web`: a [Next.js](https://nextjs.org/) v13 app
- `apps/cli`: a [NodeJS](https://nodejs.org/) CLI app, written in TypeScript, with Chalk and Commander
- `apps/storybook`: a [StoryBook](https://storybook.js.org/) design system app (v7 alpha), powered by Vite 3
- `packages/ui`: a stub React v18 component library shared by both `web` and `storybook` applications, powered by `styled-components` and `tsup` (a `esbundle` based compiler).
- `packages/counter`: Similar to the `ui` package, but showcases a stateful "counter" component and a minimalistic approach to reactive UIs combined with DDD.
- `packages/config`: Shared configurations, including:
  - `eslint` configurations (includes `eslint-config-next`, `eslint-config-turbo` and `eslint-config-prettier`)
  - `tsconfig` TS config JSONs used throughout the monorepo

Except for some config files, each package or app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
- [Jest](https://jestjs.io) for testing

### Build

To build all apps and packages, run the following command:

```
cd my-turborepo
yarn run build
```

### Develop

To develop all apps and packages, run the following command:

```
cd my-turborepo
yarn run dev
```

#### .devcontainer

The `.devcontainer` folder offers a local Docker development environment for VS Code with the [Dev Containers](https://containers.dev/) extension. The script `.devcontainer/run` is a helper to run commands inside the container.

You can also use `make` for simple tasks like: `dev`, `stop`, `install`, `open`, and `bash` inside the container.

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd my-turborepo
yarn dlx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your turborepo:

```
yarn dlx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Pipelines](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
