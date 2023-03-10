type DeepReadonly<T extends Record<string, any>> = {
  readonly [key in keyof T]: T[key] extends Function
    ? T[key]
    : T[key] extends Record<string, any>
    ? DeepReadonly<T[key]>
    : T[key];
};
