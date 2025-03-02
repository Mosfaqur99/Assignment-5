let ColorChangeBtn = document.getElementById("btn-color");

ColorChangeBtn.addEventListener("click", () => {
  document.body.style.background = randomColor();
});

function randomColor() {
  let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  return randomColor;
}
