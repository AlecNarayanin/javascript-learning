class Person {
  constructor(name) {
    this.name = name;
  }

  printNameFunction() {
    setTimeout(function () {
      console.log(`Person's name is from function is ${this.name}`);
    }, 100);
  }

  printNameArrow() {
    setTimeout(
      () => console.log(`Person's name is from arrow is ${this.name}`),
      100
    );
  }
}

const person = new Person("Bob");
person.printNameArrow();
person.printNameFunction();
