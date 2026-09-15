const box = document.querySelector("#box");
const button = document.querySelector("#shake");
const message = document.querySelector("#message");
const backgroundImage = document.getElementById("initial-image");
const newImage = "openbox.png";

const messages = [
"you are someone's favourite person to sit next to.",
  "the thing you are building counts, even half finished.",
  "you are allowed to be a beginner for as long as you need.",
  "someone is going to love what you make with this.",
  "hot chocolate tastes better after a hard day. you've earned one.",
  "you ask good questions. that is the whole skill.",
]

button.addEventListener("click", () => {

  if (backgroundImage.src == "openbox.png") {
        backgroundImage.src = "closedbox.png";

    } else {
        backgroundImage.src = newImage;
    }

    box.classList.add("shaking");
    setTimeout(() => box.classList.remove("shaking"), 600);

    const pick = Math.floor(Math.random() * messages.length);
    message.textContent = messages[pick];
});