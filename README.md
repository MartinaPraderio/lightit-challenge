
## Getting Started

First install all needed packages

```bash
yarn install
```

Then, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Documentation

## Tech Stack

### Code Quality

- [Prettier](https://prettier.io/): A code formatting tool that supports multiple languages and integrates with most editors.
- [ESLint](https://eslint.org/): A linting tool for JavaScript and JSX, which helps to find and fix problems in the code.
- [Typescript](https://www.typescriptlang.org/): A superset of JavaScrip that enhances code quality and maintainability by catching errors at compile time, providing better refactoring support, and offering features like interfaces and type aliases.

### Styles 

- [Tailwind CSS](https://tailwindcss.com/)

### State Management

- [Redux](https://redux.js.org/)

[Redux Toolkit](https://redux-toolkit.js.org/) with [RTK Query](https://redux-toolkit.js.org/rtk-query/overview) are used for store management, to handle api requests and caching. In this context a file inside the **services** folders should be a slice that interacts with the api using RTQ; and a file inside **slices** folder should be a more general slice that doesn't use RTQ. Both services and slices should be correctly imported to the store.ts file.

## Git workflow

### branches 

- `develop` branch contains the latest stable version. 
- `main` branch latest release version. 

For new branches this rule is used: task_type/issueID_branch_name. Eg: feature/1_example_fature
For this project we do not have a board with the issues so we not include the number in the branches names.

## Pull Requests

Name: task_type/issueID branch name
Description:
    - Associated Issues: Link to the issue 
    - Brief description of what was done


