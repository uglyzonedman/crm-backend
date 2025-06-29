export const generatedCode = (count: number) => {
  const min = Math.pow(10, count - 1);
  const max = Math.pow(10, count) - 1;
  return String(Math.floor(Math.random() * (max - min + 1)) + min);
};
