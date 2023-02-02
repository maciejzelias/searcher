export const getApiCallUrl = (param: string): string => {
  return `http://localhost:3000/search?query=${param}`;
};
