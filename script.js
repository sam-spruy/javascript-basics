import {pi} from "./another.js";
console.log(pi);

console.log("Hello, Sam")

let message = "Hello, Javascript";
const author = "Instructor";
var count = 0;

let arr = ['a', 'b', 'c']
console.log(arr.length) // outputs the array length = 3
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    // what you want it to do
}

// Conditionals
let age = 7
if (age == 10) {
    console.log("not allowed to drink")

}

else if(age >= 18) {
    console.log("Have a beer")
}

else {
    console.log('Have milk')
}
let day = "Tuesday";
switch (day) {
    case "Monday":
        console.log("Get up for work");
    case "Tuesday":
        console.log("Another slog day")
        break;
    case "Saturday":
        console.log("It's the weekend");
}

const button = document.getElementById("ClickButton");
const nameInput = document.getElementById("InputText");
const button2 = document.getElementById("GreetButton");
const output = document.getElementById("output");

button2.addEventListener("click", () => {
    let name = nameInput.value;

    if(name) {
        output.innerText = `Hello, ${name}`; 
    }
    
    else {output.innerText = "Please enter your name";} 

});

