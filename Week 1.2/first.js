// console.log("Hii bro! How are you?");

// let firstName = "Rishu";
// let age = 22;
// let isMarried = false;

// console.log("this person name is " +firstName+ " and his age is " +age );


// if(isMarried) {
//     console.log(firstName + " is married");
// } else {
//     console.log(firstName + " is not married");
// }

// let ans = 0;

// for(let i = 1; i <= 100; i++) {
//     ans += i;
// }

// console.log("The value of sum is " + ans);

// Objects

// const user1 = {
//     firstName: "Rishu",
//     gender: "male"
// }

// console.log(user1["firstName"]);


/*

const allUsers = [
    {
        firstName: "Rishu",
        gender: "male"
    }, {
        firstName: "Raman",
        gender: "male"
    }, {
        firstName: "Rani",
        gender: "female"
    }
]

for(let i = 0; i < allUsers.length; i++) {
    if(allUsers[i].gender === "female") {
        console.log(allUsers[i].firstName);
    }
}

*/

// Functionn

const sum = (a,b) => {
    return a + b;
}

console.log(sum(5,5));


function sum(num1, num2) {
    let result = num1 + num2;
    return result;
}

function displayResult(data) {
    console.log("Result of the sum is : " + data);
}

function displayResultPassive(data) {
    console.log("Sum's result is : " + data);
}

// You are only allowed to call one function after this
// How will you displayResult of a sum

