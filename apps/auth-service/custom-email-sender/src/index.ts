import * as encryptionSdk from '@aws-crypto/client-node';
import * as b64 from 'base64-js';

// import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';
import { isCustomEmailSender } from './utils';

const { decrypt } = encryptionSdk.buildClient(
  encryptionSdk.CommitmentPolicy.REQUIRE_ENCRYPT_ALLOW_DECRYPT,
);

export const handler = async (event: any) => {
  // console.log('Event: ', event);
  if (!isCustomEmailSender(event)) {
    throw new Error('Invalid event');
  }

  if (event.triggerSource === 'CustomEmailSender_AdminCreateUser') {
    const generatorKeyId = process.env.KEY_ALIAS; // environment variable for alias of the key
    const keyIds = [process.env.KEY_ARN as string]; // ARN of the key
    const keyring = new encryptionSdk.KmsKeyringNode({
      generatorKeyId,
      keyIds,
    });
    const { plaintext } = await decrypt(
      keyring,
      b64.toByteArray(event.request.code),
    );

    const verificationCode = plaintext.toString();

    console.log('Verification code: ', verificationCode);
    // NOTE: Sent email here
    // const sesClient = new SESClient({});
    // const input = {
    //   Source:
    //     event.request.userAttributes.email === process.env.TENANT_1_EMAIL
    //       ? (process.env.TENANT_2_EMAIL as string)
    //       : (process.env.TENANT_1_EMAIL as string),
    //   Destination: {
    //     ToAddresses: [event.request.userAttributes.email],
    //   },
    //   Message: {
    //     Subject: {
    //       Data: 'Verification code',
    //     },
    //     Body: {
    //       Text: {
    //         Data: `Your verification code is: ${verificationCode}`,
    //       },
    //     },
    //   },
    // };
    // const response = await sesClient.send(new SendEmailCommand(input));
    // console.log('Email sent: ', response);
  }
};
