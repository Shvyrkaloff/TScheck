class Typescript {
    version: string

    constructor(version: string){
        this.version = version
    }
    info (name: string) {
        return '[${name}]: Typescript version is ${this.version}'
    }
}

class Car {
    readonly model: string
    readonly numberOfWgeels: number = 4

    constructor(theModel : string) {
        this.model = theModel
    }
}

class Animal {
    protected voice: string = ''
    public color: string = 'black'
    private go() {
        console.log('Go')
    }
    constructor() {
        this.go()
    }
}

class Cat extends Animal {
    public setVoice(voice:string): void {
        this.voice = voice
    }
}

const cat = new Cat()
cat.setVoice('tesr')
console.log(cat.color)


abstract class Component {
    abstract render(): void
    abstract info(): string
}

class AppComponent extends Component {
    render(): void {
        console.log('Component on render')
    }
    info(): string {
        return 'This is info';
    }
}