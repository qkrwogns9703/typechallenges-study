// import type { Equal } from '@type-challenges/utils'
export type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <
  T
>() => T extends Y ? 1 : 2
  ? true
  : false;

type Includes<T extends readonly any[], U> = T extends [infer C, ...infer R]
  ? Equal<C, U> extends true
    ? true
    : Includes<R, U>
  : false;
