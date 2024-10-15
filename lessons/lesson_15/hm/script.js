document.getElementById('bmi-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // Перевод в метры

    if (!weight || !height) {
        alert('Введите корректные значения веса и роста!');
        return;
    }

    const bmi = (weight / (height * height)).toFixed(2);
    document.getElementById('bmi-result').textContent = `Ваш BMI: ${bmi}`;

    let status = '';
    if (bmi < 18.5) {
        status = 'Недостаточный вес';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        status = 'Нормальный вес';
    } else if (bmi >= 25 && bmi < 29.9) {
        status = 'Избыточный вес';
    } else {
        status = 'Ожирение';
    }

    document.getElementById('bmi-status').textContent = `Статус: ${status}`;
});
