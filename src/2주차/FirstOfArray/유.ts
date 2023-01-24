type arr1 = ["a", "b", "c"];
type arr2 = [3, 2, 1];

type First<T extends readonly string[] | number[]> = {
  [k in T[0]]: k;
};

type head1 = First<arr1>; // expected to be 'a'
type head2 = First<arr2>; // expected to be 3

// 예시1) type First<T extends any[]> = T extends [infer X, ...infer Y] ? X : never ;
// 예시2) type First<T extends any[]> = T extends [infer P, ...others] ? P : never;
// 예시3) type First<T extends any[]> = T['length'] extends 0 ? never : T[0]
// 예시4) type First<T extends any[]> = T extends [] ? never : T[0];
