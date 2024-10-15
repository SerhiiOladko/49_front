console.log('hello, DOM!')
console.log(document)
console.dir(document)

// находим элемент через поиск по тегам и кладем его в переменную
// поскольку тегов может быть много - элементы приходят в массиве (списке элементов) - мы забираем первый по нулевому индексу

// * 1. поиск по тегу
let heading = document.getElementsByTagName('h2')[0]
console.log(heading)
// мы можем перезаписать значение элемента через свойство innerText
heading.innerText = 'Lesson 09. DOM intro 🏠'


// * 2. поиск по классу
// поскольку ответ приходит в массиве (списке элементов), мы указываем его порядковый номер (0 - это первый элемент массива)
let ul = document.getElementsByClassName('method-list')[0]
// стили можем поменять через обращение к свойству style
// ul.style.listStyleType = 'none'
ul.className = 'method-list'
console.log(ul)



// * 3. поиск по id
let desc = document.getElementById('desc')
// обратились к свойству color элемента и изменили его цвет
// desc.style.color = 'darkred'
// добавили элементу заранее прописанный класс
desc.className = 'desc'
console.log(desc)


// * 4. поиск через универсальный .querySelector()
let descInfo = document.querySelector('#desc-info')
descInfo.className = 'desc-info'
console.log(descInfo)


// * работа с интерактивными элементами

let btnChangeHeading = document.querySelector('#btn-change-heading')
let btnHideList = document.querySelector('#btn-hide-list')
let btnCreateElement = document.querySelector('#btn-create-element')

// функция слушатель событий принимает в себя два параметра
// 1. описание события (например, 'click' - событие нажатия на элемент пользователем)
// 2. функция с действием которое вы хотите произвести при срабатывании события
btnChangeHeading.addEventListener('click', () => {
  // этот код сработает когда случится событие описанное в первом параметре
  heading.style.color = 'red'
  heading.style.fontSize = '40px'
})


btnHideList.addEventListener('click', () => {
  // метод toggle у classlist добавляет класс если его нет
  // и убирает если он есть
  ul.classList.toggle('hide')
})

btnCreateElement.addEventListener('click', () => {
  // метод создание нового элемента createElement()
  let newElement = document.createElement('p')
  newElement.innerText = 'Кажется, я начинаю понимать этот DOM 🏡'
  newElement.className = 'dom-result'
  // добавляем элемент в конец body через метод append()
  // c его помощью мы добавляем элемент в элемент родитель
  document.body.append(newElement)
})






