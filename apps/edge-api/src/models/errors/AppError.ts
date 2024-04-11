import { ErrorMessages, ErrorType } from "../../typings";

export class AppError extends Error {
  constructor(message?: string, cause: ErrorType = "INTERNAL_ERROR") {
    super(message ?? ErrorMessages[cause], { cause });
  }
}
