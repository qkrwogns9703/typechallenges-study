interface ReadonlyTodo {
  title: string;
  description: string;
}

type MyReadonly<T> = {
  readonly [k in keyof T]: T[k];
};

const readonlyTodo: MyReadonly<ReadonlyTodo> = {
  title: "Hey",
  description: "foobar",
};

// todo.title = "Hello"; // Error: cannot reassign a readonly property
// todo.description = "barFoo"; // Error: cannot reassign a readonly property
