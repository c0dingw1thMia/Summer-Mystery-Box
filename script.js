const box = document.querySelector("#box");
const button = document.querySelector("#shake");
const message = document.querySelector("#message");
const backgroundImage = document.getElementById("initial-image");
const newImage = "openbox.png";

const messages = [
  "visit your local farmer's market.",
  "swim in something natural.",
  "host a dinner party with an oddly specific theme.",
  "spend a morning exploring your own city like a tourist.",
  "start a summer journal.",
  "make a summer playlist that represents your summer mood.",
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