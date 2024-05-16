/* 
    Qs1. Get user to input a number using prompt(“Enter a number:”). Check if the number is a multiple of 5 or not.
*/
// let num =  prompt('Enter a Number');

// if (num % 5 == 0 )  {
//     console.log(num,'num is multiple of 5')
// }else {
//     console.log(num,'num is not multiple of 5')
// }

// Practice Qs 2

// let score = prompt('Enter Your Score (0-100)');
// let grade;

// if (score >= 90 && score <= 100) {
//     grade = 'A';
//   }else if(score >= 70 && score <= 89) {
//     grade = 'B';
//   }else if(score >= 60 && score <= 69) {
//     grade = 'C';
//   }else if(score >= 50 && score <= 59) {
//     grade = 'D';
//   }else if(score >= 0 && score <= 49) {
//     grade = 'F';
//   }else {
//     grade = 'Invalid';
//   }
//   console.log( 'ACCORDING TO YOUR SCORES, YOUR GRADE WAS : ',grade);

// Practice Qs 3

// Loops in Js

// calculate the sum of numbers from 1 to 10
// let sum = 0;
// for(let i=1; i<=5; i++) {
//     sum = sum + i;
// }
// console.log('sum = ', sum)

// whilte loop

//  let i = 1;
//  while(i <= 5) {
//      console.log(i);
//      i++;
//  }

// do while loop

// let i = 20;
// do {
//   console.log('Hello World!');
//   i++;
// } while (i <= 10);

// for of loop

// let size = 0;
// let str = 'Hello World!';
// for (let i of str) {
//   console.log(i);
//   size++;
// }
// console.log('string size = ', size)

// for in loop

// let student = {
//   name: "Abigail",
//   age: 20,
//   cgpa: 7.5,
//   isPass: true,
// };

// for(let i in student) {
//   console.log('i =', i)
// }

//  Qs1. Print all even numbers from 0 to 100.
// let i = 0;
// for(let i = 0; i<=100; i++) {
//   if(i%2 === 0) {
//     console.log('i = ', i)s
//   }
// }

// Qs2. Create a game where you start with any random game number. Ask the user to keep
// guessing the game number until the user enters correct value.

// let gameNum = 25;
// let userNum = parseInt((prompt("Guess the game number : ")));
// while (userNum != gameNum) {
//   userNum = prompt("You Entered Wrong Number Guess again ");
// }
// alert("Congratualtions, You Enter The Right Number ");
// console.log(typeof gameNum)
// Strings in Js
// String is a sequence of characters used to represent text

// let str = 'HelloWorld!';
// console.log(str.length);

// Template Literals in Js
// let obj = {
//   item: "pen",
//   price: 10,
// };
// let output = `The Cost of ${obj.item} is ${obj.price} Rupees`;
// console.log(output)

// String Methods in JS
// These are built-in functins to manipulate a string
// let str = '    Hello World!   '
// console.log(str.trim())
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// let str = 'Hello';
// console.log(str.slice(0, 4))

// let str = 'Hello';
// console.log(str.replace('H', 'Y'))

// lets Practice
// Qs1. Prompt the user to enter their full name. Generate a username for them based on the input.
// Start username with @, followed by their full name and ending with the fullname length.

// let fullName = prompt("Enter Your FullName WithOut Spaces");
// let userName = "@" + fullName + fullName.length;
// console.log(userName)
// Get the button element

// const heading = document.getElementById("heading");
// const paragraph = document.querySelector("p");

// heading.addEventListener("click", () => {
//   heading.style.backgroundColor = "yellow";
// });

// paragraph.addEventListener("click", () => {
//   heading.style.backgroundColor = "cyan";
// });

// let math = 90,
//   eng = 77,
//   phy = 36,
//   urdu = 70;
// var total = math + eng + phy + urdu;
// let avg = total / 4;
// console.log("total marks = ", total);
// console.log("Average", avg);
// let userNum = parseInt(prompt("Enter your Number "));
// if (userNum >= 350) {
//   console.log("A Grade");
// } else if (userNum >= 300) {
//   console.log("B Grade");
// } else if (userNum >= 200) {
//   console.log("C Grade");
// } else if (userNum >= 100) {    
//   console.log("Grade D");
// } else {
//   console("Fail");
// }
// stiwtch
// const age = 30;

// switch (true) {
//   case (age > 10 && age < 20):
//     console.log('You are young');
//     break;
//   case (age >= 20 && age < 30):
//     console.log('You are a man');
//     break;
//   case (age >= 30 && age < 40):
//     console.log("You are an old man");
//     break;
//   default:
//     console.log("You are not eligible");
// }

// Test

// let num = parseInt(prompt('Enter a Number'));
// switch (num % 2) {
//     case 0:
//         alert('Even');
//         break;
//     case 1:
//         alert('Odd');
//         break;
//     default:
//         alert('Invalid');
// }
// console.log(typeof num)
//
// if else
// let num = parseInt(prompt("Enter a Number"));

// if (isNaN(num)) {
//   alert("Invalid");
// } else {
//   if (num % 2 === 0) {
//     alert("Even");
//   } else {
//     alert("Odd");
//   }
// }
