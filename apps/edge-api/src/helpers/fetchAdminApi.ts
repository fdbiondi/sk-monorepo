import { AdminApiResponse, Context } from "../typings";
import { AppError } from "../models/errors";

/**
 * Fetches data from the admin API.
 *
 * @param query - The GraphQL query.
 * @param tenantId - Tenant identifier.
 * @param authorization - Authorization token.
 * @param variables - Optional GraphQL variables.
 * @returns The JSON response from the API.
 */
export function fetchAdminApi(context: Context) {
  return async (query: string, variables: object = {}) => {
    const result = await fetch(String(globalThis.ADMIN_API), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: context.request.headers.get("Authorization"),
      },
      body: JSON.stringify({ query, variables }),
    });

    const response = (await result.json()) as AdminApiResponse;

    if (response.message === "jwt expired") {
      throw new AppError(undefined, "JWT_EXPIRED");
    }

    if (
      Array.isArray(response.errors) &&
      response.errors.some(
        (e) =>
          e.message === "Cannot read properties of undefined (reading 'id')"
      )
    ) {
      throw new AppError(undefined, "UNAUTHORIZED");
    }

    return response;
  };
}