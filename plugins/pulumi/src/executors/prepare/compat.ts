import { convertNxExecutor } from '@nx/devkit';

import prepareExecutor from './prepare.impl';

export default convertNxExecutor(prepareExecutor);
