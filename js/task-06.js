// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), 
// перевіряє його вміст щодо правильної кількості введених символів.



const input = document.querySelector('#validation-input');
const length = Number(input.getAttribute(`data-length`));

console.log(input, length, typeof length);

input.addEventListener(`blur`, checkLengthOfInput);

function checkLengthOfInput () {
    if (input.value.length !== length) {
        input.classList.add('invalid');
        }
        
     else {
        input.classList.remove('invalid');
        input.classList.add('valid');
    }
    console.log(input.value.length);
};



