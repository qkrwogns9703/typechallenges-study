interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type MyOmit<T, K extends keyof T> = {
  [U in Exclude<keyof T, K>]: T[U];
};

type TodoPreview = MyOmit<Todo, "description" | "title">;

const todo: TodoPreview = {
  completed: false,
};
