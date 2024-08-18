const checkBtn = document.querySelector(".check");
const againBtn = document.querySelector(".again");
const inputField = document.querySelector(".guess");
const message = document.querySelector(".message");
const scoreEl = document.querySelector(".score");
const number = document.querySelector(".number");

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

checkBtn.addEventListener("click", () => {
  const guess = +inputField.value;

  if (!guess) {
    message.textContent = "⛔ No number";
  } else if (guess === secretNumber) {
    message.textContent = "🍕 Correct Number!";
    number.textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "green";
    number.style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      message.textContent = "📈 Too high!";
      score--;
      scoreEl.textContent = score;
    } else {
      message.textContent = "💥 You lost tge game!";
      scoreEl.textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      message.textContent = "📉 Too low!";
      score--;
      scoreEl.textContent = score;
    } else {
      message.textContent = "💥 You lost tge game!";
      scoreEl.textContent = 0;
    }
  }
});

againBtn.addEventListener("click", () => {
  window.location.reload();
});
