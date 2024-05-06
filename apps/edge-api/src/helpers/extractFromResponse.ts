type Path = string | string[];
type Data<T> = T | T[] | undefined;

export function extractFromResponse<DataType>(
  data: Data<DataType>,
  fieldPath?: Path
) {
  if (fieldPath === undefined) {
    return data;
  }

  if (typeof fieldPath === 'string') {
    fieldPath = fieldPath.split('.');
  }

  if (fieldPath.length === 0) {
    return data;
  }

  const field = fieldPath.shift() ?? '';

  if (data === null || data === undefined) {
    return data;
  }

  if (!Array.isArray(data) && !(typeof data === 'object' && field in data)) {
    return data;
  }

  if (!Array.isArray(data)) {
    return extractFromResponse(data[field], fieldPath);
  }

  const response = data.map((item) => item[field]);

  return extractFromResponse(response, fieldPath);
}
