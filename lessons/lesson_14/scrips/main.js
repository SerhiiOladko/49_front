const headerElement = document.querySelector('.header');
headerElement.innerText = 'Калькулятор';
headerElement.classList.add('red');

// создание элемента Кнопка
const submitButtonElement = document.createElement('button');
submitButtonElement.innerText = 'Результат';
submitButtonElement.classList.add('submit-button');
// добавляем созданный элемент в определенное место
headerElement.after(submitButtonElement);


// создадим функцию с реакцией на клик по кнопке
const submitButtonHanler = () => {
    // сначала найдем и удалим сущуствующий span (если есть)
    const createdSpanElement = document.querySelector('.result');
    if (createdSpanElement) {createdSpanElement.remove()};
    // ищем наши элементы
    const inputElements = document.querySelectorAll('input');
    // запишем из инпутов в переменные
    const element1 = inputElements[0].value;  
    const element2 = inputElements[1].value;
    // parse / Number() / +
    const summ = +element1 + +element2;
    // Создадим элемент для вывода на страничку
    const resultElement = document.createElement('span');
    resultElement.classList.add('result');
    // Заполним данными (результатом)
    resultElement.innerText = summ;
    // Отобразим на страничке
    const bodyElement = document.querySelector('body');
    bodyElement.append(resultElement);
    // body можно не искать отдельно
    // document.body.append........
}


// добавляем на кнопку действие
submitButtonElement.addEventListener('click', submitButtonHanler);

