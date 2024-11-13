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
        console.error(`Template not found: ${template}`);
        process.exit(1);
    }

    const projectPath = path.resolve(process.cwd(), projectName);

    try {
        await execa('git', ['clone', templates[template], projectPath]);
        console.log(`Project "${projectName}" created successfully!`);
    } catch (error) {
        console.error('Error while cloning:', error);
        process.exit(1);
    }
}

const [, , arg1, arg2] = process.argv;

if (arg1 === '-v' || arg1 === '--version') {
    console.log(`Forge version: ${packageJson.version}`);
    process.exit(0);
}

if (!arg1 || !arg2) {
    console.error("Usage: forge <template> <project-name>");
    process.exit(1);
}

initProject(arg1, arg2);
