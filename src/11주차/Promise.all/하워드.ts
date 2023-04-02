const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise<string>((resolve, reject) => {
    setTimeout(resolve, 100, 'foo');
});

type MyAwaited<T> = T extends Promise<infer B> ? B : T;
type PromiseAllFunction = <T extends unknown[]>(promises: T) => Promise<{
    [k in keyof T] : MyAwaited<T[k]>;
}>

declare const PromiseAll:PromiseAllFunction;

// expected to be `Promise<[number, 42, string]>`
const p = PromiseAll([promise1, promise2, promise3] as const)