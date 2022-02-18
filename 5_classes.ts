class Typescript {
    version: string
    constructor(version: string) {
        this.version = version
    }
    info(name: string){
        return `[${name}]: Typescript version is ${this.version}`
    }
}

// class Car {
//     readonly model: string
//     readonly numberOfWheels: number = 4
//
//     constructor(theModel: string) {
//         this.model = theModel
//     }
// }
//Более продвинутая запись того же самого
class Car {
    readonly numberOfWheels: number = 4
    constructor(readonly model: string) {
    }
}
//================Модификаторы================
class Animal {
    protected voice: string = ''
    public color: string = 'black'
    private qq() {
        console.log('Go')
    }
}
// protected = защищенный
// voice = голос, мнение
// void = пустота
// extends = расширяет
// any = любые
class Cat extends Animal {
    public setVoice(voice: string):void {
        this.voice = voice
    }

}
const cat = new Cat()
// cat.voice = нет доступа до voice - protected свойство
// private = доступно только в классе Animal - классе родителе
// public = доступны или публичны
cat.setVoice('test you self')
console.log(cat.color)
//=====абстрактные классы и методы============
abstract class Component {
    abstract render(): void
    abstract info(): string

}
class AppComponent extends Component {
    render(): void {
        console.log('Component on render')
    }
    info(): string {
        return 'This is info'
    }
}
