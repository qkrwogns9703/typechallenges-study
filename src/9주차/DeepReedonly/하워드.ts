type X = {
    x: {
        a: 1
        b: 'hi'
    }
    y: 'hey'
}

type DeepReadonly<T> = {
    readonly [key in keyof T] : T[key] extends Function ? T[key] : T[key] extends never ? T[key] : DeepReadonly<T[key]>
}

type Expected = {
    readonly x: {
        readonly a: 1
        readonly b: 'hi'
    }
    readonly y: 'hey'
}

type Todo = DeepReadonly<X> // should be same as `Expected`
