import {
  CognitoIdentityProvider,
  AdminCreateUserCommand,
  AdminUpdateUserAttributesCommand,
  AdminSetUserPasswordCommand,
  ListUsersCommand,
} from '@aws-sdk/client-cognito-identity-provider';
import { Database } from '@skillstery/supabase';
import { createClient } from '@supabase/supabase-js';

const STUDENT_PASSWORD = '12341234';

const provider = new CognitoIdentityProvider({
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
  },
  region: process.env.AWS_REGION as string,
});

const supabase = createClient<Database>(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
      detectSessionInUrl: false,
    },
  }
);

type Student = Database['public']['Tables']['students']['Row'];

async function createStudent(username: string, student: Student) {
  try {
    if (!student.email) {
      throw new Error('student email is required');
    }

    const result = await provider.send(
      new AdminCreateUserCommand({
        Username: username,
        UserPoolId: process.env.COGNITO_USER_POOL_ID as string,
        UserAttributes: [
          { Name: 'email', Value: student.email },
          { Name: 'given_name', Value: student.first_name ?? '' },
          { Name: 'family_name', Value: student.last_name ?? '' },
          { Name: 'custom:tenantId', Value: student.tenant_id },
          { Name: 'email_verified', Value: 'true' },
        ],
        MessageAction: 'SUPPRESS',
      })
    );

    console.info(
      'created user -> status code -> ' + result.$metadata.httpStatusCode
    );

    return result;
  } catch (err) {
    console.error('user creation cognito error: ', err);
    throw err;
  }
}

async function updateStudent(username: string, student: Student) {
  try {
    // if exist update email verified to true
    const updatedUserResult = await provider.send(
      new AdminUpdateUserAttributesCommand({
        Username: username,
        UserPoolId: process.env.COGNITO_USER_POOL_ID as string,
        UserAttributes: [
          { Name: 'given_name', Value: student.first_name ?? '' },
          { Name: 'family_name', Value: student.last_name ?? '' },
          { Name: 'email_verified', Value: 'true' },
        ],
      })
    );

    console.info(
      'updated user -> status code -> ' +
        updatedUserResult.$metadata.httpStatusCode
    );

    if (updatedUserResult.$metadata.httpStatusCode !== 200) {
      throw new Error('failed to update user');
    }

    const updatedUserPassword = await provider.send(
      new AdminSetUserPasswordCommand({
        Username: username,
        Password: STUDENT_PASSWORD,
        Permanent: true,
        UserPoolId: process.env.COGNITO_USER_POOL_ID as string,
      })
    );

    console.info(
      'updated password -> status code -> ' +
        updatedUserPassword.$metadata.httpStatusCode
    );

    if (updatedUserPassword.$metadata.httpStatusCode !== 200) {
      throw new Error('failed to update user password');
    }
  } catch (err) {
    console.error('user update cognito error: ', err);
    throw err;
  }
}

async function seedStudentsToCognito() {
  const { data: students } = await supabase.from('students').select();

  if (students) {
    for (const student of students) {
      if (student.username) {
        console.info('\nusername: ' + student.username);

        await updateStudent(student.username, student);
      } else {
        const username =
          student.email?.concat('_').concat(student.tenant_id) ?? null;

        if (!username) {
          continue;
        }

        console.info('\nusername: ' + username);

        // create user and update it
        const created = await createStudent(username, student);

        if (
          created.$metadata.httpStatusCode !== 200 &&
          created.$metadata.httpStatusCode !== 201
        ) {
          console.error('failed to create user!');
          continue;
        }

        try {
          const sub = created.User?.Attributes?.find(
            (attr) => attr.Name === 'sub'
          )?.Value;

          await supabase
            .from('students')
            .update({ username, sub })
            .eq('id', student.id);
        } catch (e) {
          console.error('failed to update supabase student');
        }

        await updateStudent(username, student);
      }
    }
  }
}

const userPropsMap = {
  email: 'email',
  given_name: 'first_name',
  family_name: 'last_name',
  'custom:tenantId': 'tenant_id',
  sub: 'sub',
} as const;

const emptyStudent = {
  email: '',
  first_name: '',
  last_name: '',
  tenant_id: '',
  sub: '',
} as const;

async function seedStudentsToSupabase() {
  const result = await provider.send(
    new ListUsersCommand({
      UserPoolId: process.env.COGNITO_USER_POOL_ID as string,
    })
  );

  if (result.Users) {
    for (const user of result.Users) {
      if (!user.Username) {
        continue;
      }

      const { error: notFoundError } = await supabase
        .from('students')
        .select('*')
        .eq('username', user.Username)
        .single();

      if (notFoundError) {
        const defaultStudent = { ...emptyStudent };
        const props: typeof defaultStudent =
          user.Attributes?.reduce((acc, attr) => {
            if (attr.Name && attr.Name in userPropsMap) {
              acc[userPropsMap[attr.Name]] = attr.Value ?? '';
            }

            return acc;
          }, defaultStudent) ?? defaultStudent;

        if (Object.values(props).length !== 0) {
          const { data, error: insertError } = await supabase
            .from('students')
            .insert({
              username: user.Username,
              email: props.email,
              first_name: props.first_name,
              last_name: props.last_name,
              tenant_id: props.tenant_id,
              sub: props.sub,
            })
            .select('id');

          if (insertError) {
            console.error('failed to insert user: ', user.Username);
          } else {
            console.info(
              'a user for: ',
              user.Username,
              ' has been inserted',
              data[0].id
            );
          }
        }
      } else {
        console.info('user: ', user.Username, ' already exists');
      }
    }
  }
}

async function seedStudents() {
  await seedStudentsToCognito();
  await seedStudentsToSupabase();
}

seedStudents();
