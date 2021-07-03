export const isWithinLength = (value: string, maxLength: number) => value.length <= maxLength;

export const isNumeric = (value: string) => value.match(/^\d+$/);
