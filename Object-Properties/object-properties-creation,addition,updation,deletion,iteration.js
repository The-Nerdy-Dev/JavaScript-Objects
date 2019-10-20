  // Everything about Objects in Action now...

// Creation a new object

// 1. Using the object literal way
const movieObject = {};
movieObject.name = 'The Fault in Our Stars';
movieObject.year = 2008;
movieObject.watchers = ['Shaun', 'Prateek', 'Alex', 'Kristina'];

console.log(movieObject);
// Example of circular dependency, referrer property refers to the object itself and this will
// go endlessly and you can further continue to access same properties in circular manner which
// is not required by any means in this case.

// Addition of properties to an object
movieObject.referrer = movieObject;
movieObject.director =
  'I dont know, literally who is the director. Google it:)';
movieObject.description = 'Nice Movie';
console.log(movieObject.year);
console.log(movieObject.referrer);

//using the Object constructor
const gameObject = new Object();
// Addition of properties to an object
gameObject.name = 'GTA San Andreas';
gameObject.releaseDate = '2011';
gameObject.description = 'Awesome game';
gameObject.referrer = gameObject;
const propertyName = 'cheat_Codes_Available';
// Using the computed property syntax
gameObject[propertyName.toUpperCase()] = true;
console.log(gameObject);
console.log(gameObject.name);
console.log(gameObject.releaseDate);
console.log(gameObject.description);
console.log(gameObject.referrer);

// Function as key values
// playGame here is the key and the function is the value pertaining to playGame
gameObject.playGame = function() {
  // this refers to the context in which this method is defined in (which is the gameObject)
  console.log(gameObject === this);
  console.log('The game is on....' + this.name);
};
gameObject.playGame();

// NOT ALLOWED !!
// Each one of these three throws a syntax error
// gameObject.release date = '2019';
// gameObject.3 = 3;
// gameObject.release-date = '2019';

// Allowed
// To make them valid use the bracket notation
gameObject['new-release-date'] = 2019;
gameObject['3'] = 3;
gameObject['this is the new release date'] = 2019;

console.log(gameObject);

/// Reading or accessing value pertaining to a key

console.log(gameObject.name);
console.log(gameObject['release-date']); // release-date property is not defined on the gameObject, hence undefined
console.log(gameObject['new-release-date']);

// Existence

// in operator
console.log('release-date' in gameObject);
console.log('new-release-date' in gameObject);
console.log('watchers' in gameObject);
console.log('watchers' in movieObject);
console.log(movieObject['watchers']);
console.log(movieObject.watchers);

// hasOwnProperty
console.log(gameObject.hasOwnProperty('release-date'));
console.log(gameObject.hasOwnProperty('new-release-date'));
console.log(gameObject.hasOwnProperty('isPrototypeOf'));

// Updation
// Just like addition of properties only
gameObject['new-release-date'] = null;
console.log(gameObject);

// Deletion
delete gameObject['new-release-date'];
console.log(gameObject);

// Iteration

console.log('ITERATION STARTS.......');
// for-in loops
for (const property in gameObject) {
  if (gameObject.hasOwnProperty(property)) {
    const value = gameObject[property];
    console.log(property, value);
  }
}

// Object.keys()
const movieObjectProperties = Object.keys(movieObject);
for (const property of movieObjectProperties) {
  const value = movieObject[property];
  console.log(property, value);
}

// Object.values()
const movieObjectValues = Object.values(movieObject);
for (const value of movieObjectValues) {
  console.log(value);
}

// Object.entries()
for (const [key, value] of Object.entries(movieObject)) {
  console.log(key, value);
}

// Reflect.ownKeys()
// console.log(Reflect.ownKeys(gameObject));

console.log('ITERATION ENDS.....');


// Below this will be covered in subsequent videos.


// Comparison
// Copying
