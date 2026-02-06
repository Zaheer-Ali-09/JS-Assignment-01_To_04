console.log("Hello Second Assignment");
// ________________________________Map_____________________________
// let numbers = [2, 4, 6];
// console.log("Original Array:", numbers);
// let mapResult = numbers.map((num, index) => {

//     console.log("map running on index:", index);
//     console.log("current value:", num);

//     let doubled = num * 2;
//     console.log("after double:", doubled);
//     return doubled;   
// });

// console.log("Final map result:", mapResult);
// ________________________________ForEach_____________________________
// let numbers = [2, 4, 6];

// console.log("Original Array:", numbers);

// let forEachResult = [];
// numbers.forEach((num, index) => {

//     console.log("forEach running on index:", index);
//     console.log("current value:", num);

//     let doubled = num * 2;
//     console.log("after double:", doubled);
//     forEachResult.push(doubled); // manually push
// });

// console.log("Final forEach result:", forEachResult);

// ________________________________Reduce_____________________________

// console.log("----- CONDITION 1: > 15 -----");

// let filtered1 = numbers.filter((num, index) => {

//   console.log("filter checking:", num);

//   return num > 15;
// });

// console.log("After filter:", filtered1);


// let result1 = filtered1.reduce((total, num) => {

//   console.log("reduce total before:", total);
//   console.log("adding:", num);

//   return total + num;

// }, 0);

// console.log("Final Result Condition 1:", result1);
// ________________filter + reduce
// let result1 = numbers
//   .filter(num => num > 30)   // filterCondition
//   .reduce((sum, num) => sum + num, 0); // reduce ttal

// console.log("Condition 1 Result:", result1);
// Array ________________________
// Original array
// let numbers = [1, 2, 3, 4];

// //  Custom map function   Sir ye code ai ka hai 
// function myMap(arr, callback) {
//   let newArray = [];

//   for (let i = 0; i < arr.length; i++) {

//     console.log("Callback chal raha hai for:", arr[i]); // log when callback runs

//     let result = callback(arr[i]); // callback call
//     newArray.push(result); // store result
//   }

//   return newArray;
// }

// // Using custom map
// let customResult = myMap(numbers, (num) => {
//   return num * 2;
// });

// //  Using real map
// let realResult = numbers.map(num => num * 2);

// // Compare outputs
// console.log("Custom Map Result:", customResult);
// console.log("Real Map Result:", realResult);
// just catch usee 
// try {
//   console.log("var value:", a);   // hoisted (undefined)
//   console.log("let value:", b);   // error
//   console.log("const value:", c); // error
// } catch (error) {
//   console.log("Error caught:", error.message);
// }

// // Declarations
// var a = 10;
// let b = 20;
// const c = 30;

// // Function hoisting test
// try {
//   sayHello(); // works (hoisted)
// } catch (error) {
//   console.log("Function Error:", error.message);
// }

// function sayHello() {
//   console.log("Hello! Function hoisted successfully.");
// }
// ok 
// function first() {
//   console.log(" Enter First");

//   function second() {
//     console.log(" Enter Second");

//     function third() {
//       console.log(" Enter Third");

//       // Async operation
//       setTimeout(() => {
//         console.log(" Async task inside Third (after 2 sec)");
//       }, 2000);

//       console.log("Exit Third");
//     }

//     third();
//     console.log(" Exit Second");
//   }

//   second();
//   console.log(" Exit First");
// }

// // Call main function
// first();
// _____________________________________
// function outer() {
//   let count = 10;   

//   return function inner() {
//     return count;   
//   };
// }

// // function mil gaya (closure bana)
// let myFunc = outer();

// console.log("First Result:", myFunc());

// count = 50;   

// console.log("After Change Result:", myFunc());
// ________________________________
// Object city variable me add kiya hai 
// let user = {
//   name: "Zaheer",
//   age: 22
// };

// let { name, age, city = "Karachi", country = "Pakistan" } = user;

// console.log("Name:", name);
// console.log("Age:", age);
// console.log("City:", city);
// console.log("Country:", country);
// _________________________________________//ReSt 
// function totalSum(...numbers) {   

//   for (let num of numbers) {
//     sum += num;   // properly process (add)
//   }

//   return sum;
// }

// //  Tests with different counts
// console.log("2 numbers:", totalSum(10, 20));
// console.log("4 numbers:", totalSum(5, 10, 15, 20));
// console.log("6 numbers:", totalSum(1, 2, 3, 4, 5, 6));
// Final simj nhi aya hai sir  AI Code 
// Original object
let original = {
  name: "Zaheer",
  marks: {
    math: 80,
    english: 70
  }
};

// ✅ Reference copy (direct assignment)
let refCopy = original;

// ✅ Spread copy (shallow copy)
let spreadCopy = { ...original };

// 🔄 Nested value change
refCopy.marks.math = 100;

// 📊 Results
console.log("Original:", original);
console.log("Reference Copy:", refCopy);
console.log("Spread Copy:", spreadCopy);
