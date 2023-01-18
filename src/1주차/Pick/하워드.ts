interface Todo {
    title: string
    description: string
    completed: boolean
}

type MyPick<T, P extends keyof T> = {
    [key in P] : T[key];
}

type TodoPreview = MyPick<Todo, 'title' | 'completed'>

const todo: TodoPreview = {
    title: 'Clean room',
    completed: false,
}