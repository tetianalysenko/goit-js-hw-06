const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


//достукуємось до ul
const ingredientsList = document.querySelector("#ingredients");

// створюэмо li, textContent, class "item"
 const ingredientList = ingredients.map((ingredient) => {
    const newIngredient = document.createElement("li");
    newIngredient.textContent = ingredient;
    newIngredient.classList.add("item");
    return newIngredient;
  });
  // додаємо всі елементи в ul
    ingredientsList.append(...ingredientList);

