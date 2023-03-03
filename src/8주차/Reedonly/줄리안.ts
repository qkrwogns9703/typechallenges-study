type MyReadonly2<T, K extends keyof T = keyof T> = MyOmit<T, K> & {
  readonly [key in keyof T as key extends K ? key : never]: T[key];
};
