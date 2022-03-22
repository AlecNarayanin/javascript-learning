const panier = [
  {
    name: "Ordinateur",
    price: 1000,
  },
  {
    name: "Chaise",
    price: 300,
  },
  {
    name: "Tapis",
    price: 60,
  },
  {
    name: "Souris",
    price: 100,
  },
  {
    name: "Ecran",
    price: 300,
  },
  {
    name: "Clavier",
    price: 350,
  },
];

//TODO : Récupérer l'ensemble des price dans un nouveau tableau

const prices = panier.map((item) => item.price);
console.table(prices);

//TODO: Récupérer l'ensemble des articles inférieur ou égal à 500$

const lessThanOrEqual500 = panier.filter((item) => item.price <= 500);
console.table(lessThanOrEqual500);

//TODO: Récupérer le premier article à 300$

const firstArticle300 = panier.find((item) => item.price === 300);
console.log(`Le premier article à 300$ est ${firstArticle300}`);

//TODO: Afficher l'ensemble des noms d'article dans la console

console.log("///////////////////////////////////////////////////////////////");
console.log("Liste d'articles présent dans le panier");
panier.forEach((item) => console.log(item.name));
console.log("///////////////////////////////////////////////////////////////");

//TODO: Affirmer s'il existe des articles avec un price supérieur à 600$

const atLeastOneArticleGreaterThan600 = panier.some((item) => item.price > 600);
console.log(
  atLeastOneArticleGreaterThan600
    ? "Au moins un article détient un prix supérieur à 600"
    : "Aucun article détient un prix supérieur à 600"
);

//TODO: Affirmer si tous les articles sont supérieur à 100$

const everyArticlesGreaterThan100 = panier.every((item) => item.price > 100);
console.log(
  everyArticlesGreaterThan100
    ? "Tous les articles détiennent un prix supérieur à 100"
    : "Aucun article de tous les articles présent dans le panier ne détient un prix supérieur à 100"
);

//TODO: Calculer le price total du panier

const total = panier.reduce((sum, item) => sum + item.price, 0);
console.log(`Le total du panier est de ${total}`);

const simpleArray = [1, 3, 7, 8, 9, 10, 11, 12, 13, 14, 15];

//TODO: Vérifier si le tableau simple inclut la valeur 10

const includes10 = simpleArray.includes(10);
console.log(
  includes10
    ? "10 est inclus dans le tableau"
    : "10 n'est pas inclus dans le tableau"
);
