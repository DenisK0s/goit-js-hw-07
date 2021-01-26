// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const counterRef = document.querySelector('#counter');
const btnIncrementRef = counterRef.querySelector('button[data-action="increment"]');
const btnDecrementRef = counterRef.querySelector('button[data-action="decrement"]');
const currentCounterRef = counterRef.querySelector('#value');

let counterValue = 0;

btnIncrementRef.addEventListener('click', incrementValue);
btnDecrementRef.addEventListener('click', DecrementValue);

function incrementValue() {
  counterValue += 1;
  currentCounterRef.textContent = counterValue;
};

function DecrementValue() {
  counterValue -= 1;
  currentCounterRef.textContent = counterValue;
};
