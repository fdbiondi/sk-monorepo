'use server';
import {
  CognitoIdentityProvider,
  AdminCreateUserCommand,
  AdminSetUserPasswordCommand,
  AdminUpdateUserAttributesCommand,
} from '@aws-sdk/client-cognito-identity-provider';

const provider = new CognitoIdentityProvider({
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
  },
  region: process.env.AWS_REGION as string,
});

type CreateStudentPayload = {
  username: string;
  email: string;
  tenantId: string;
  firstName?: string;
  lastName?: string;
  password: string;
  permanent?: boolean;
};

type SetPasswordPayload = {
  username: string;
  password: string;
  permanent?: boolean;
};

type UpdateStudentPayload = {
  username: string;
  firstName?: string;
  lastName?: string;
};

export const setUserPassword = async ({
  username,
  password,
  permanent = false,
}: SetPasswordPayload) => {
  try {
    return provider.send(
      new AdminSetUserPasswordCommand({
        Username: username,
        Password: password,
        Permanent: permanent,
        UserPoolId: process.env.COGNITO_USER_POOL_ID as string,
      })
    );
  } catch (e) {
    console.error('cognito error: ', e);
    throw e;
  }
};

export const createStudent = async ({
  username,
  email,
  firstName,
  lastName,
  tenantId,
}: CreateStudentPayload) => {
  try {
    const result = await provider.send(
      new AdminCreateUserCommand({
        Username: username,
        UserPoolId: process.env.COGNITO_USER_POOL_ID as string,
        UserAttributes: [
          { Name: 'email', Value: email },
          { Name: 'given_name', Value: firstName },
          { Name: 'family_name', Value: lastName },
          { Name: 'custom:tenantId', Value: tenantId },
        ],
        MessageAction: 'SUPPRESS',
      })
    );

    return result;
  } catch (e) {
    console.error('cognito error: ', e);
    throw e;
  }
};

export const updateStudent = async ({
  username,
  firstName,
  lastName,
}: UpdateStudentPayload) => {
  try {
    const result = await provider.send(
      new AdminUpdateUserAttributesCommand({
        Username: username,
        UserPoolId: process.env.COGNITO_USER_POOL_ID as string,
        UserAttributes: [
          { Name: 'given_name', Value: firstName },
          { Name: 'family_name', Value: lastName },
        ],
      })
    );

    return result;
  } catch (e) {
    console.error('cognito error: ', e);
    throw e;
  }
};
