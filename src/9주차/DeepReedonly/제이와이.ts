type DeepReadonly<T> = T extends Function
  ? T
  : {
      readonly [K in keyof T]: T[K] extends Object ? DeepReadonly<T[K]> : T[K];
    };
