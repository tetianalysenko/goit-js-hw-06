
// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), 
// підставляє його поточне значення в span#name-output. 
// Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".


const input = document.querySelector('#name-input');
// console.log(input);

const output = document.querySelector('#name-output');
// console.log(output);

const defaultText = output.textContent;
// console.log(defaultText);


input.addEventListener('input', textChange);


function textChange() {
    if ( input.value === "") {
     output.textContent = defaultText;
    
    } else 
    output.textContent = input.value;
};



// input.addEventListener('input', () => {if ( input.value === "") {
//     output.textContent = defaultText;
   
//    } else 
//    output.textContent = input.value;})



    