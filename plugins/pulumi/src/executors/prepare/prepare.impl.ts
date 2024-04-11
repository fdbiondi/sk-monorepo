import { ExecutorContext, workspaceRoot } from '@nx/devkit';
import { buildCommand, USE_VERBOSE_LOGGING_MINIMAL } from '@nx-extend/core';
import { execSync } from 'child_process';
import { join } from 'path';
import { which } from 'shelljs';
import * as dotenv from 'dotenv';

dotenv.config();

export interface PrepareOptions {
  stackLocation: string;
  root?: string;
}

export default async function createExecutor(
  options: PrepareOptions,
  context: ExecutorContext,
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
