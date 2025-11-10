export declare function groupBySum<T extends Record<string, any>>(
  items: T[],
  keyField: keyof T,
  valueField: keyof T
): Record<string, number>;
