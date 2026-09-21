// 1. ABSTRACTION & ENCAPSULATION
class Person {
  #password = "1234"; 

  constructor(name) {
    if (this.constructor === Person) {
      throw new Error("Cannot instantiate abstract class Person.");
    }
    this.name = name;
  }

  checkPassword(input) {
    return input === this.#password;
  }

  introduce() {
    return `Hi, I am ${this.name}.`;
  }
}

class Student extends Person {
  constructor(name, section) {
    super(name);
    this.section = section;
  }

  introduce() {
    return `Hi, I am ${this.name} from ${this.section}.`;
  }
}