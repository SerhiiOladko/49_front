const inputTimeElement = document.querySelector('#timeInput');
const timerElement = document.querySelector('#timer');
const endTimeMessageElement = document.querySelector('#message');
const startTimerButton = document.querySelector('button');

startTimerButton.addEventListener('click', startTimer);
function startTimer() {
  let time = +inputTimeElement.value;
  if (!time) {
    alert('Введите время!');
  } else {
    timerElement.textContent = time;
    time--;
    const intervalId = setInterval(() => {
      timerElement.textContent = time;
      time--;
      if (time < 0) {
        clearInterval(intervalId);
        endTimeMessageElement.textContent = 'Время вышло';
        setTimeout(() => {
          timerElement.textContent = '00:00';
          endTimeMessageElement.textContent = '';
          inputTimeElement.value = null;
        }, 2500);
      }
    }, 1000);
  }
}
