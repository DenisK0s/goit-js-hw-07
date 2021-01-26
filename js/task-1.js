// Напиши скрипт, который выполнит следующие операции.
// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.
// Для каждого элемента li.item в списке ul#categories,
// найдет и выведет в консоль текст заголовка элемента(тега h2) и количество элементов в категории(всех вложенных в него элементов li).
// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4

const categoriesRef = document.querySelector('#categories');
const categoriesListRef = categoriesRef.querySelectorAll('.item');

const categoriesQuantity = categoriesListRef.length;
console.log(`В списке ${categoriesQuantity} категории`); 

categoriesListRef.forEach(item => {
  const categorieNameRef = item.querySelector('h2');
  console.log('Категория :' , categorieNameRef.textContent);
  const categoriesItemsListRef = item.querySelector('ul');
  const categoriesItemsRef = categoriesItemsListRef.children;
  console.log('Количество элементов :' ,categoriesItemsRef.length);
});





