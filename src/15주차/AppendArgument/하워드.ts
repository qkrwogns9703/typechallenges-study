type Fn = (a: number, b: string) => number

type AppendArgument<F extends Function, T> = F extends (...args:infer rest) => infer R ? (...args: [...rest, T]) => R : never;

type Result = AppendArgument<Fn, boolean|string>
// expected be (a: number, b: string, x: boolean) => number
