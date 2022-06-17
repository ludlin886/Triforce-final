function getFilename(fullPath) {
  return fullPath.substring(fullPath.lastIndexOf("/") + 1);
}

var splitTest = function (str) {
  return str
    .split("\\")
    .pop()
    .split("/")
    .pop()
    .replace(".png", "")
    .replace("-", "");
};

var player1 = 0;

var hidden;
deck = [];

let shuffleDeck;

const suits = ["S", "H", "C", "D"];
const ranks = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
function buildDeck() {
  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < ranks.length; j++) {
      let card = {};
      let tempValue = isNaN(ranks[j]) ? 10 : ranks[j];
      tempValue = ranks[j] == "A" ? 11 : tempValue;

      card.suit = suits[i];
      card.ranks = ranks[j];
      card.value = tempValue;

      deck.push(card);
    }
    console.log(shuffle(deck).shift());
  }
}

let firstCard;
let secondCard;
let thirdCard;
let fourthCard;

buildDeck();
function showFirstSpot() {
  const firstSpot = document.getElementById("first-spot");
  console.log(firstSpot);
  var showCard = `./cards/${shuffleDeck[0].ranks}-${shuffleDeck[0].suit}.png`;
  firstSpot.setAttribute("src", showCard);
  firstCard = splitTest(showCard);
  console.log(firstCard);
}

function showSecondSpot() {
  const secondSpot = document.getElementById("second-spot");
  console.log(secondSpot);
  var showCard = `./cards/${shuffleDeck[1].ranks}-${shuffleDeck[1].suit}.png`;
  secondSpot.setAttribute("src", showCard);
  secondCard = splitTest(showCard);
  console.log(secondCard);
}
function showThirdCard() {
  const thirdSpot = document.getElementById("third-spot");
  console.log(thirdSpot);
  var showCard = `./cards/${shuffleDeck[2].ranks}-${shuffleDeck[2].suit}.png`;
  thirdSpot.setAttribute("src", showCard);
  thirdCard = splitTest(showCard);
  console.log(thirdCard);
}
function showFourthCard() {
  const fourthSpot = document.getElementById("fourth-spot");
  console.log(fourthSpot);
  var showCard = `./cards/${shuffleDeck[3].ranks}-${shuffleDeck[3].suit}.png`;
  fourthSpot.setAttribute("src", showCard);
  fourthCard = splitTest(showCard);
  console.log(fourthCard);
}

function shuffle(cards) {
  cards.sort(function () {
    return 0.5 - Math.random();
  });
  shuffleDeck = cards;
  return cards;
}

const blackBtn = document.querySelector("#black-button");
blackBtn.addEventListener("click", function () {
  var box = document.getElementById("back");
  console.log("black-button");

  document.getElementById("first-spot").style.display = "block";

  if (shuffleDeck[0].suit === "S" || shuffleDeck[0].suit === "C") {
    player1 = player1 + 0;
  } else {
    player1 = player1 + 1;
  }
  console.log(player1);
  document.getElementById("score").textContent = player1;

  showFirstSpot();

  blackBtn.remove();
  redBtn.remove();
});

const redBtn = document.querySelector("#red-button");
redBtn.addEventListener("click", function () {
  var box = document.getElementById("red");
  console.log("red-button");
  document.getElementById("first-spot").style.display = "block";

  console.log(firstCard);

  if (shuffleDeck[0].suit === "D" || shuffleDeck[0].suit === "H") {
    player1 = player1 + 0;
  } else {
    player1 = player1 + 1;
  }

  console.log(player1);
  document.getElementById("score").textContent = player1;
  showFirstSpot();

  redBtn.remove();
  blackBtn.remove();
});

const oddBtn = document.querySelector("#odd-button");
oddBtn.addEventListener("click", function () {
  var box = document.getElementById("odd");
  console.log("odd-button");

  document.getElementById("second-spot").style.display = "block";

  if (shuffleDeck[1].value % 2 == 1) {
    player1 = player1 + 0;
  } else {
    player1 = player1 + 1;
  }
  console.log(player1);
  document.getElementById("score").textContent = player1;
  showSecondSpot();

  oddBtn.remove();
  evenBtn.remove();
});

