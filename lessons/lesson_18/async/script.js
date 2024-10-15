const taskList = document.querySelector('#task-list')

// создаем асинхронную функцию с помощью синтаксиса async / await
// он позволяет нам внутри особых функции сохранять порядок операций при работе с асинхронным и синхронным кодом

// перед объявлением функции пишем ключевое слово async
async function getData() {
  // пробуем выполнить запрос
  try {
    // объявляем переменную и через ключевое слово await дожидаемся результата fetch запроса
    const res = await fetch('https://jsonplaceholder.typicode.com/todos')
    if (!res.ok) {
      console.log(res)
      throw new Error(`Network error: ${res.status}`)
    }
    // объявляем переменную и через await дожидаемся результата метода json()
    const data = await res.json();
    const shortData = data.slice(0, 15)
    shortData.map(task => {
      const li = document.createElement('li')
      li.textContent = task.title
      if (task.completed) {
        li.classList.add('completed')
      }
      // li.textContent = `Completed: ${task.completed}, ${task.title}`
      taskList.append(li)
    })
    // обрабатываем ошибку
  } catch (error) {
    // выводим в консоль текст ошибки
    console.log('ошибка:', error.message)
  }
}

getData()
