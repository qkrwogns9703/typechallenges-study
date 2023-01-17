interface PickTodo {
  title: string;
  description: string;
  completed: boolean;
}

type MyPick<T, K extends keyof T> = {
  [key in K]: T[key];
};

type TodoPreview = MyPick<PickTodo, "title" | "completed">;

const pickTodo: TodoPreview = {
  title: "Clean room",
  completed: false,
};
