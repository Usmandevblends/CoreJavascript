// write funcation

// let name = 'Muhammad Usman';
// document.write('Hello ' +name );

// variable
// let variable = 5;
// console.log(variable)

// comparision operators
// !==
// let a = 5;
// let b = 6;
// console.log(a != b); // a is not equal to b

// ===
// let a = 'usman';
// let b = 'maliaka';
// console.log ( a !== b); // a is equal to b

// logical operators
// && true
// let a = 5;
// let b = 6;
// console.log(a > b && a < b);

// // a is greater than b and a is less than b
// // ||
// let c = 5;
// let d = 6;
// console.log(c > d || c < d);
// // !
// let e = 5;
// let f = 6;
// console.log(!e > f);

// Bitwise opertors

// let a = 5;
// let b = 6;
// console.log(a & b);
// console.log(a | b);
// console.log(a ^ b);

// assignment operators compelte
// let a = 5;
// let b = 6;
// a += b;
// a -= b;
// a /= b;
// a *= b;
// console.log(a+=b);
// console.log(a-=b);
// console.log(a/=b);
// console.log(a*=b);
// console.log(a%=b);

// ternary operator
// let age = 12;
// let drink = age >= 18 ? "beer" : "juice";
// console.log(drink);

// if statement
// let age = 18;
// if (age <= 18) {
//     console.log("you are eligible to vote");
// }

// if else statement
// let age = 17;
// if (age >= 18) {
//     console.log("you are eligible to vote");
// } else {
//     console.log("you are not eligible to vote");
// }
// else if
// let age = 11;
// if (age >= 18) {
//     console.log("you are eligible to vote");
// } else if (age >= 12) {
//     console.log("you are not eligible to vote");
// } else {
//     alert('Ghar bataie')
// }

// Loop
// for loop
// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }
// while loop
// let i = 0;
// while (i < 10) {
//     console.log(i);
//     i++;
// }
// do while loop
// let i = 0;
// do {
//     console.log(i);
//     i++;
// } while (i < 10);
//

// for (let i = 5; i < 50; i++) {
//   let j = 12;
//   j = i + 5;
//   console.log("j " + j);
// }
// let j = 0;
// for (let i = 1; i < 10; i++) {
//     let k = i + 2;
//     j = j + k
//     console.log(j);
// }

// let j = 10000;
// for (let i = 1000; i<10005; i++) {
//     j = j - i;
//     console.log(j)
// }

// for (let i = 0; i<10; i++) {
//         console.log('Outer Loop' + i)
//         for (j=0;j<5; j++ ) {
//             console.log('Inner Loop' + j)
//         }
// }
// print 5 table in for loop
// for (let i = 1; i <= 10; i++) {
//   console.log("5 *", i, "=", i * 5);
// }

// break & continue
// for (let i = 0; i < 10; i++) {
//   if (i == 8) {
//     break;
//   }
// console.log(i)
// }

// Creating funcation
// function display() {
//     let fruit = prompt('Enter Fruit Name')
//     switch (fruit) {
//         case "apple":
//            alert("This is an apple.");
//             break;
//         case "orange":
//            alert("This is an orange.");
//             break;
//         case "banana":
//            alert("This is a banana.");
//             break;
//         default:
//            alert("I'm not sure what fruit this is.");
//             break;
//     }
// }
// display();

// How function call work
// console.log('Fist Line')
// console.log('Hello World!')
// function display() {
//     console.log('Inside Function')
// }
// console.log('Last Line')
// display()

function car() {
    let CarPriceAli = 1500;
    let CarPriceUsman = 80;
    let dff = CarPriceAli - CarPriceUsman;
    console.log(dff);
}
car()

// function with parameter in js

function car(price1 , price2) {
    let dff = price1 - price2;
    console.log(dff);
}
car(1500, 80);
