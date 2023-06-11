type foo = {
    name: string;
    age: string;
}
type coo = {
    age: number;
    sex: string
}

type Merge<T1, T2> = {
    [key in keyof T1 | keyof T2]
    : key extends keyof T2 ? T2[key]
        : key extends keyof T1 ? T1[key]
            : never;
}

type Result = Merge<foo, coo>; // expected to be {name: string, age: number, sex: string}