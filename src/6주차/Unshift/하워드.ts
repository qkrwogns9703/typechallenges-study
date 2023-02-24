type Unshift<A extends unknown[], B> = [B, ...A]
type Result = Unshift<[1, 2], 0> // [0, 1, 2,]
