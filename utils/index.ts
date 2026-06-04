export const createSlug = (text: string): string => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "") // remove special characters
    .replace(/\s+/g, "-")     // replace spaces with -
    .replace(/-+/g, "-");     // remove duplicate -
};