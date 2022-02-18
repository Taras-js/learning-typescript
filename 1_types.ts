const str: string = 'hello';
console.log(str)

// based types
// Primitive
const isFetching: boolean = true;
    const isLoading: boolean = false;
    let int: number = 42;
    // int = '' nod
const float: number = 4.2;
const num: number = 3e10;
const message: string = 'Hello Typescript';
//Array
const array: number[] = [1, 1, 2, 3, 4, 5, 8, 13];

const numberArray: Array<number> = [1, 2, 3, 4, 5, 6, 8];
const string: string[] = ['hello', 'bay', 'string', 'number'];
const string2: Array<string> = ['hay'];

// Tuple
const contact: [string, number] = ['Taras', 89378193017];
// Переопределение типа данных
let variable: any = 42;
variable = 'new string';
//Function
function saveMyName (name: string): void {
    console.log(name)
}
// void - ничего не возвращает
saveMyName('Valentin')

// Never -
// 1.когда фнкция возвращает ошибку и никогда не заканчивает свое выполнение
// 2. либо постоянно что-либо делает
function throwError(message: string): never {
    throw new Error(message)
}
function infinite(): never {
    while (true) {

    }
}

//Type
type Login = string;
const login: Login = 'Admin';
// const login2: Login = 43; -нельзя
type ID = string | number;
const id1: ID = 'Hello';
const id2: ID = 56;
// const id: ID = true;
type SomeType = string | null | undefined;
