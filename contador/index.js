let count = 0;

const value = document.getElementById("value");
const btnDecrease = document.getElementById("btn-decrease");
const btnReset = document.getElementById("btn-reset");
const btnIncrease = document.getElementById("btn-increase");

btnDecrease.addEventListener("click", () => {
  count--;
  if (count < 0){
    value.style.color = "red"
  } else if (count === 0) {
    value.style.color = "white"
  }
  updateCounter();
});

btnReset.addEventListener("click", () => {
  count = 0;
  if (count === 0) {
    value.style.color = "white"
  }
  
  updateCounter();
});

btnIncrease.addEventListener("click", () => {
  count++;
  if (count > 0){
    value.style.color = "green"
  } else if (count === 0) {
    value.style.color = "white"
  }
  
  updateCounter();
});

function updateCounter() {
  value.textContent = count;
}

