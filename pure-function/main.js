// the same input always gives the same output
const add = (x, y) => x + y;
console.log(add(2, 3));

const fullName = (first, last) => `${first} ${last}`;
console.log(fullName("Mallu", "DG"));



// A puer function should have at least one parameter
const firstName = () =>"Mallu";

const firstName = "Mallu";



// No side effects
const z = 5;
const sum = (x, y) => x + y + z;
console.log(sum(2, 2));


// Impure example 1:
let x = 1;
const increment = () => x += 1;
console.log(increment());
console.log(x);

// impure Example 2:
const myArray = [1, 2, 3];
const addToArray = (array, data) => {
  array.push(data);
  return array;
}
console.log(addToArray(myArray, 4));
console.log(myArray);


// Refactoread Example 1:
const pureIncrement = (num) => num += 1;
console.log(pureIncrement(x));
console.log(x);


// refactoread Example 2:
const pureAddToArray = (array, data) => [...array, data];
console.log(pureAddToArray(myArray, 5));
console.log(myArray);



// These common higher order function are pure function
const oneToFive = oneToFive.filter(elem => elem % 2 !== 0);
console.log(oddToFive);

const doubled = oneToFive.map(elem => elem * 2);
console.log(doubled);

const summed = oneToFive.reduce((acc, elem) => acc + elem);
console.log(summed);
console.log(oneToFive);