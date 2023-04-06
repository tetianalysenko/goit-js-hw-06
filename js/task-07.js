// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) 
// і змінює інлайн-стиль span#text, оновлюючи властивість font-size. 
// В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.


const input = document.querySelector('#font-size-control');
console.log(input);

const text = document.querySelector('#text');
console.log(text);


input.addEventListener('input', changeTextSize);


function changeTextSize() {
    const sizeValue = input.value;
    console.log(sizeValue);
 
    text.style.fontSize = `${sizeValue}` + 'px';
   
};


