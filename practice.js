// Q1
// let sum  = 0;
// i = 0;
// while(i>= 0) {
//     sum = sum + i;
//     i = parseInt(prompt('Enter a Number'));
// }
// alert('Your sum is ' + sum)
// console.log(typeof sum)
// Q 3 Write a JavaScript program that iterates integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for multiples of five print "Buzz". For numbers multiples of both three and five print "FizzBuzz"
// for (let i = 1; i < 100; i++) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     console.log(" FizzBuzz "+ i);
//   } else if (i % 3 == 0) {
//     console.log( " Fizz "+i);
//   } else if (i % 5 == 0) {
//     console.log(" Buzz  "+i);
//   } else {
//     console.log('all '+i);
//   }
// }
// Tabel print 2 to 6 or using nested for loop
// for (let i = 2; i <= 6; i++) {
//       for (let j = 1; j <= 10; j++) {
//     console.log(i, "*", j, "=", i * j);
//       }}

// let i = 1;
// while(i<= 100) {
//     for (let i = 1; i < 100; i++) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     console.log(" FizzBuzz "+ i);
//   } else if (i % 3 == 0) {
//     console.log( " Fizz "+i);
//   } else if (i % 5 == 0) {
//     console.log(" Buzz  "+i);
//   } else {
//     console.log('all '+i);
//   }
// }
// }

// Q 4
// Take input from a user which will be a number check that if that input is event then show alert that it is even  it odd then show alert that it si odd
// let num = parseInt(prompt('Enter a Number'));
// console.log(typeof num)
// switch (num % 2) {
//     case 1:
//     alert('Even')
//     break;
//     case 2:
//         alert('odd')
//         break;
//         default:
//             alert('invalid')
// }