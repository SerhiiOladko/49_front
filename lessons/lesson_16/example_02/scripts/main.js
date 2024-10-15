console.log('Program started');

// setTimeout
// setTimeout(() => {
//     console.log('Асинхронный коносль лог 0');
// }, 0);
// setTimeout(() => {
//     console.log('Асинхронный коносль лог 2000 n2');
// }, 2000);


//setInterval
const ii = setInterval( () => {
    console.log('Сетинтервал - ', Date.now());
}, 2000);

setTimeout(() => {
    clearInterval(ii);
}, 10000);

console.log('Все прошло хорошо');
