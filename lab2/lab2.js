// LAB 2: Introduction to JavaScript

// 1. Variables (var, let, const)
var a = 10;
let b = 20;
const c = 30;

console.log(a, b, c);

// 2. Function
function add(x, y) {
  return x + y;
}
console.log(add(5, 3));

// 3. Arrow Function
const multiply = (x, y) => x * y;
console.log(multiply(4, 2));

// 4. Object
const person = {
  name: "John",
  age: 25,
  greet: function () {
    return "Hello " + this.name;
  }
};
console.log(person.greet());

// 5. map()
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(n => n * 2);
console.log(doubled);

// 6. filter()
const filtered = numbers.filter(n => n > 2);
console.log(filtered);

// 7. Spread Operator
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2);

const obj1 = { x: 1, y: 2 };
const obj2 = { ...obj1, z: 3 };
console.log(obj2);