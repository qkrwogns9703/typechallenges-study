declare function PromiseAll<T extends any[]>(
  value: readonly [...T]
): Promise<{
  [key in keyof T]: Awaited<T[key]>;
}>;
