import { MyOmit } from "../Omit/제이와이";

type MyReadonly2<T, K extends keyof T> = MyOmit<T, K> & {
  readonly [key in keyof T as key extends K ? key : never]: T[key];
};
