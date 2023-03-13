interface Todo {
    title: string
    description: string
    completed: boolean
}

type MyOmit1<T, K> = {
    [key in keyof T as key extends K ? never : key] : T[key];
}

type MyExclude<T,K> = T extends K ? never : T;
type MyPick<T, K extends keyof T> = {
    [key in K] : T[key]
}

type MyOmit2<T, K> = MyPick<T, Exclude<keyof T, K>>

type TodoPreview1 = MyOmit1<Todo, 'description' | 'title'>
type TodoPreview2 = MyOmit2<Todo, 'description' | 'title'>

const todo1: TodoPreview1 = {
    completed: false,
}

const todo2: TodoPreview2 = {
    completed: false,
}
