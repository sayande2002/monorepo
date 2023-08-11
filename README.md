### Workspaces List

| Index No.          | Workspace            | Info.             | Name                           |
| ------------------ | -------------------- | ----------------- | ------------------------------ |
| apps worksapce     |
| 1                  | docs                 | Documentation     | @referrer/docs                 |
| 2                  | Storybook            | Storybook         | @referrer/storybook            |
| 3                  | web                  | Main Website      | @referrer/web                  |
| packages worksapce |
| 4                  | ui                   | UI Components     | @referrer/ui                   |
| 5                  | prisma               | Prisma Database   | @referrer/prisma               |
| 6                  | lib                  | Library Functions | @referrer/lib                  |
| 7                  | eslint-config-custom | ESLint Config     | @referrer/eslint-config-custom |
| 8                  | prettier-config      | Prettier Config   | @referrer/prettier-config      |
| 9                  | tailwind-config      | Tailwind Config   | @referrer/tailwind-config      |
| 10                 | tsconfig             | Tsconfig          | @referrer/tsconfig             |
| 11                 | types                | Types             | @referrer/types                |

### Repository Tool

1. Turborepo

### Main Tech Stack

1. Next.js 13.4+ (For Front -End)
2. tRPC (For API)
3. Prisma.io (For Back -End)
4. PostgreSQL (For Database)

### Language

1. TypeScript

### Libraries

1. Next-Auth
2. Redux Toolkit
3. Storybook
4. Jest & React Testing Library
5. React Joyride
6. Zod
7. city-timezones
8. Post CSS
9. React-Icons
10. Tailwind CSS (For Styling)
11. shadcn (For Component)

### Build Tools

1. Docker
2. Kubernetes
3. Prettier
4. Eslint
5. Husky
6. Lint Staged
7. GitHub Actions

### Features

1. SEO Optimised
2. PWA
3. Dynamic Progress Bar / Loaders or Spinners
4. Tooltip
5. Intro
6. Info Icon everywhere
7. OS Default Theme
8. User Active or not
9. Skeleton Loading

### Build

To build all apps and packages, run the following command:

```
cd my-turborepo
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```
cd my-turborepo
pnpm dev
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd my-turborepo
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
