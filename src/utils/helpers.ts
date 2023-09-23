export const formatPercentage = (percentage: number) => {
  return percentage.toFixed(0) + "%";
};

export const countErrors = (actual: string, expected: string) => {
  const expectedCharacters = expected.split("");

  return expectedCharacters.reduce((errors, expectedChar, i) => {
    const actualChar = actual[i];
    if (actualChar !== expectedChar) {
      errors = errors + 1;
    }
    return errors;
  });
};

export const calculateAccuracyPercentage = (errors: number, total: number) => {
  if (total > 0) {
    return (errors / total) * 100;
  }
  return 0;
};
