//expects an array of arrays without nested object
export const flattenArray = (arr: Array<any>) =>
  arr.reduce((acc, item) => (Array.isArray(item) ? acc.concat(item) : acc), []);

//expects an array of objects with arrays as children
export const flattenArrayNested = (arr: Array<any>, key: string) =>
  arr.reduce(
    (acc, item) => (Array.isArray(item?.[key]) ? acc.concat(item?.[key]) : acc),
    []
  );
