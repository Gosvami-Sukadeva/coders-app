const express = require("express");

const app = express();

app.listen(3000, () => {
  console.log(
    "Server is listening at http://localhost:3000/ Let's play a game!"
  );
});

let goodAnswers = 0;
let callToAFriendUsed = false;
let questionToTheCrowdUsed = false;
let halfOnHalfUsed = false;

const questions = [
  {
    question: "Jaki jest najlepszy język programowania wg mnie?",
    answers: ["C++", "Fortran", "JavaScript", "Java"],
    correctAnswer: 2,
  },
  {
    question: "Czy ten kurs jest fajny?",
    answers: ["Nie wiem", "Oczywiście, że tak", "Nie", "Jest najlepszy"],
    correctAnswer: 3,
  },
  {
    question: "Czy chcesz zjeść pizzę?",
    answers: [
      "Nawet dwie!",
      "Jestem na diecie",
      "Nie, dziękuję",
      "Wolę brokuły",
    ],
    correctAnswer: 0,
  },
];
