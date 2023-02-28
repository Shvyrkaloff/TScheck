const isFetching : boolean = true
const isLoading : boolean = false

const int : number = 43
const float : number = 4.4
const num : number = 3e10

const message : string = 'Hello Typescript'

const nubberArray : number[] = [1, 1, 2, 3, 4, 5, 8, 13]
const numberArray2 : Array<number> =  [1, 1, 2, 3, 4, 5, 8, 13]

const words:string[] = ['Hello', 'Typescript']

//Tuple
const contact : [string, number] = ['Zaid', 12345465]

//Any
let variable : any = 42

//...
variable = 'New string'

//====
function sayMyName(name : string): void{
    console.log(name)
}
sayMyName('glojof')

// Never
function throwError (message: string) : never {
    throw new Error(message)
    }


//Type
type Login = string
const login: Login = 'admin'
//const
type ID = string | number
const id1: ID = 1234
const id2 : ID = '1234'

type SomeType = string | null | undefined