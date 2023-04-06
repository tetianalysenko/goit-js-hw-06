const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


for (const ingredient of ingredients) {
const ingredientItem = document.createElement("li");
ingredientItem.textContent = ingredient;
ingredientItem.classList.add('item');

const ingredientList = document.querySelector('ul#ingredients');
  ingredientList.append(ingredientItem);
};


