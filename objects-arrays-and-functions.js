const names = ['Prateek', 'Shaun', 'Alex'];

console.log(typeof names);

console.log(Object.entries(names));

// => Arrays are objects too !!

// Functions are objects too !!
// [[Call]]

function randomFunction() {
  return Math.random() * 100;
}
console.log(typeof randomFunction);
randomFunction.name = 'Prateek';
randomFunction.address = 'Earth';
randomFunction.friends = ['Shaun','Alex'];
// randomFunction['address'] = 'Earth';
console.log(randomFunction);
console.log(randomFunction.name);
console.log(randomFunction.address);
console.log(randomFunction.friends);

