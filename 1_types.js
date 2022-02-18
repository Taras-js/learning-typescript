var str = 'hello';
console.log(str);
// based types
// Primitive
var isFetching = true;
var isLoading = false;
var int = 42;
// int = '' nod
var float = 4.2;
var num = 3e10;
var message = 'Hello Typescript';
//Array
var array = [1, 1, 2, 3, 4, 5, 8, 13];
var numberArray = [1, 2, 3, 4, 5, 6, 8];
var string = ['hello', 'bay', 'string', 'number'];
var string2 = ['hay'];
// Tuple
var contact = ['Taras', 89378193017];
// Переопределение типа данных
var variable = 42;
variable = 'new string';
//Function
function saveMyName(name) {
    console.log(name);
}
// void - ничего не возвращает
saveMyName('Valentin');
// Never -
// 1.когда фнкция возвращает ошибку и никогда не заканчивает свое выполнение
// 2. либо постоянно что-либо делает
function throwError(message) {
    throw new Error(message);
}
function infinite() {
    while (true) {
    }
}
var login = 'Admin';
var id1 = 'Hello';
var id2 = 56;
