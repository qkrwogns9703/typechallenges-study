type Equal<A, B> = (<X>() => X extends A ? 1 : 2) extends <X>() => X extends B
  ? 1
  : 2
  ? true
  : false;
type Includes<T extends ReadonlyArray<unknown>, U> = T extends [
  infer R,
  ...infer K
]
  ? Equal<R, U> extends true
    ? true
    : Includes<K, U>
  : false;
