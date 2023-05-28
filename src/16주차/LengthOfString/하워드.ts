type LengthOfString<T extends string, C extends string[] = []> =
    T extends `${infer before}${infer rest}` ? LengthOfString<rest, [...C, before]> : C['length'];

// type LengthOfString<T extends string[] = ['h','e','l','l','o','','w','o','r','l','d']> = T['length'];

type Result = LengthOfString<'hello world'>;

const r: Result = 11;