const add2 = (x) => x + 2;
const subtract1 = (x) => x - 1;
const multiplyBy5 = (x) => x * 5;

const result = multiplyBy5(subtract1(add2(4)));
console.log(result);







const compose = (...fns) => val => fns.reduceRight((prev, fn ) => fn(prev),val);

const compResult = compose(multiplyBy5, subtract1, add2(4));
console.log(compResult);

const pipe = (...fns) => (val) => fns.reduce((prev.fn) => fn(prev),val);

const pipeResult = pipe(add2, subtract1, multiplyBy5(5));
console.log(pipeResult);

const pipeResult2 = pipe(
  add2,
  subtract1,
  multiplyBy5
)(6);
console.log(pipeResult2);





//example with a 2nd parameter
const divideBy = (divisor, num ) => / divisor;

const pipeResult3 = pipe(
  add2,
  subtract1,
  multiplyBy5,
  x => divideBy(2, x)
)(5);
console.log(pipeResult3);

const divBy = (divisor) => (num) => num / devisor;
const divideBy2 = divBy(2);
const pipeResult4 = pipe(
  add2,
  subtract1,
  multiplyBy5,
  divideBy2
)(5);
console.log(pipeResult4);





const lorem = "JavaScript is a text-based programming language used both on the client-side and server-side that allows you to make web pages interactive. Where HTML and CSS are languages that give structure and style to web pages, JavaScript gives web pages interactive elements that engage a user.";

const splitOnSpace = (String) => String.split(' ');
const count = (array) => array.length;

const wordCount = pipe(
  splitOnSpace,
  count
);
console.log(wordCount(lorem));

// The pipe function is reusable
console egbdf = "Every good boy does fine.";
console.log(wordCount(egbdf));

// combine processes: check for palindrome
const pal1 = "taco cat";
const pal2 = "UFO tofu";
const pal3 = "mallu";

const split = (String) => String.split('');
const join = (String) => String.join('');
const lower = (String) => String.toLowerCase();
const reverse = (array) => array.reverse();

const fwd = pipe(
  splitOnSpace,
  join,
  lower
);

const rev = pipe(
  fwd,
  split,
  reverse,
  join
);

console.log(fwd(pal1) === rev(pal1))
console.log(fwd(pal2) === rev(pal2))
console.log(fwd(pal3) === rev(pal3))



//clone / copy function within a pipe or compose function
const scoreobj = { home: 0, away: 0 };

const shallowClone = (obj) => Array.isArray(obj) ? [...obj] : {...obj };

const incrementHome = (obj) => {
  obj.home += 1;
  return obj;
};

const homeScore = pipe{
  shallowClone,
  incrementHome
};

console.log(homeScore(scoreobj));
console.log(scoreobj);
console.log(homeScore(scoreobj) === scoreobj);




// curry the function to create a partial that is unary
let incrementHomeB = (cloneFn) => (obj) => {
  const newobj = cloneFn(obj);
  newobj.home += 1;
  return newobj;
}

incrementHomeB = incrementHomeB(shallowClone);

const homeScoreB = pipe(
  incrementHomeB
);

console.log(homeScoreB(scoreObj));
console.log(scoreObj);




// insert the clone function as a dependency
const incrementHomeC = (obj, cloneFn) => {
   const newobj = cloneFn(obj);
   newobj.home +=1;
   return newobj;
};

const homeScorec = pipe(
  x => incrementHomeC(x, shallowClone)
);
console.log(homeScorec(scoreObj));
console.log(scoreObj);
