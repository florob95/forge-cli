#!/usr/bin/env node
import { execa } from 'execa';
import path from 'path';

async function initProject(template, projectName) {
    const templates = {
        "node-ts": "https://github.com/florob95/node-ts-starter-kit.git",
        // Add more templates here if needed
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

// Get command arguments
const [, , template, projectName] = process.argv;

if (!template || !projectName) {
    console.error("Usage: forge <template> <project-name>");
    process.exit(1);
}

initProject(template, projectName);
