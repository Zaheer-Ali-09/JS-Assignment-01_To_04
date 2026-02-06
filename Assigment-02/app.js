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

// ________________________________ForEach_____________________________

console.log("----- CONDITION 1: > 15 -----");

let filtered1 = numbers.filter((num, index) => {

  console.log("filter checking:", num);

  return num > 15;
});

console.log("After filter:", filtered1);


let result1 = filtered1.reduce((total, num) => {

  console.log("reduce total before:", total);
  console.log("adding:", num);

  return total + num;

}, 0);

console.log("Final Result Condition 1:", result1);
