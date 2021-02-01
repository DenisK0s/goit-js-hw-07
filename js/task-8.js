// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция.
// При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.
// Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

/* <div id="controls">
  <input type="number" min="0" max="100" step="1" />
  <button type="button" data-action="render">Создать</button>
  <button type="button" data-action="destroy">Очистить</button>
</div>

<div id="boxes"></div> */

const controlsRef = document.querySelector("#controls");
const boxesRef = document.querySelector("#boxes");
const inputRef = controlsRef.querySelector("input");
const btnRenderRef = controlsRef.querySelector("button[data-action='render']");
const btnDestroyRef = controlsRef.querySelector("button[data-action='destroy']");

function createBoxes(amount) {
  const elements = [];

  let width = 30;
  let height = 30;

  for (let i = 0; i < amount; i += 1) {
    if (i === 0) {
      const divRef = document.createElement("div");
      const cssText = `width: ${width}px; height: ${height}px; background-color: ${getRandColor()}; border: 1px solid black`;
      divRef.style.cssText = cssText;
      elements[i] = divRef;
      continue;
    }
    const divRef = document.createElement("div");
    const cssText = `width: ${width += 10}px; height: ${height += 10}px; background-color: ${getRandColor()}; border: 1px solid black`;
    divRef.style.cssText = cssText;
    elements[i] = divRef;
  }

  return elements; 
};

inputRef.addEventListener("input", inputHandler);

let amount;

function inputHandler(event) { 
  amount = Number(event.target.value);

  btnRenderRef.addEventListener("click", renderBtnHandler); 
  btnDestroyRef.addEventListener("click", destroyBtnHandler);  
};

function getRandColor(){
    let color = Math.floor(Math.random() * Math.pow(256, 3)).toString(16);
    while(color.length < 6) {
        color = "0" + color;
    }
    return "#" + color;
}

function renderBtnHandler() {
  const boxes = (createBoxes(amount));
   console.log(boxes);
  boxesRef.append(...boxes);
}

function destroyBtnHandler() {
  const currentBoxes = boxesRef.children;
  const currentBoxesArrey = [...currentBoxes];
  currentBoxesArrey.forEach(element => {
    boxesRef.removeChild(element);
  });
}