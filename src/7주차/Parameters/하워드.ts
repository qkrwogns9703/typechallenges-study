const foo = (arg1: string, arg2: number): void => {}

type MyParameters<T> = T extends (...args: infer B) => unknown ? B : never;

type FunctionParamsType = MyParameters<typeof foo> // [arg1: string, arg2: number]