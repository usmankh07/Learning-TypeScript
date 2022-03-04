let id:number = 5;
let company: string = 'Learn With Usman'
let isPublished: boolean = true
let x: any = 'learn'


let ids: number[] = [1,2,3,4,5,6]

// Tuple
let person: [number, string, boolean] = [2, 'Usman', false]
// Tuple of Array
let employee: [number, string][]

employee = [
    [1, 'Usman'],
    [2, 'Qaisar'],
    [3, 'Umer']
]


// Union



let pid: string | number

pid = 'Usman'


// enum

enum direction1 {
 Up,
 Down,
 Left,
 Right   
}
enum direction2 {
 Up = 'Up',
 Down = 'Down',
 Left = 'Left',
 Right = 'Right'   
}

console.log(direction1.Down);
console.log(direction1.Up);
console.log(direction1.Left);
console.log(direction1.Right);

console.log(direction2.Down)



// Objects

type User = {
    id: number,
    name: string
}

const user: User = {
    id: 2,
    name: 'usman'
}

console.log(user.name)
console.log(user. id)