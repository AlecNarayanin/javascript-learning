//TODO : Transformer la méthode randomCallback en utilisant les promesses à la place des méthodes de callback

// function randomCallback(successCallback, errorCallback) {
//   const randomNumber = Math.floor(Math.random() * 2);

//   if (randomNumber % 2 === 0) {
//     successCallback();
//   } else {
//     errorCallback();
//   }
// }

// randomCallback(
//   () => console.log("Success"),
//   () => console.log("Failed")
// );

function randomPromise() {
  return new Promise((resolve, reject) => {
    const randomNumber = Math.floor(Math.random() * 2);
    if (randomNumber % 2 === 0) {
      resolve("Success");
    } else {
      reject("Failed");
    }
  });
}

randomPromise()
  .then((result) => console.log(result))
  .catch((err) => console.log(err));

/////////////////////////////////////////////////////////////////////////////

//TODO : Résoudre l'ensemble des promesses et afficher les résultats
const recordJSLesson1 = new Promise((resolve) => resolve("Lesson 1 recorded"));
const recordJSLesson2 = new Promise((resolve) => resolve("Lesson 2 recorded"));
const recordJSLesson3 = new Promise((resolve) => resolve("Lesson 3 recorded"));

Promise.all([recordJSLesson1, recordJSLesson2, recordJSLesson3]).then(
  (result) => console.table(result)
);

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

//Expected : raceJSLesson2
Promise.race([raceJSLesson1, raceJSLesson2, raceJSLesson3]).then((result) =>
  console.log(result)
);

//TODO: Résoudre l'ensemble des promesses et afficher le status de chacune
//*NB : Fait dans l'ordre avec l'ensemble des promesses résolues
const first = Promise.resolve(true);
const second = new Promise((resolve, reject) =>
  setTimeout(reject, 2000, "foo")
);
const third = new Promise((resolve) => setTimeout(resolve, 100, "bar"));

Promise.allSettled([first, second, third]).then((result) =>
  console.table(result)
);
