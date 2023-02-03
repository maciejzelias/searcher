export const countAverageRisk = (risks: number[]) => {
  // reduce function starts from zero and has ability to add/delete
  // every element to actual sum
  const sum = risks.reduce((partialSum, a) => partialSum + a, 0);

  const result = (sum / risks.length).toFixed(1);
  return result.endsWith("0") ? parseInt(result) : result;
};
