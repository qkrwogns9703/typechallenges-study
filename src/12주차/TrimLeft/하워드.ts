type TrimLeft<T extends string> = T extends `${' '}${infer rest}` ? TrimLeft<rest> : T;

type trimed = TrimLeft<'  Hello World  '> // expected to be 'Hello World  '
