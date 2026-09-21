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

// 2. INHERITANCE & POLYMORPHISM
class Student extends Person {
  constructor(name, section) {
    super(name);
    this.section = section;
  }

  introduce() {
    return `Hi, I am ${this.name} from ${this.section}.`;
  }
}

class Instructor extends Person {
  constructor(name, subject) {
    super(name);
    this.subject = subject;
  }

  introduce() {
    return `Hello, I am Prof. ${this.name}, teaching ${this.subject}.`;
  }
}

// 3. GLOBAL VARIABLES & DATA STRUCTURES
const school = "NWSSU";
let yearLevel = 3;
const isEnrolled = true;

const skills = ["Java", "HTML", "CSS"];
const hobbies = ["Gaming", "Basketball"];
const subjects = ["Programming", "OOP"];

const address = { city: "Calbayog", region: "Eastern Visayas" };
const contact = { email: "arvinclarkmediante@email.com" };
