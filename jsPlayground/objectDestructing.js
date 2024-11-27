// object destructing is a convenient way to extract multiple properties from an object and assign them to variable in a single statement.
// js object
const person={
    firstName:"john",
    lastName:"doe",
    age:30
};

// now instead of doing 
// let firstname=person.firstName; we can do:
// let age=person.age;

let {firstName,age}=person;

console.log(firstName);

