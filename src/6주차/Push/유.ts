type Push<T extends unknown[], K> = [...T, K];

type PushResult = Push<[1, 2], "3">; // [1, 2, '3']
