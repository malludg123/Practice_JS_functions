// object literals
const person = {
  alive: true
}

const musician = {
  plays: true
}

Object setPrototypeof(musician, person);
console.log(musician, plays);
const guitarist = {
  String: 6,
  __proto__: musician
}

console.log(guitarist.alive);
console.log(guitarist.plays);
console.log(guitarist.String);
console.log(guitarist);




// object wit getter and setter method
const car = {
  doors: 2,
  seats: `vinyl`,
  get seatMaterial() {
    return this.seats;
  },
  set seatMaterial(material) {
    this.seats = material;
  }
}

const luxuryCar = {};
Object.setPrototypeOf(luxuryCar, car);
luxuryCar.seatMaterial = "leather";
console.log(luxuryCar);
console.log(luxuryCar.doors);
console.log(car);
console.log(luxuryCar.valueOf());


//getting the key of an object
console.log(Object.keys(luxuryCar));

Object.keys(luxuryCar).forEach(key => {
  console.log(key);
});

for (let key in luxuryCar) {
  console.log(key);
} 



// object constructors
function Animal(species) {
  this.species = species;
  this.eats = true;
}
Animal.prototype.walks = function () {
   return `A ${this.species} is walking.`;
};

const Bear = new Animal("bear");
console.log(Bear.species);
console.log(Bear.walks());

console.log(Bear.__proto__);
console.log(Bear.__proto__ === Animal.prototype);
console.log(Animal.prototype);
console.log(Bear);




// classes example o f inheritance
class vehicle {
  constructor () {
    this.wheels = 4,
    this.motorized = true
  }
  ready() {
    return "Ready to go!";
  }
}

class motorcycle extends Vehicle {
  constructor() {
    super();
    this.wheels = 2
  }
  wheelie() {
    return " On one wheel now!";
  }
}

const myBike = new motorcycle();
console.log(myBike);
console.log(myBike.wheels);
console.log(myBike.ready());
console.log(myBike.wheelie());

const myTruck = new Vehicle();
console.log(myTruck);