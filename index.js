#!/usr/bin/env node
import { execa } from 'execa';
import path from 'path';
import { readFileSync } from 'fs';

const packageJson = JSON.parse(readFileSync(new URL('./package.json', import.meta.url), 'utf-8'));

async function initProject(template, projectName) {
    const templates = {
        "node-ts": "https://github.com/florob95/node-ts-starter-kit.git",
        "node-grpc": "https://github.com/florob95/node-grpc.git",
        "node-nest": "https://github.com/florob95/nest-starter-kit.git",
    };

    if (!templates[template]) {
        console.error(`\x1b[31m Template not found: ${template}  \x1b[0m`);
        process.exit(1);
    }

    const projectPath = path.resolve(process.cwd(), projectName);

    try {
        await execa('git', ['clone', templates[template], projectPath]);
        console.log(`\x1b[32m Project "${projectName}" created successfully! \x1b[0m`);
    } catch (error) {
        console.error('\x1b[31m Error while cloning: \x1b[0m', error);
        process.exit(1);
    }
}

const [, , arg1, arg2] = process.argv;

if (arg1 === '-v' || arg1 === '--version') {
    console.log(`\x1b[30m \x1b[42m Forge version: ${packageJson.version} \x1b[0m`);
    process.exit(0);
}

if (!arg1 || !arg2) {
    console.error("Usage: forge <template> <project-name>");
    process.exit(1);
}

initProject(arg1, arg2);
