const myCar = {
  color: "red",
  make: "tesla",
  model: "cybertruck",
  mileage: 30,
  1: "green",
  "plate type": "ceramic",
};

const propertyName = "color";

// console.log(myCar[propertyName]);

// console.log(myCar["plate type"]);

const person = {
  fullName: "Peter Okoye",
  sayHello() {
    return `Hello there, ${this.fullName}`;
  },
};

console.log(person.sayHello());

Object.defineProperty(person, "school", {
  value: "University of lagos",
  writable: false,
  enumerable: true,
  configurable: true,
});
// console.log(person);

person.school = 'MIT'
// delete person.school
// console.log(person.school);

// console.log(JSON.stringify(person));

const computerInfo = {
  manufacturer: "Apple",
  productName: "MacBook Pro",
  productID: "KDU897F7",
}

Object.defineProperty(computerInfo, "hasWarranty", {
  value: true,
  writable: false,
  enumerable: false,
  configurable: false
})

// Object.getPrototypeOf(computerInfo).batteryLife = "100%";
console.log(Object.keys(computerInfo));
console.log(Object.values(computerInfo));

console.log(Object.entries(computerInfo));