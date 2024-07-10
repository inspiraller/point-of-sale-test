export const hyphenate = (str: string) => str.replace(/[\W\s]/g, '-');
export const cropDecimal = (num: number) => num.toFixed(3).slice(0, -1);
