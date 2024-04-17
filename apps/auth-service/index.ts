import * as aws from '@pulumi/aws';
import * as pulumi from '@pulumi/pulumi';
import * as dotenv from 'dotenv';
dotenv.config();

const SKIP_RESOURCES = [
  'aws:kms/key:Key',
  'aws:kms/alias:Alias',
  'aws:iam/rolePolicyAttachment:RolePolicyAttachment',
  'aws:lambda/permission:Permission',
];

// NOTE: according to this solution https://github.com/pulumi/pulumi/issues/1518#issuecomment-1023750273.
// This should add a stack name prefix to each resource so it is easier to identify it.
// Current solution drops random suffix added automatically by pulumi. Fix it if you can.
// There are problems with defining the name of the resources defined in SKIP_RESOURCES.
pulumi.runtime.registerStackTransformation((args) => {
  if (args.props.name === undefined && !SKIP_RESOURCES.includes(args.type)) {
    const result = {
      props: {
        ...args.props,
        name: args.name + '-' + pulumi.getStack(),
      },
      opts: args.opts,
    };

    return result;
  }

  return args;
});

const keyAliasName = 'alias/customEmailSenderKeyAlias' + pulumi.getStack();
const kmsKey = new aws.kms.Key('customEmailSenderKey', {
  description: 'KMS key for custom email sender',
});
const keyAlias = new aws.kms.Alias('customEmailSenderKeyAlias', {
  name: keyAliasName,
  targetKeyId: kmsKey.keyId,
});
const customEmailSenderRole = new aws.iam.Role('customEmailSenderRole', {
  assumeRolePolicy: {
    Version: '2012-10-17',
    Statement: [
      {
        Action: 'sts:AssumeRole',
        Principal: {
          Service: 'lambda.amazonaws.com',
        },
        Effect: 'Allow',
      },
    ],
  },
});

const customEmailSenderPolicy = new aws.iam.Policy('customEmailSenderPolicy', {
  policy: {
    Version: '2012-10-17',
    Statement: [
      {
        Action: ['kms:Decrypt'],
        Effect: 'Allow',
        Resource: [kmsKey.arn],
      },
      // Add if you want to send emails with SES
      // {
      //   Action: ['ses:SendEmail', 'ses:SendRawEmail'],
      //   Effect: 'Allow',
      //   Resource: [
      //     process.env.TENANT_1_SENDER_IDENTITY as string,
      //     process.env.TENANT_2_SENDER_IDENTITY as string,
      //   ],
      // },
    ],
  },
});

new aws.iam.RolePolicyAttachment('customEmailSenderPolicyAttachment', {
  role: customEmailSenderRole,
  policyArn: aws.iam.ManagedPolicies.AWSLambdaExecute,
});
new aws.iam.RolePolicyAttachment('customEmailSenderPolicyAttachment2', {
  role: customEmailSenderRole,
  policyArn: customEmailSenderPolicy.arn,
});

const customEmailSenderLambda = new aws.lambda.Function(
  'customSenderEmail',
  {
    runtime: 'nodejs18.x',
    handler: 'index.handler',
    code: new pulumi.asset.AssetArchive({
      '.': new pulumi.asset.FileArchive('./custom-email-sender/dist'),
    }),
    environment: {
      variables: {
        KEY_ALIAS: keyAlias.name,
        KEY_ARN: kmsKey.arn,
      },
    },
    role: customEmailSenderRole.arn,
  },
  { dependsOn: [keyAlias] }
);
const userPool = new aws.cognito.UserPool('students', {
  lambdaConfig: {
    customEmailSender: {
      lambdaArn: customEmailSenderLambda.arn,
      lambdaVersion: 'V1_0',
    },
    kmsKeyId: kmsKey.arn,
  },
});

new aws.lambda.Permission('allow-cognito', {
  action: 'lambda:InvokeFunction',
  function: customEmailSenderLambda.name,
  principal: 'cognito-idp.amazonaws.com',
  sourceArn: userPool.arn,
});

export const userPoolId = userPool.id;
export const customSenderEmailLambdaArn = customEmailSenderLambda.arn;
