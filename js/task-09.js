
// Напиши скрипт, який змінює кольори фону елемента <body> через інлай
// Для генерування випадкового кольору використовуй функцію getRandomHexColor

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorName = document.querySelector('.color');
const changeColorBtn = document.querySelector('.change-color');


changeColorBtn.addEventListener('click', changeBgColor);

function changeBgColor () {
   const bgColor = getRandomHexColor();
   document.body.style.backgroundColor = bgColor;
   colorName.textContent = bgColor;
}