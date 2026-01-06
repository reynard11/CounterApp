const button = document.querySelector(".btn");
const button1 = document.querySelector(".btn1");
const button2 = document.querySelector(".btn2");
const counterhigh = document.getElementById("counterNum");
let count = 0;

button.addEventListener("click", () => {
  count += 1;
  counterhigh.textContent = count;
});

button1.addEventListener("click", () => {
  count -= 1;
  counterhigh.textContent = count;
});

button2.addEventListener("click", () => {
  count = 0;
  counterhigh.textContent = count;
});