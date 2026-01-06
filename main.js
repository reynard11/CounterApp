const button = document.querySelector(".btn");
const button1 = document.querySelector(".btn1");
const button2 = document.querySelector(".btn2");
const counterhigh = document.getElementById("counterNum");

let count = localStorage.getItem("counterValue")
  ? parseInt(localStorage.getItem("counterValue"))
  : 0;
counterhigh.textContent = count;

if (isNaN(count)) {
  count = 0;
}
if (button) {
  button.addEventListener("click", () => {
    count += 1;
    counterhigh.textContent = count;
    localStorage.setItem("counterValue", count);
  });
}
if (button1) {
  button1.addEventListener("click", () => {
    count -= 1;
    counterhigh.textContent = count;
    localStorage.setItem("counterValue", count);
  });
}
if (button2) {
  button2.addEventListener("click", () => {
    count = 0;
    counterhigh.textContent = count;
    localStorage.setItem("counterValue", count);
  });
}
