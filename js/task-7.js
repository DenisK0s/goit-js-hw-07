// Напиши скрипт, который реагирует на изменение значения input#font - size -
// control(событие input) и изменяет инлайн - стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться размер текста.

/* <input id="font-size-control" type="range" />
<br />
<span id="text">Абракадабра!</span> */

const inputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

inputRef.setAttribute('value', '16');
inputRef.setAttribute('min', '0');
inputRef.setAttribute('max', '50');
inputRef.setAttribute('step', '1');

inputRef.addEventListener('input', fontSizeHandler);


function fontSizeHandler(e) {
  textRef.style.fontSize = `${e.target.value}px`;
};