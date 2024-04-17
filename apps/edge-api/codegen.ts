import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  // schema: "./src/typeDefs/*.{graphql,gql}",
  schema: './src/typeDefs/index.ts',
  require: ['ts-node/register'],
  generates: {
    'src/types.d.ts': {
      plugins: ['typescript', 'typescript-resolvers'],
    },
  },
};

export default config;
