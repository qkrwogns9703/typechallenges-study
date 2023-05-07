type Trim<T extends string> =  T extends
    `${' '}${infer rest}` ? Trim<rest> :  T extends `${infer rest}${' '}` ? Trim<rest> : T;

type trimmed = Trim<'  Hello World  '> // expected to be 'Hello World'
