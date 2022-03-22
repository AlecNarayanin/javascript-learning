//////////////////////////////////////////////////////////////
//*Scope
if (true) {
  var varVariable = 'Ceci est vrai';
}

console.log(varVariable);

if (true) {
  const letVariable = 'This is true';
  console.log(letVariable);
}

console.log(letVariable);

//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//*Declaration

console.log(anotherVarVariable);
//Expected: Error but ...

var anotherVarVariable = true;

console.log(anotherVarVariable);
//////////////////////////////////////////////////////////////
//*let and const

const constVar = 1;
let letVar = 1;

constVar = 2;
//Expected : Error because const can't be reassigned

letVar = 3;
//////////////////////////////////////////////////////////////
//*Special case const

const myConstVar = { name: 'Bob' };

myConstVar.name = 'Sully';

console.log(myConstVar);
