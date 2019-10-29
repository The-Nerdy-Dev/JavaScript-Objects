// Object.defineProperty

const object = { };

// Object.defineProperty(object, 'name', {
//   value: 'Prateek'
// });

// console.log(object);
// console.log(object.name);

Object.defineProperty(object, 'name', {
  value: 'Prateek',
  writable: false,
  enumerable: true,
  configurable: true
});

console.log(object.name);
object.name = 'The Nerdy Dev';
console.log(object.name);

Object.defineProperty(object, 'lastname', {
  value: 'Madaan',
  enumerable: false
});

console.log(Object.keys(object));

// delete object.name;

// console.log(object.name);
// console.log(object);

Object.defineProperties(object, {
  propertyOne: {
    value: Math.random() * 100,
    writable: true
  },
  propertyTwo: { }
});
console.log(object.propertyOne);
