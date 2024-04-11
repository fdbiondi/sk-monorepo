type Path = string | string[];
type Data<T> = T | T[] | undefined;

export function extractFromResponse<DataType, ReturnType>(
  data: Data<DataType>,
  fieldPath: Path
): ReturnType {
  if (typeof fieldPath === "string") {
    fieldPath = fieldPath.split(".");
  }

  if (fieldPath.length === 0) {
    return data as ReturnType;
  }

  const field = fieldPath.shift() ?? "";

  if (data === null || data === undefined) {
    return data as ReturnType;
  }

  if (!Array.isArray(data) && !(typeof data === "object" && field in data)) {
    return data as ReturnType;
  }

  if (!Array.isArray(data)) {
    return extractFromResponse(data[field], fieldPath);
  }

  const response = data.map((item) => item[field]);

  return extractFromResponse(response, fieldPath);
}
