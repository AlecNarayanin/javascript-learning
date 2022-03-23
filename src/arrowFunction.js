//TODO: Réecrire les méthodes suivantes sous la forme de fonctions fléchées (effectuer également des simplifications d'écritures quand cela est possible)

function getFieldType(param1) {
  const parameterType = typeof param1;
  return parameterType;
}

function sum(firstValue, secondValue) {
  return firstValue + secondValue;
}

function isPositiveNumber(number) {
  return number >= 0;
}

function randomNumber(number) {
  return Math.random(number);
}

document.addEventListener("DOMContentLoaded", function () {
  console.log("DOMContentLoaded");
});
