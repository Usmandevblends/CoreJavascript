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

function sayHello() {
  console.log("Hello");
}

function add(num1, num2, callback) {
  console.log(num1 + num2);
  callback();
}
add(5, 3, sayHello);
