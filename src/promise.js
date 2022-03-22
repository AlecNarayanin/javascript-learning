//TODO : Transformer la méthode randomCallback en utilisant les promesses à la place des méthodes de callback

function randomCallback(successCallback, errorCallback) {
  const randomNumber = Math.floor(Math.random() * 2);

  if (randomNumber % 2 === 0) {
    successCallback();
  } else {
    errorCallback();
  }
}

randomCallback(
  () => console.log("Success"),
  () => console.log("Failed")
);

/////////////////////////////////////////////////////////////////////////////

//TODO : Résoudre l'ensemble des promesses et afficher les résultats
const recordJSLesson1 = new Promise((resolve) => resolve("Lesson 1 recorded"));
const recordJSLesson2 = new Promise((resolve) => resolve("Lesson 2 recorded"));
const recordJSLesson3 = new Promise((resolve) => resolve("Lesson 3 recorded"));

//TODO: Résoudre l'ensemble des promesses en affichant la plus rapide
const raceJSLesson1 = new Promise((resolve) =>
  setTimeout(resolve, 500, "Race 1 finished")
);
const raceJSLesson2 = new Promise((resolve) =>
  setTimeout(resolve, 70, "Race 2 finished")
);
const raceJSLesson3 = new Promise((resolve) =>
  setTimeout(resolve, 200, "Race 3 finished")
);

//TODO: Résoudre l'ensemble des promesses et afficher le status de chacune
const first = Promise.resolve(true);
const second = new Promise((resolve) => setTimeout(resolve, 70, "foo"));
