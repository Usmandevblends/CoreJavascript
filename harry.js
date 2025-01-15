// Variable in Js
// block scope variable
// let a = 10;
//  {
//     let a = 20;
// }
// console.log(a);
// Global scope variable
// let a = 10;
// {
//   let a = 20;
//   console.log(a);
// }
// console.log(a);

// chapter 1
// Q1
// let a = 'Usman';
// let b = 1;
// console.log('a + b =', a + b)
// // Q2
// console.log(typeof a + b)

// Q3 & 4
// let obj = {
//     name: 'Sara',
//     age: 19
// };
// console.log(obj);
// obj['name'] = 'Maliaka';
// console.log(obj);

// Q5
// Write a Js program to create  a word-meaning dictionary of 5 words
// let dict = {
//     apple: 'a fruit',
//     banana: 'a fruit',
//     orange: 'a fruit',
//     mango: 'a fruit',
//     watermelon: 'a fruit'
// }
// console.log(dict);

// const heading = document.getElementById("heading");
// let data = true;
// heading.addEventListener("click" , () => {
//   if (data) {
//     data = false;
//     heading.style.background = "black";
//     heading.style.display = "flex";
//     heading.style.alignItems = "center";
//     heading.style.justifyContent = "center";
//     console.log(data);
//   }else{
//     heading.style.background = "none";
// data=true;
//   }
// });
// console.log(data);
//

// Asynchronous programing

// let a = 10;
// let b = 20;
// console.log(a + b);
// setTimeout(() => {
//   a = 100;
//   b = 200;
//   console.log(a + b);
// }, 2000);
// console.log(a + b);

// callbacks

// function loadScript(src, callback) {
//     const script = document.createElement("script");
//     script.src = src;
//     script.onload = function () {
//         callback();
//     }
//     document.body.appendChild(script);
// }

// function hello(src) {
//     alert('Hello World ' + src)
// }

// loadScript("https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@3.13.0/dist", function () {
//     hello('TensorFlow');
// });

// syschronous programing

// let a = 10;
// let b = 20;
// console.log(a + b);
// a = 100;
// b = 200;
// console.log(a + b);
// console.log(a + b);
// console.log(a + b);
// console.log(a + b);
// console.log(a + b);

// synchronous programing complex example
// let a = 10;
// let b = 20;
// let c = 30;
// let d = 40;
// let e = 50;

//  Asynchronous funcation simple example

// function myDisplayer(something) {
//     document.getElementById("demo").innerHTML = something;
//   }

//   function myCalculator(num1, num2, myCallback) {
//     let sum = num1 + num2;
//     myCallback(sum);
//   }

//   myCalculator(5, 5, myDisplayer);

// condition statement example

// let a = 5;
// let b = 10;
// let c = a > b ? a - b : b - a;
// console.log(c);

// if (a > b) {
//   console.log(a - b);
// } else {
//   console.log(b - a);
// }

// chapter 2 practice example
/*
  use logical operators to find whether the age of a person Lies between 10 and 20 ?
*/

// let personAge = 25;

// if (personAge >= 10 && personAge <= 20) {
//   console.log("The person's age lies between 10 and 20");
// } else {
//   console.log("The person's age does not lie between 10 and 20");
// }

/*
  Demonstrate the use of switch cases statements in javascript ?
*/
// let day = 3;

// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:  
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;
//   case 7:
//     console.log("Sunday");
//     break;
//   default:
//     console.log("Invalid day");
// }


// write a javascript program to find whether a number is divided by either 2 or 3 ?
// let num = prompt('Enter a number')

// if (num % 2 === 0 || num % 3 === 0) {
//   console.log("The number is divided by either 2 or 3");
// } else {
//   console.log("The number is not divided by either 2 or 3");
// }



let iceCream = "chocolate";
if (iceCream === "chocolate") {
  alert("Yay, I love chocolate ice cream!");
} else {
  alert("Awwww, but chocolate is my favorite…");
}

