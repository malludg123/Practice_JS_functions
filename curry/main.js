// Currying look like this:
const buildSandwich = (ingredient1) =>{
   return (ingredient2) => {
    return (ingredient3) => {
      return `${ingredient1}, ${ingredient2}, ${ingredient3}`;
    }
   }
}

const mySandwich = buildSandwich("bacon")("Lettuce")("Tomato")
console.log(mySandwich);

// Lets Refactor

const buildSammy = ingred1 => ingred2 => ingred3 =>
`${ingred1}, ${ingred2}, ${ingred3}`;

const buildSammy = buildSammy("turket")("cheese")("bread");
//console.log(mySammy);

// Another example of currying function
const multiply = (x, y) => x * y;

const curriedMultiply = x => y => x * y;
console.log(multiply(2, 3));
console.log(curriedMultiply(2));
console.log(curriedMultiply(2)(3));

// Common use of currying function
const timesTen = curriedMultiply(10);
console.log(timesTen);
console.log(timesTen(8));

// Another Example
const updateElemText = id => content => document.querySelector(`#${id}`).textContent = content;
const updateHeaderText = updateElemText('header');
updateHeaderText('Hello Mallu!');


// Another common use of currying function composition
const addCustomer = fn => (...args) =>{
  console.log('saving costomer info...')
  return fn (...args);
}

const processOrder = fn => (...args) => {
  console.log(`processing Order #${args[0]}`)
  return fn(...args);
}

let completeOrder = (...args) => {
  console.log(`Order #${[...args].toString()} completed.`)
}

completeOrder = (processOrder(completeOrder));
console.log(completeOrder);
completeOrder = (addCustomer(completeOrder));
completeOrder("1000")

function addCustomer(...args) => {
  return function processOrder(...args) {
    return function completeOrder(...args) {
    }
  }
}


// Requires a function with a fixed number of parameters
const curry = (fn) => {
  return curried = (...args) => {
     if (fn.length !== args.length) {
      console.log(...args);
      return curried.bind(null, ...args);
     }
     return fn(...args);
  };
}

const total = (x, y, z) => x + y + z;

const curriedTotal = curry(total);
console.log(curriedTotal(10)(20)(30));