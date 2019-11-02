function User(name, gender, isProgrammer = false) {
  this.name = name;
  this.gender = gender;
  this.isProgrammer = isProgrammer;
}

// create a new instance of the user
const userOne = new User('Prateek', 'Male', true);
console.log(userOne);

console.log(User.prototype);

User.prototype.printName = function() {
  return `${this.name} is ${this.gender} and is a ${
    this.isProgrammer ? 'programmer' : 'not a programmer'
  }`;
};
console.log(User.prototype);
console.log(userOne.printName());
