type MyTrimLeft<T extends string> = T extends `${" " | "\n" | "\t"}${infer R}`
  ? MyTrimLeft<R>
  : T;
