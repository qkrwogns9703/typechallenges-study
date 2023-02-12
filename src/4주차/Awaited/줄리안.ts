type MyAwaited<T> = T extends PromiseLike<infer K> ? MyAwaited<K> : T;
