import { GraphQLScalarType } from 'graphql';
import { Kind } from 'graphql/language';

function isJsonString(str: string) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }

  return true;
}

function parseValue(value: unknown) {
  if (typeof value === 'object') {
    return value;
  }

  if (typeof value === 'string' && isJsonString(value)) {
    return JSON.parse(value);
  }

  if (
    typeof value === 'string' ||
    typeof value === 'number' ||
    typeof value === 'boolean'
  ) {
    return value;
  }

  return null;
}

export const AnythingScalarType = new GraphQLScalarType({
  name: 'Anything',
  description: 'Arbitrary object',
  parseValue,
  serialize: parseValue,
  parseLiteral: (ast) => {
    switch (ast.kind) {
      case Kind.STRING:
        return JSON.parse(ast.value);
      case Kind.OBJECT:
        throw new Error(
          `Not sure what to do with OBJECT for AnythingScalarType`
        );

      default:
        return null;
    }
  },
});