const evenBtn = document.querySelector("#even-button");
evenBtn.addEventListener("click", function () {
  var box = document.getElementById("even");
  console.log("even-button");

  document.getElementById("second-spot").style.display = "block";

  if (shuffleDeck[1].value % 2 == 0) {
    player1 = player1 + 0;
  } else {
    player1 = player1 + 1;
  }
  console.log(player1);
  document.getElementById("score").textContent = player1;
  showSecondSpot();

  oddBtn.remove();
  evenBtn.remove();
});

const bigBtn = document.querySelector("#big-button");
bigBtn.addEventListener("click", function () {
  var box = document.getElementById("big");
  console.log("big-button");

  document.getElementById("third-spot").style.display = "block";

  if (
    shuffleDeck[2].ranks === 7 ||
    shuffleDeck[2].ranks === 8 ||
    shuffleDeck[2].ranks === 9 ||
    shuffleDeck[2].ranks === 10 ||
    shuffleDeck[2].ranks === "J" ||
    shuffleDeck[2].ranks === "Q" ||
    shuffleDeck[2].ranks === "K"
  ) {
    player1 = player1 + 0;
  } else {
    player1 = player1 + 1;
  }
  console.log(player1);
  document.getElementById("score").textContent = player1;
  showThirdCard();

  bigBtn.remove();
  smallBtn.remove();
});

const smallBtn = document.querySelector("#small-button");
smallBtn.addEventListener("click", function () {
  var box = document.getElementById("small");
  console.log("small-button");

  document.getElementById("third-spot").style.display = "block";

  if (
    shuffleDeck[2].ranks === "A" ||
    shuffleDeck[2].ranks === 2 ||
    shuffleDeck[2].ranks === 3 ||
    shuffleDeck[2].ranks === 4 ||
    shuffleDeck[2].ranks === 5 ||
    shuffleDeck[2].ranks === 6
  ) {
    player1 = player1 + 0;
  } else {
    player1 = player1 + 1;
  }
  console.log(player1);
  document.getElementById("score").textContent = player1;
  showThirdCard();

  bigBtn.remove();
  smallBtn.remove();
});
const spadeBtn = document.querySelector("#spade-button");
spadeBtn.addEventListener("click", function () {
  var box = document.getElementById("spade");
  console.log("spade");

  document.getElementById("fourth-spot").style.display = "block";

  if (shuffleDeck[3].suit === "S") {
    player1 = player1 + 0;
  } else {
    player1 = player1 + 1;
  }
  console.log(player1);
  document.getElementById("score").textContent = player1;
  showFourthCard();

  spadeBtn.remove();
  heartBtn.remove();
  dimondBtn.remove();
  clubBtn.remove();
});

const heartBtn = document.querySelector("#heart-button");
heartBtn.addEventListener("click", function () {
  var box = document.getElementById("heart");
  console.log("heart");

  document.getElementById("fourth-spot").style.display = "block";

  if (shuffleDeck[3].suit === "H") {
    player1 = player1 + 0;
  } else {
    player1 = player1 - 1;
  }
  console.log(player1);
  document.getElementById("score").textContent = player1;
  showFourthCard();
  spadeBtn.remove();
  heartBtn.remove();
  dimondBtn.remove();
  clubBtn.remove();
});

const dimondBtn = document.querySelector("#dimond-button");
dimondBtn.addEventListener("click", function () {
  var box = document.getElementById("D"); // what is this for
  console.log("D");

  document.getElementById("fourth-spot").style.display = "block";

  if (shuffleDeck[3].suit === "D") {
    player1 = player1 + 0;
  } else {
    player1 = player1 + 1;
  }
  console.log(player1);
  document.getElementById("score").textContent = player1;
  showFourthCard();
  spadeBtn.remove();
  heartBtn.remove();
  dimondBtn.remove();
  clubBtn.remove();
});

const clubBtn = document.querySelector("#club-button");
clubBtn.addEventListener("click", function () {
  var box = document.getElementById("club");
  console.log("club");

  document.getElementById("fourth-spot").style.display = "block";

  if (shuffleDeck[3].suit === "C") {
    player1 = player1 + 0;
  } else {
    player1 = player1 + 1;
  }
  console.log(player1);
  document.getElementById("score").textContent = player1;
  showFourthCard();
  spadeBtn.remove();
  heartBtn.remove();
  dimondBtn.remove();
  clubBtn.remove();
});
