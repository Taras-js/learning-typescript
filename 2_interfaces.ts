interface Rect {
    readonly id: string
    color?: string
    size: {
        width: number
        height: number
    }
}
// модификатор readonly - только для чтения
// color?: необязательное поле
const rect2: Rect = {
    id: '12345',
    size: {
        width: 10,
        height: 4
    },
    color: '#fff'
}
// пример переопределения
rect2.color = 'black'
// rect2.id = '222' - нельзя
//Указывать к какому типу будет относиться объект 1. по новому 2, альтернативная старая запись
const rect3 = {} as Rect
const rect4 = <Rect>{}
// ============Наследование интерфейсов================

interface RectWithArea extends Rect {
    getArea: () => number
}
// extends - наследование
const rect5: RectWithArea = {
    id: '123456',
    size: {
        width: 200,
        height: 20
    },
    getArea(): number {
        return this.size.width*this.size.height
    }
}
//================Взаимодействие====================
// интерфейсф очень часто называют через I что говорит о том что мы работаем через Interface
interface IClock {
    time: Date
    setTime(date: Date): void
}
class Clock implements IClock {
    time: Date = new Date()
    setTime(date: Date) {
        this.time = date
    }
}

//==============================
interface Styles {
    [key: string]: string
}
const css = {
    border: '1px solid black',
    marginTop: '2px',
    borderRadius: '5px'
}
