// найдем первую кнопку по id
const btn = document.getElementById("magic-btn");
// скопируем ее - получилась вторая кнопка. Ее можно использовать.
const clonedBtn = btn.cloneNode(true);
// задали id
clonedBtn.id = "magic-btn-2";

btn.addEventListener('click', () => {
  // при нажатии на первую кнопку
  // работайте с clonedBtn
  // ваш код начинается здесь
  const newBtn = document.createElement("button");

  newBtn.id = "magic-btn-2";
  newBtn.innerText = "Я изменю тебя";

  newBtn.style.backgroundColor = "#a78b71";
  newBtn.style.color = "white";

  document.body.appendChild(newBtn);


  newBtn.addEventListener('click', () => {
    btn.style.backgroundColor = "#9c4a1a";
    btn.style.color = "black";
  });
  
})

// здесь можете создать EventListener для второй кнопки