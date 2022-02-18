interface Person {
    name: string
    age: number
}
type PersonKeys = keyof Person// 'name | 'age'
// keyof = создать интерфейс который будет содержать
// отдельный тип который будет состоять из ключей первого интерефейса
let key: PersonKeys = 'name'
key = 'age'
type User = {
    _id: number
    name: string
    email: string
    createAt: Date
    
}
// чтобы создать новый тип не включающий отдельный поля
//Здесь мы указываем какие поля надо исключить
type UserKeysNoMeta1 = Exclude<keyof User, '_id' | 'createAt'>// 'name' | 'email'
// Exclude = исключать
// keyof = key = ключ
// of = из
// Pick =выбирать
//Здесь мы указываем какие поля надо забрать
type UserKeysNoMeta2 = Pick<User, 'name'|'email'> // 'name' | 'email'

const u1 = 'name'
let u2 = 'name'
u2 = '_id'
let u3: UserKeysNoMeta1 = 'name'
// u3 = '_id'

