export default function formDataToJson(formData: FormData): string {
  const object: Record<string, FormDataEntryValue> = {};

  for (const [name, value] of formData.entries()) {
    object[name] = value;
  }

  return JSON.stringify(object);
}
