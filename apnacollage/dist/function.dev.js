"use strict";

// function sum(a, b) {
//   console.log(a + b);
// }
// function calculator(a, b, sumCallback) {
//   sumCallback(a, b);
// }
// calculator(1, 2, sum);
// Asyschronous callbacks
// const hello = () => {
//   console.log("Hi");
// };
// setTimeout(hello, 3000);
// function greet(name, callback) {
//     console.log('Hi' + ' ' + name);
//     callback();
// }
// // callback function
// function callMe() {
//     console.log('I am callback function');
// }
// // passing function as an argument
// greet('Peter', callMe);
// promises
// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("I am a Promise");
//         resolve("success");
//         // reject("error");
//     });
// };
// let promise = getPromise();
// promise.then((res) => {
//     console.log("Promise resolved", res);
// });
// promise.catch((err) => {
//     console.log("rejected", err);
// });
// function asyncFunc() {
//     return new Promise((resolve, reject) => {
//         setTimeout(()=> {
//             console.log('some data1')
//         },3000)
//     });
// }
// call backs funcation examples
// function greet(name, callback) {
//     console.log("Hello, " + name);
//     callback();
// }
// greet("John", sayGoodbye);
// function sayGoodbye() {
//     console.log("Goodbye!");
// }
// Question 1
// function greetUser(name, callback) {
//     return callback(name);
//   }
//   function greetingMessage(name) {
//     return "Hello, " + name + "!";
//   }
//   const message = greetUser("John", greetingMessage);
//   console.log(message);
// Q2
// function calculate(num1, num2, callback) {
//   return callback(num1, num2);
// }
// function add(a, b) {
//   return a + b;
// }
// function subtract(a, b) {
//   return a - b;
// }
// function multiply(a, b) {
//   return a * b;
// }
// console.log(calculate(5, 3, add));
// console.log(calculate(5, 3, subtract));
// console.log(calculate(5, 3, multiply));
// QNo
// function performAsyncOperation(callback) {
//   console.log("Fetching data...");
//   setTimeout(function () {
//     const data = { name: "Sample Data" };
//     callback(data);
//   }, 2000);
// }
// function handleData(data) {
//   console.log("Data received:", data);
// }
// performAsyncOperation(handleData);
//
// function show() {
//   console.log("Hello, World!");
// }
// function geeky(callback) {
//   callback();
// }
// geeky(show);
// function age() {
//   let age = prompt("And your age");
//   if (age >= 18) {
//     console.log("You are an adult");
//   } else {
//     console.log("You are a minor");
//   }
// }
// function name() {
//   let name = prompt("What is Your Name?");
//   console.log(name);
// }
// function profession() {
//     let profession = prompt("Your profession?");
//     console.log(profession);
//   }
//   function details(callback1, callback2, callback3) {
//     callback1();
//     callback2();
//     callback3();
//   }
//   details(name, age, profession);
//
// console.log("Starting...");
// setTimeout(() => {
//   console.log("Step 1: First operation");
//   setTimeout(() => {
//     console.log("Step 2: Second operation");
//     setTimeout(() => {
//       console.log("Step 3: Third operation");
//       setTimeout(() => {
//         console.log("Step 4: Fourth operation");
//         console.log("All steps completed!");function homeTour(callback) {
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);
// function welcomeHome(callback) {
//     console.log('Welcome to Our Home')
//     setTimeout(() => {
//       console.log('Please come in')
//       setTimeout(() => {
//         console.log('You can sit this side')
//         setTimeout(() => {
//           console.log('Can I offer you something to drink?')
//           callback();
//         }, 2000)
//       }, 2000)
//     }, 2000)
//   }
//   welcomeHome(() => {
//     console.log('I will have a glass of water, thank you!');
//   });
console.log("Starting API calls...");

function apiCall1(callback) {
  setTimeout(function () {
    console.log("API Call 1 completed");
    callback();
  }, 1000);
}

function apiCall2(callback) {
  setTimeout(function () {
    console.log("API Call 2 completed");
    callback();
  }, 1000);
}

function apiCall3(callback) {
  setTimeout(function () {
    console.log("API Call 3 completed");
    callback();
  }, 1000);
}

apiCall1(function () {
  apiCall2(function () {
    apiCall3(function () {
      console.log("All API calls completed!");
    });
  });
});
console.log('Leadders');

function step1() {
  setTimeout(function () {
    console.log('Step 1 completed');
  });
}

function step2() {
  setTimeout(function () {
    console.log('Step 2 completed');
  });
}