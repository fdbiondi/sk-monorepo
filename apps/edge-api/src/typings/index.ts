import {
  CognitoAccessTokenPayload,
  CognitoIdTokenPayload,
  CognitoJwtPayload,
} from 'aws-jwt-verify/jwt-model';
import { print } from 'graphql';
import { YogaInitialContext } from 'graphql-yoga';
import * as jose from 'jose';

import { fetchMockApi } from '../helpers';
import typeDefs from '../typeDefs';
import { Category, Configuration, Product } from '../types';

// yoga context plus extended context via useExtendedContext plugin
export type Context = YogaInitialContext & {
  fetchMockApi: ReturnType<typeof fetchMockApi>;
  request: Request & { user?: User; token?: string };
  mustRespondWithMock: boolean;
};

export interface AdminApiResponse<D = unknown> {
  message?: string;
  data?: D;
  errors?: Array<{
    message: string;
  }>;
}

export interface MockApiResponse<D = unknown> {
  data?: D;
  error?: {
    name: string;
    message: string;
    header: string;
    code: number;
  };
}

export enum ErrorMessages {
  UNAUTHORIZED = "Access denied: You don't have permission",
  JWT_EXPIRED = 'Access denied: JWT expired',
  NOT_IMPLEMENTED = 'Not implemented yet',
  BAD_REQUEST = 'Bad Request',
  NOT_FOUND = 'Not found',
  MOCK_REQUEST_NOT_FOUND_ERROR = 'Bad Request: mock was not found error',
  INTERNAL_ERROR = 'Internal server error',
}

export type ErrorType = keyof typeof ErrorMessages;

type CognitoToken =
  | CognitoIdTokenPayload
  | CognitoAccessTokenPayload
  | CognitoJwtPayload;

export type User = { email?: string; tenant_id?: string } & jose.JWTPayload &
  CognitoToken;

export type Image = string;

export type MockProperty = {
  defaultValue: unknown[] | unknown;
  queryField: string;
  checkFields: string[];
  mapKey: string;
  fetchResult: (context: Context) => Promise<unknown[] | unknown>;
};

export type MockResponseData = {
  products?: Product[];
  categories?: Category[];
  configuration?: Configuration;
};

export const schemaFileContents = `
  ${print(typeDefs)}
  schema{
    query: Query
    mutation: Mutation
  }
`;
