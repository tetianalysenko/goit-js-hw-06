// Напиши скрипт створення і очищення колекції елементів. 
// Користувач вводить кількість елементів в input і натискає кнопку 
// Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.


// Створи функцію createBoxes(amount), яка приймає один параметр - число. 
// Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. 
// Використовуй готову функцію getRandomHexColor для отримання кольору.




// звязуємось з HTML
const controls = document.querySelector(`#controls`);
const createBtn = controls.querySelector(`[data-create]`);
const destroyBtn = controls.querySelector(`[data-destroy]`);
const boxesContainer = document.querySelector(`#boxes`);


//додаємо сллухача подій на кнопки 
createBtn.addEventListener(`click`, createBoxes);
destroyBtn.addEventListener(`click`, destroyBoxes);


//  кількості боксів


// функціz, яка додає елементи по кліку на клавішу
function createBoxes(amount) {

  const amount = Number(controls.querySelector(`input`).value);
  console.log(amount);

  const boxes = [];
  for (let i = 0; i < amount; i++) {
    const box = document.createElement(`div`);

    box.style = `width:${30 + i * 10}px; height:${30 + i * 10}px; background-color:${getRandomHexColor()}`;

    boxes.push(box);
  }
  boxesContainer.append(...boxes);
}


//  функція кольору
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};


// функція очищення 
function destroyBoxes() {
  boxesContainer.innerHTML = ``;
};



