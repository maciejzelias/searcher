export const countAverageRisk = (risks: number[]) => {
  // reduce function starts from zero and has ability to add/delete
  // every element to actual sum
  const sum = risks.reduce((partialSum, a) => partialSum + a, 0);

  return (sum / risks.length).toFixed(1);
};
