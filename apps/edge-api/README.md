# Skillstery Students Edge API

## Build status

| Environment | Status                                                                                                                                                                                                                                    | Link                                                                               |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| Development | [![Development - apps/edge-api deploy](https://github.com/Skillstery/supabase/actions/workflows/dev_edge_api_deploy.yml/badge.svg?branch=development)](https://github.com/Skillstery/supabase/actions/workflows/dev_edge_api_deploy.yml) | [Student Edge API - Development Link](https://dev-students-api.skillstery.com)     |
| Staging     | [![Staging - apps/edge-api deploy](https://github.com/Skillstery/supabase/actions/workflows/dev_edge_api_deploy.yml/badge.svg?branch=staging)](https://github.com/Skillstery/supabase/actions/workflows/dev_edge_api_deployyml) | [Student Edge API - Staging Link](https://staging-students-api.skillstery.com) |
| Production  | [![Production - apps/edge-api deploy](https://github.com/Skillstery/supabase/actions/workflows/dev_edge_api_deploy.yml/badge.svg?branch=main)](https://github.com/Skillstery/supabase/actions/workflows/dev_edge_api_deploy.yml) | [Student Edge API - Production Link](https://students-api.skillstery.com)      |

## Deploy using Wrangler

### Environments:

- **Development**: [https://dev-students-api.skillstery.com/](https://dev-students-api.skillstery.com/)
- **Staging**: [https://staging-students-api.skillstery.com/](https://staging-students-api.skillstery.com/)
- **Production**: [https://students-api.skillstery.com/](https://students-api.skillstery.com/)

### Deployment Configuration

The `wrangler.toml` file contains the necessary configuration for deployments. In the global section, the most important element is the account ID. For our project, it's located as shown here:
![Alt text](misc/account-id.png)

Global variables are accessible in the local environment.

Each environment has its own configurations, including the app name (to uniquely identify them in a Wrangler worker deployment) and environment-specific variables (e.g., admin API instance corresponding to the environment).

### Prerequisites

- Install Wrangler locally.
- Log in to Cloudflare via the command line, ensuring you are accessing an account associated with the Skillstery project.

### Deployment Process

Deploy using Wrangler with the following command:

```bash
wrangler deploy --env {dev/staging/prod}
```

### Project setup

#### Switch to the proper node version

> If not already installed

```bash
nvm install
```

> If already installed

```bash
nvm use
```

#### Install Wrangler locally

```bash
npm i wrangler -g
```

> After installation, you should authorize Wrangler with your Cloudflare account ([wrangler login](https://developers.cloudflare.com/workers/wrangler/migration/v1-to-v2/wrangler-legacy/commands/#login))

```bash
wrangler login
```

#### Install dependencies

```bash
npm i
```

### Compile and Run locally for development

```bash
npm start
```

### Run tests

```bash
# jest
npm test
```

### Lint `coming soon!`

```bash
# eslint
npm lint
```

### Cognito Authentication

> Install AWS CLI going to the following link https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html

> Confirm the installation

```bash
aws --version
```

> Get `AccessToken` or `IdToken` from AWS Cognito to run Graphql queries

```bash
aws cognito-idp initiate-auth --auth-flow USER_PASSWORD_AUTH --region us-west-2 --client-id [COGNITO_CLIENT_ID] --auth-parameters USERNAME=[COGNITO_USERNAME],PASSWORD=[COGNITO_USER_PASSWORD]
```

> After creating a user in Cognito, it would ask to change the password. It can be done using the following command

```bash
aws cognito-idp respond-to-auth-challenge --client-id [COGNITO_CLIENT_ID] --challenge-name NEW_PASSWORD_REQUIRED --region us-west-2 --challenge-responses USERNAME=[COGNITO_USERNAME],NEW_PASSWORD=[COGNITO_USER_PASSWORD] --session [SESSION_TOKEN]
```

> Change Password of an AWS Cognito User, use the following command

```bash
aws cognito-idp change-password --region us-west-2 --previous-password [OLD_PASSWORD] --proposed-password [NEW_PASSWORD] --access-token [ACCESS_TOKEN]
```
