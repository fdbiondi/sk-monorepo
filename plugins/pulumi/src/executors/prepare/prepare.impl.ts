import { ExecutorContext, workspaceRoot } from '@nx/devkit';
import { buildCommand } from '@nx-extend/core';
import * as dotenv from 'dotenv';
import { which } from 'shelljs';

import { execSync } from 'child_process';
import { join } from 'path';


dotenv.config();

export interface PrepareOptions {
  stackLocation: string;
  root?: string;
}

export default async function createExecutor(
  options: PrepareOptions,
  context: ExecutorContext
): Promise<{ success: boolean }> {
  if (!which('pulumi')) {
    throw new Error('pulumi is not installed!');
  }

  const stateLocation = process.env.PULUMI_BACKEND_STATE;

  if (!stateLocation) {
    throw new Error('PULUMI_BACKEND_STATE is not set!');
  }

  const { sourceRoot } = context.workspace.projects[context.projectName];

  execSync(buildCommand([`pulumi login `, stateLocation]), {
    cwd: join(workspaceRoot, options.root ?? sourceRoot),
    stdio: 'inherit',
  });

  return Promise.resolve({ success: true });
}
