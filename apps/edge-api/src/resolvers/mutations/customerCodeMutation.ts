import {
  createSupabaseClient,
  generateSupabaseToken,
} from "../../helpers/supabase";
import { AppError } from "../../models/errors";
import { Context } from "../../typings";

export const createCustomerCodeMutation = async (
  _obj: unknown,
  args: { code: string },
  context: Context
) => {
  if (context.request.user === undefined) {
    throw new AppError(undefined, "UNAUTHORIZED");
  }

  const token = await generateSupabaseToken(context.request.user);
  const supabase = createSupabaseClient(token);

  const { data: students } = await supabase.from("students").select();

  const student = students?.[0];

  if (student === undefined || student === null) {
    throw new AppError("Student not found", "UNAUTHORIZED");
  }

  const { error, data: codes } = await supabase
    .from("support_codes")
    .insert([{ code: args.code, student_id: student.id }])
    .select();

  if (error !== null || codes?.length === 0) {
    throw new AppError(String("Error creating customer code"));
  }

  return codes[0];
};
