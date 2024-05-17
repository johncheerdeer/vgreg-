const foodElement = document.getElementById('food');
const feedButton = document.getElementById('feed-btn');
let foodAmount = 0;
let intervalId;

function updateFoodAmount() {
  foodElement.textContent = foodAmount;
}

feedButton.addEventListener('click', () => {
  foodAmount += 1;
  updateFoodAmount();
});

function decreaseFoodAmount() {
  foodAmount = Math.max(foodAmount - 5, 0);
  updateFoodAmount();
}

intervalId = setInterval(decreaseFoodAmount, 20000);

updateFoodAmount();