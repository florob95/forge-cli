# Forge CLI

**Forge** is a Node.js CLI that allows you to initialize projects from predefined templates by cloning Git repositories.

## Installation

To install the CLI globally from GitHub using npm, run the following command:

```bash
npm install -g https://github.com/florob95/forge.git
```

## Usage
### Syntax

```forge <template> <project-name>```

### Example

To create a basic TypeScript project:

```forge node-ts myProject```

This will clone the init-basic-ts template repository and create a new project named myProject.

### Available Templates

- node-ts: A basic Node TypeScript template
- node-grpc: A basic Node TypeScript grpc template
- node-nest: A basic Node TypeScript Nest template in esm
