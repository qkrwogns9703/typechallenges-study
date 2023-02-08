type ExampleType = Promise<string>

type MyAwaited<T> = T extends Promise<infer B> ? B : never;

type Result = Awaited<ExampleType> // string
