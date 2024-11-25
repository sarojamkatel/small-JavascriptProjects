class person {
  // constructor to initialize object properties
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // method to introduce the person
  introduce() {
    console.log(`Hi,My name is ${this.name} and I'm ${this.age} years old .`);
  }
}

const person1 = new person("saroj", 21);
const person2 = new person("ragnar", 19);

person2.introduce();
