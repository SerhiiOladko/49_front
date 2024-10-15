const form = document.querySelector('#name-form');
const resultElement = document.querySelector('#gender-result');
const loader = document.querySelector('#loader');

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const nameInput = document.querySelector('#name-input').value.trim();

   
    if (nameInput === '') {
        resultElement.textContent = 'Пожалуйста, введите имя!';
        return;
    }

    loader.classList.remove('loader-hide');
    
    try {
        const response = await fetch(`https://api.genderize.io/?name=${nameInput}`);
        const data = await response.json();

        if (data.gender) {
            resultElement.innerHTML = `Прогнозируемый пол для <strong>${nameInput}</strong> is <strong>${data.gender}</strong> с вероятностью <strong>${(data.probability * 100).toFixed(2)}%</strong>.`;
        } else {
            resultElement.textContent = `Прогноз пола для "${nameInput}" недоступно.`;
        }
    } catch (error) {
        resultElement.textContent = 'Ошибка при получении данных из API.';
        console.error('Error:', error);
    } finally {
      
        loader.classList.add('loader-hide');
    }
});
