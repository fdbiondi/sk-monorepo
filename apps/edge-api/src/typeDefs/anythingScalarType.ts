import { GraphQLScalarType } from 'graphql';
import { Kind } from 'graphql/language';

export const AnythingScalarType = new GraphQLScalarType({
  name: 'Anything',
  description: 'Arbitrary object',
  parseValue: (value) => {
    if (typeof value === 'object') {
      return value;
    }

    if (typeof value === 'string') {
      return JSON.parse(value);
    }

    return null;
  },
  serialize: (value) => {
    if (typeof value === 'object') {
      return value;
    }

    if (typeof value === 'string') {
      return JSON.parse(value);
    }

    return null;
  },
  parseLiteral: (ast) => {
    switch (ast.kind) {
      case Kind.STRING:
        return JSON.parse(ast.value);
      case Kind.OBJECT:
        throw new Error(`Not sure what to do with OBJECT for AnythingScalarType`);

      default:
        return null;
    }
  },
});
