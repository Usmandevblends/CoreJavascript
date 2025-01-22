function nice(name) {
  console.log("Hey " + name + " your are nice");
  console.log("Hey " + name + " your are nice");
  console.log("Hey " + name + " your are Good");
  console.log("Hey " + name + " your are Tshirt is nice");
  console.log("Hey " + name + " your are course is too good");
}
nice("Usman");

function sum(a, b) {
  console.log(a + b);
}
sum(1, 2);



// function showClock() {
//     setInterval(() => {
//       const now = new Date();
//       let hours = now.getHours();
//       const minutes = now.getMinutes().toString().padStart(2, '0');
//       const seconds = now.getSeconds().toString().padStart(2, '0');
//       const period = hours >= 12 ? 'PM' : 'AM';

//       // Convert to 12-hour format
//       hours = hours % 12 || 12; // Convert 0 to 12 for midnight
//       hours = hours.toString().padStart(2, '0'); // Pad hours with 0 if needed

//       // Display the current time
//       console.log(`${hours}:${minutes}:${seconds} ${period}`);

//       // Check if it's 8 PM (20:00)
//       if (now.getHours() === 20 && now.getMinutes() === 0 && now.getSeconds() === 0) {
//         alert("8 PM has arrived!");
//       }else if (now.getHours() === 0 && now.getMinutes() === 0 && now. getSeconds() === 0) {
//         alert("12 AM has arrived!");
//       }
//     }, 1000); // Update every second
//   }

//   showClock();

// function showClock() {
//   setInterval(() => {
//     const now = new Date();
//     let hours = now.getHours();
//     const minutes = now.getMinutes();
//     const seconds = now.getSeconds();

    
//     // Display the current time
//     console.log(`${hours}:${minutes}:${seconds}`);
    
//   }, 1000);
//   if (now.getHours() > 0) {
//     console.log("Good Morning!");
//   }
// }

// showClock();
// practice set
// Q1: Write a program to print the marks of student in an object using for loop

let obj = {
  harry: 98,
  rohan: 70,
  akash: 70,
};

for (let key in obj) {
  console.log(key, obj[key]);
}

// useing for in loop

let num = {
  harry: 98,
  rohan: 70,
  akash: 70,
};
for (let key in num) {
  console.log(key + " : " + num[key]);
}


// Q3: write a program to print "try agin" until the user enters the correct number 

// let number = 5;
// let guess;

// for (let i = 0; i < 5; i++) {
//   guess = parseInt(prompt("Guess the number"));
//   if (guess === number) {
//     console.log("Congratulations! You guessed the number correctly");
//     break; 
//   } else {
//     console.log("Try again");
//   }
// }
// if (guess !== number) {
//   console.log("Sorry, you've used all attempts!");
// }


// Q4: Write a function to find mean of 5 number

function findMean(num1, num2, num3, num4, num5) {
  let sum = num1 + num2 + num3 + num4 + num5;
  let mean = sum / 5;
  return mean;
}

console.log(findMean(5, 100, 200, 400, 500));






/* create a faulty calculator using Javascript
This faulty calculator does following:

1. It take two numbers as input from the user 
2. It perfomes wrong operation as follows

+ -----> -
* -----> + 
- -----> /
/ -----> **
*/



function faultyCalculator() {
  // Step 1: Get user inputs
  const num1 = parseFloat(prompt("Enter the first number:")); // Input first number
  const num2 = parseFloat(prompt("Enter the second number:")); // Input second number
  const operation = prompt("Enter the operation (+, -, *, /):"); // Input operation

  let result; // Declare a variable to store the result

  // Step 2: Apply faulty logic using if-else
  if (operation === "+") {
      result = num1 - num2; // Faulty: Addition replaced with subtraction
  } else if (operation === "-") {
      result = num1 / num2; // Faulty: Subtraction replaced with division
  } else if (operation === "*") {
      result = num1 + num2; // Faulty: Multiplication replaced with addition
  } else if (operation === "/") {
      result = num1 ** num2; // Faulty: Division replaced with exponentiation
  } else {
      result = "Invalid operation!"; // Handle invalid input
  }

  // Step 3: Display the result
  alert(`The result of ${num1} ${operation} ${num2} is: ${result}`);
}

// Call the faulty calculator function
faultyCalculator();

