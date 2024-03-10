// let x: number = 1;
// console.log(x);

/* ***************** */

// function greet(firstName: string) {
//     console.log(`Hello ${firstName} from Sagar`);
// }

// greet("Rishu");

/* ******************* */

// function sum(a: number, b: number): number {
//     return a+b;
// }

// const value = sum(1,2);
// console.log(value);


/* ******************** */

// function isLegal(age: number) {
//     if(age >= 18) {
//         return true;
//     } else {
//         return false;
//     }
// }

// let x = isLegal(18);


/* ********************** */


// function runAfter1s(fn: () => void) {
//     setTimeout(fn,1000);
// }

// runAfter1s(function() {
//     console.log("Hii there after 1s");
// })



/* *************Interfaces**************** */

// interface User {
//     firstName: string;
//     lastName: string;
//     email ?: string;
//     age: number
// }

// function isLegal(user: User) {
//     if(user.age > 18) {
//         return true;
//     } else {
//         return false;
//     }
// }

// function greet(user: User) {
//     console.log("hii there " + user.firstName);
// }

// isLegal({
//     firstName: "Rishu",
//     lastName: "Kumar",
//     email: "kumarrishu@gmail.com",
//     age: 22
// })

// greet({
//     firstName: "Rishu",
//     lastName: "Kumar",
//     age: 22
// })


/* ************** Implementing Interfaces ************** */


// interface Person {
//     name: string;
//     age: number;
//     greet(phrase: string): void;
// }

// class Employee implements Person {
//     name: string;
//     age: number;

//     constructor(n: string, a: number) {
//         this.name = n;
//         this.age = a;
//     }

//     greet(phrase: string): void {
//         console.log(`${phrase} ${this.name}`);
//     }
// }

// const e = new Employee("Rishu", 22);
// console.log(e.name);



/* *********** type ***************** */

// type GreetArg = number | string;

// function  greet(id: GreetArg) {
//     console.log(`${id} Rishu`);
// }

// greet(1);
// greet("hello");


/* ************** Enum *********************** */

enum Direction {
    Up,
    Dowm,
    Left,
    Right
}

function doSomething(keyPress: Direction) {
    if(keyPress == Direction.Up) {
        console.log("Up key is pressed");
    }
}

doSomething(Direction.Up);

console.log(Direction.Up);
console.log(Direction.Dowm);


/* ***************** Generics *************** */

type Input = number | string;

function firstEle(arr: Input[]) {
    return arr[0];
}