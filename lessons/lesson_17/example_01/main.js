// const promiseExample = new Promise((res, rej) => {
//   // let randomNumber;
//   // setTimeout(() => {
//   //     randomNumber = Math.random();
//   //     if(randomNumber > 0.5) {
//   //         res(randomNumber);
//   //     } else {
//   //         rej(randomNumber);
//   //     }
//   // }, 15000);
//   randomNumber = Math.random();
//   if (randomNumber > 0) {
//     res(randomNumber);
//   } else {
//     rej(randomNumber);
//   }
// });

// setTimeout(() => {
//     console.log('Отработал setTimeOut после нашего промиса');
//   }, 0);

// promiseExample.then((response) => {
//     console.log(response);
//   })

// console.log(promiseExample);

const resultOfFetch = fetch('https://jsonplaceholder.typicode.com/posts/');
// console.log(resultOfFetch);
// console.log('Мы сделали fetch запрос');

resultOfFetch
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((bodyOfResponse) => {
    renderFirst10(bodyOfResponse);
  });

resultOfFetch.catch((error) => {
  console.log('Здесь ошибка', error);
});

resultOfFetch.finally(()=> {
    console.log('Finally, в конце выполняется')
});

console.log('Программа работает дальше');

// Оборачиваем данные в пропис!!!!
// const r = Math.random();

// const rInPromise = new Promise((res, rej) => {
//   res(Math.random());
// });

// console.log(r);

// rInPromise.then((r) => {console.log(r)});


function renderFirst10(arrayOfPosts) {
    const ulElement = document.createElement('ul');
    arrayOfPosts
    .slice(0, 10)
    .map(item => item.title)
    .forEach(title => {
        const newLiElement = document.createElement('li');
        newLiElement.textContent = title;
        ulElement.append(newLiElement);
    });
    document.body.append(ulElement);
}
