
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

In my development work, I always strive to maintain a clean and well-organized code structure. I use a modular approach and reusable components to ensure that the code is easy to maintain and scale. I create reusable components following design principles to ensure they are modular and configurable. For example, I developed a base card component (Card) that can be extended with specific properties based on the use case and also other components like Button, Loading or Input that are inside shared folder which can be reused throughout the project.

## Tech Stack

### Code Quality

- [Prettier](https://prettier.io/): A code formatting tool that supports multiple languages and integrates with most editors.
- [ESLint](https://eslint.org/): A linting tool for JavaScript and JSX, which helps to find and fix problems in the code.
  I implement ESLint and Prettier to maintain clean and consistent code. 
- [Typescript](https://www.typescriptlang.org/): I use TypeScript to provide static typing and reduce runtime errors. This helps ensure that interfaces and types are adhered to throughout the application.

### Styles 

- [Tailwind CSS](https://tailwindcss.com/): A library that enables rapid UI development with a consistent design system through utility-first classes for styling.

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


