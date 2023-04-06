
// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

let counterValue = 0;

let value = document.querySelector('#value');
let decrementBtn = document.querySelector('button[data-action="decrement"]');
let incrementBtn = document.querySelector('button[data-action="increment"]');

// console.log(counterValue, value, decrementBtn, incrementBtn);


decrementBtn.addEventListener("click", () => {
    // console.log('Click on decrement Btn');
    counterValue --;
    value.textContent = counterValue;
});


incrementBtn.addEventListener("click", () => {
    // console.log('Click on increment Btn');
    counterValue ++;
    value.textContent = counterValue;
});


