# Forge CLI

**forge-cli** is a Node.js Cli that allows you to initialize projects from predefined templates by cloning Git repositories.

## Installation

To install the CLI globally from GitHub using npm, run the following command:

```bash
npm install -g https://github.com/florob95/forge.git
```

## Usage

### Syntax

`forge <template> <project-name>`

### Example

To create a basic TypeScript project:

`forge node-ts myProject`

This will clone the init-basic-ts template repository and create a new project named myProject.

### Available Templates

- [node-ts](https://github.com/florob95/node-ts-starter-kit.git): A basic Node TypeScript template
- [node-grpc](https://github.com/florob95/node-grpc-starter-kit.git): A basic Node TypeScript grpc template
- [node-nest](https://github.com/florob95/node-nest-starter-kit.git): A basic Node TypeScript Nest template in esm
- [web-react](https://github.com/florob95/react-starter-kit): A basic react router with shadcn-ui template
