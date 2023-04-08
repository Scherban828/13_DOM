//"use strict";
//Навигация по DOM
//Получаем объект body
const bodyElement = document.body;
//Получаем соседние и родительские узлы 
const previousSiblingNode = bodyElement.previousSibling;
const nextSiblingNode = bodyElement.nextSibling;
const parentNode = bodyElement.parentNode;
console.log(bodyElement);
console.log(previousSiblingNode);
console.log(nextSiblingNode);
console.log(parentNode);
//Получаем дочерние узлы
//Но тут будет все, и узлы комментарии, и текстовые блоки
const childNodes = bodyElement.childNodes;
console.log(childNodes);
//Получение в консоль только элементы
const bodyChildren = bodyElement.children;
console.log(bodyChildren);
//Получение дочерних только элементов
const fEChild = bodyElement.firstElementChild;
console.log(fEChild);
const lEChild = bodyElement.lastElementChild;
console.log(lEChild);
//Получение элемента перед body
const prevElement = bodyElement.previousElementSibling;
console.log(prevElement);
//Получение элемента родилеля body
const parentElement = bodyElement.parentElement;
console.log(parentElement);
//Поиск по DOM 
//querySelectorAll
//Поиск элементов по классу 
const elemOne = document.querySelectorAll('.ol');
console.log(elemOne);
//Поиск элементов по тегу
const elemTwo = document.querySelectorAll('li');
console.log(elemTwo);
//Поиск элементов по тегу с классом
const elemThree = document.querySelectorAll('li.ol__li');
console.log(elemThree);
//Поиск по ID 
const elemFour = document.querySelectorAll('#P5');
console.log(elemFour);
//ВЫвод конкретного объекта 
console.log(elemThree[2]);
//querySelector
//Выводит не всю коллекцию, а только первый поаввшийся элемент 
const elemFive = document.querySelector('li');
console.log(elemFive);
//Другие методы поиска
//В отличии от querySelectorAll, эми методы выводят живые коллеции,актуальные ,даже после внесения изменений
const elemSix = document.getElementsByTagName('li');
console.log(elemSix);
const elemSeven = document.getElementsByClassName('ol__li');
console.log(elemSeven);
//closest 
const elemEight = document.querySelector('.ol__lis');
console.log(elemEight);
const parOne = elemEight.closest('.ol__list');
console.log(parOne);
//Matches ???
const elemAll = document.querySelectorAll('.ol__list');
console.log(elemAll);
for (let elemLis of elemAll) {
    if (elemLis.matches('[class="ol__lis-red"]')) {
        console.log('Красный');
    }
    else {
        console.log('Синий');
    }
};
//Изменение HTML через JS
//innerHTML
const exText = document.querySelector('.lesson__text');
console.log(exText);
const exElemText = exText.innerHTML;
console.log(exElemText);
exText.innerHTML = `Внес изменения в HTML через JS`;
exText.innerHTML = `<p>${exElemText}</p> <p>,кажется внес изменения в HTML</p>`;
console.log(exText.innerHTML);
//outerHTML
const ex1ElemText = exText.outerHTML;
console.log(ex1ElemText);
//TextContent
const ex2Text = document.querySelector('.text__content');
const ex2TextContent = ex2Text.textContent;
console.log(ex2TextContent);
//TextContent добавляет только текст, даже если в строке содержится код
ex2Text.textContent = `<p>Текст с тегами</p>`;
console.log(ex2Text.textContent);
//Создание элементов 
const newElement = document.createElement('div');
newElement.innerHTML = `Вот это да, добавил элемент с помощью JS`;
console.log(newElement);
//Создание нового текстового узла
const newText = document.createTextNode('Привет!');
console.log(newText);
//Методы вставки элементов 
const textElement = document.querySelector('.lesson__text');
//Берем ранее созданный newElement 
textElement.before(newElement);
console.log(textElement);
console.log(bodyElement);
//Аналогично вставка после(after), внцтрь вначало (prepand), внутрь в конец (append)
//Вставка текста и HTML
textElement.insertAdjacentHTML('afterend',
    `<p>Вставка элемента с помощью insertAdjacentHTML</p>`);
console.log(bodyElement);
//beforebegin-вставляет перед textElement
//afterbegin-вставляет внутрь в начало
//beforeend-вставляет внутрь в конец
//afterend-вставляет после textElement
//ПЕРЕНОС объекта
const elem1 = document.querySelector('.text__content');
const elem2 = document.querySelector('.lesson__text');
elem2.append(elem1);
console.log(bodyElement);
//КЛОНИРОВАНИЕ объекта 
const elem3 = document.querySelector('.text1');
console.log(elem3);
const cloneText1 = elem3.cloneNode(true);
console.log(cloneText1);
elem2.append(cloneText1);
const newBodyElem = document.body;
console.log(newBodyElem);
//УДАЛЕНИЕ объектов 
cloneText1.remove();
//СТИЛИ и КЛАССЫ 
//Изменение имени класса объекта 
const elem4 = document.querySelector('.ol__list');
const classElem4 = elem4.className;
console.log(classElem4);
elem4.className = 'ol__new__name__lis';
console.log(elem4);
//ClassList
//add - добавляет новый класс
elem4.classList.add('active');
console.log(elem4);
elem4.classList.add('perebor')
//remove - удаляет класс, toggele - добавляет класс, если его нет, если такой уже есть, то удаляет 
elem4.classList.toggle('active');
console.log(elem4);
//contains - проверяет есть ли такой класс у элемента 
elem4.classList.contains('lis');
console.log(elem4.classList.contains('lis'));
//Перебор классов 
for (let classNames of elem4.classList) {
    console.log(classNames);
};
//Изменение стилей
elem4.style.color = 'red';
elem4.style.fontSize = '40px';
//Работа с Атрибутами 
//устанавливает атрибут
elem4.setAttribute('name', 'Elem4');
//Проверяет наличие атрибута
console.log(elem4.hasAttribute('name'));
//Выводит значение атрибута
console.log(elem4.getAttribute('name'));
//Remove - удаляет атрибут
