type Test = { id: '1' }
type AppendToObject<T extends Record<string, unknown>, K extends string, V extends unknown>
    = {
    [key in keyof T] : T[key];
} & {
    [key in K] : V;
}

type Result = AppendToObject<Test, 'value', 4> // expected to be { id: '1', value: 4 }