type Test = '123';

type StringToUnion<T extends string> = T extends `${infer before}${infer rest}` ? before | StringToUnion<rest> : never

type Result = StringToUnion<Test>; // expected to be "1" | "2" | "3"
