type Test = -100;

type Absolute<T extends number | string | bigint> = `${T}` extends `${infer before}${infer after}` ?
    before extends '-' ? after : T : T;

type Result = Absolute<Test>; // expected to be "100"