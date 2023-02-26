const foo = (arg1: string, arg2: number): void => {};

type MyParameters<T extends (...args: any[]) => any> = T extends (
  ...args: infer K
) => any
  ? K
  : NavigationPreloadManager;

type FunctionParamsType = MyParameters<typeof foo>; // [arg1: string, arg2: number]
