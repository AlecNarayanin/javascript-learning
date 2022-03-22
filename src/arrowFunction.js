//TODO: Réecrire les méthodes suivantes sous la forme de fonctions fléchées (effectuer également des simplifications d'écritures quand cela est possible)
//*Possibilité de ne pas mettre de parenthèse si un seul argument avec une seule instruction de retour

// function getFieldType(param1) {
//   const parameterType = typeof param1;
//   return parameterType;
// }
const getFieldType = (param) => typeof param;

/////////////////////////////////////////////////////////////

// function sum(firstValue, secondValue) {
//   return firstValue + secondValue;
// }
const sum = (firstValue, secondValue) => firstValue + secondValue;

/////////////////////////////////////////////////////////////

// function isPositiveNumber(number) {
//   return number >= 0;
// }
const isPositiveNumber = (number) => number >= 0;

/////////////////////////////////////////////////////////////

// function randomNumber() {
//   return Math.random;
// }
const randomNumber = () => Math.random;

/////////////////////////////////////////////////////////////

// document.addEventListener('DOMContentLoaded', function () {
//   console.log('DOMContentLoaded');
// });
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded');
});
