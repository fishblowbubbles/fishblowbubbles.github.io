export const getPaddedNumberStrings = (
  start: number,
  end: number,
  maxLength: number,
  fillString = '0'
) => {
  let years: string[] = [];

  for (let i = start; i <= end; i++) {
    years.push(padNumber(i, maxLength, fillString));
  }

  return years;
};

export const padNumber = (number: number, maxLength: number, fillString = '0') => {
  const numberString = number.toString();
  const paddedString = numberString.padStart(maxLength, fillString);

  return paddedString;
};
