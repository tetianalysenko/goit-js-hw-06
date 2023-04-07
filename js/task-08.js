// Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості. Для доступу до елементів форми використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.


const loginForm = document.querySelector(".login-form");
// console.log(loginForm);


loginForm.addEventListener("submit", checkForm);


function checkForm (event) {

    event.preventDefault();

    const formElements = event.currentTarget.elements;
    // console.log(formElements)

    const emailEl = formElements.email.value;
    // console.log(emailEl);

    const passwordEl = formElements.password.value;
    // console.log(passwordEl);

    
    if (emailEl === '' || passwordEl === '') {
        return alert('всі поля повинні бути заповнені');
      }

      const formData = {
        emailEl,
        passwordEl
    };

    // console.log(formData);

    loginForm.reset();
};
      
      
      
      
    
