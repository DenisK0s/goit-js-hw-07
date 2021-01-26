// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.
/* <input type="text" id="validation-input" data-length="6" placeholder="Введи 6 символов" /> */

const inputRef = document.querySelector('#validation-input');


inputRef.addEventListener('blur', inputHandler);
inputRef.addEventListener('focus', RepetCheckHandler);

function inputHandler(e) {
  const validLength = Number(inputRef.dataset.length);

  if (e.target.value.length !== validLength) {
    inputRef.classList.add('invalid');
    inputRef.classList.remove('valid');
  } else {
    inputRef.classList.add('valid');
    inputRef.classList.remove('invalid');
  }
};

function RepetCheckHandler(e) {
  inputRef.classList.remove('valid');
  inputRef.classList.remove('invalid');
};



