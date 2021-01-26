// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
// после чего вставит все li за одну операцию в список ul.ingredients.
// Для создания DOM - узлов используй document.createElement().

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsRef = document.querySelector('.js-ingredients');

const createItem = item => {
  const ingredientRef = document.createElement('li');
  ingredientRef.textContent = item;
  return ingredientRef;
};

const ingredientsListRef = ingredients.map(ingredient => createItem(ingredient));

ingredientsRef.append(...ingredientsListRef);




