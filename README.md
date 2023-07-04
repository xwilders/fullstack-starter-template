### Frontend

- [React](https://reactjs.org/) - main frontend library
- [Vite](https://vitejs.dev/) - modern and fast build tool
- [React Query](https://react-query-v3.tanstack.com/) - react hooks to facilitate fetching/updating/caching data on the server
- [Zustand](https://github.com/pmndrs/zustand) - easy state-management
- [React router](https://reactrouter.com/en/main) - for routing
- [Cypress](https://www.cypress.io/) - end-to-end testing for your frontend
- [Storybook](https://storybook.js.org/) - build your UI web components in isolation

#### Frontend UI

- [TailwindCSS](https://tailwindcss.com/) - rapidly build modern websites without ever leaving your HTML
- [Headless UI](https://headlessui.com/) - completely unstyled, fully accessible UI components, designed to integrate beautifully with Tailwind CSS
- [React Icons](https://react-icons.github.io/react-icons/) - icons for your app
- [React-toastify](https://fkhadra.github.io/react-toastify/introduction) - show notifications when something happens

### Backend

- [Fastify](https://www.fastify.io/) - fast web framework for NodeJS
- [Mongoose](https://mongoosejs.com/) - elegant mongodb object modeling for node.js
- [Zod](https://github.com/colinhacks/zod) - typeScript-first schema validation with static type inference
- [dotenv](https://www.npmjs.com/package/dotenv) - to load your configs from an .env file
- [env-var](https://www.npmjs.com/package/env-var) - validate and sanitize your environmental variables

### Shared libraries

- [tRPC](https://trpc.io/) - remote procedure calls for your TypeScript applications - move faster by removing the need of a traditional API-layer
- [NX](https://nx.dev/) - build system with first class monorepo support and powerful integrations
- [Jest](https://jestjs.io/) - testing framework
- [Eslint](https://eslint.org/) - static code analysis for identifying problematic patterns found in your code

### Deployment

- [MongoDB](https://mongodb.com/) - get your ideas to market faster with a developer data platform built on the leading modern database
- [AWS](https://aws.amazon.com/) - build sophisticated applications with increased flexibility, scalability and reliability
- [AWS Elastic Beanstalk](https://aws.amazon.com/elasticbeanstalk/) - deploy and scale web applications

## Starting the app

- Clone the repository
- Copy `.env.example` and rename to `.env`
- `npm install` - install dependencies
- `npm start` - run local database (MongoDB, Docker), frontend, and backend

## Scripts

- `npm run frontend:storybook` - start storybook to develop components in isolation
- `npm run dep-graph` - see dependency graph
- For more commands check `package.json`
- To generate new apps in the monorepo, check out [NX documentation](https://nx.dev/packages/nx/documents/generate).
