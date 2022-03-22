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

//*NB : Ici selon la déclaration de votre méthode utilisée, votre mot-clef "this" sera redéfini ou non
//* Les fonctions fléchées ne redéfinissent pas le this. Dans notre exemple, nous faisons bien reférence au this présent dans la classe
//* Cependant avec la déclaration function, le this ici est redefini sur la portée global du fichier de

const person = new Person('Bob');
person.printNameArrow();
person.printNameFunction();
