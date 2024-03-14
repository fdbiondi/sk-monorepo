'use server';
import {
  CognitoIdentityProvider,
  AdminCreateUserCommand,
  AdminSetUserPasswordCommand,
} from '@aws-sdk/client-cognito-identity-provider';

import { getUsername } from '../utils';

const provider = new CognitoIdentityProvider({
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
  },
  region: process.env.AWS_REGION as string,
});

type CreateStudentPayload = {
  email: string;
  tenantId: string;
  firstName: string;
  lastName: string;
  password: string;
  permanent?: boolean;
};

type SetPasswordPayload = {
  email: string;
  tenantId: string;
  password: string;
  permanent?: boolean;
};

export const setUserPassword = async ({
  email,
  tenantId,
  password,
  permanent = false,
}: SetPasswordPayload) => {
  try {
    console.log('set user password');

    const username = getUsername(email, tenantId);

    return provider.send(
      new AdminSetUserPasswordCommand({
        Username: username,
        Password: password,
        Permanent: permanent,
        UserPoolId: process.env.COGNITO_USER_POOL_ID as string,
      }),
    );
  } catch (e) {
    console.log('cognito error: ', e);
    throw e;
  }
};

export const createStudent = async ({
  email,
  firstName,
  lastName,
  tenantId,
}: CreateStudentPayload) => {
  try {
    console.log('create student');

    const username = getUsername(email, tenantId);
    const result = await provider.send(
      new AdminCreateUserCommand({
        Username: username,
        UserPoolId: process.env.COGNITO_USER_POOL_ID as string,
        UserAttributes: [
          { Name: 'email', Value: email },
          { Name: 'given_name', Value: firstName },
          { Name: 'family_name', Value: lastName },
          // { Name: 'custom:tenant_id', Value: tenantId },
        ],
        MessageAction: 'SUPPRESS',
      }),
    );

    return result;
  } catch (e) {
    console.log('cognito error: ', e);
    throw e;
  }
};
