interface Chainable<T extends Record<string, unknown> = {}> {
    option: <K extends string, V extends unknown>(key:string, value:unknown) => Chainable<Omit<T, K> & Record<K, V>>
    get: () => T
}

declare const config: Chainable

const result = config
    .option('foo', 123)
    .option('name', 'type-challenges')
    .option('bar', { value: 'Hello World' })
    .get()

// expect the type of result to be:
interface Result {
    foo: number
    name: string
    bar: {
        value: string
    }
}
