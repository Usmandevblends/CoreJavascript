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
"use strict";