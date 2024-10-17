const date = document.querySelector(".date-text");
const cityName = document.querySelector(".city-text");
const iconImg = document.querySelector(".icon-big img");
const weatherText = document.querySelector(".weather-text");
const temperatureText = document.querySelector(".temperature-now-text");
const weekDays = document.querySelectorAll(".day");

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// Функция для получения местоположения и погоды
const getLocationInfo = async () => {
  try {
    // Получаем местоположение пользователя через GeoJS API
    const locationResponse = await fetch('https://get.geojs.io/v1/ip/geo.json');
    const locationData = await locationResponse.json();
    console.log(locationData);

    // Используем долготу и широту для запроса к WeatherAPI
    const weatherResponse = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=94b25103b10948d693083138241610&q=${locationData.city}&aqi=no`
    );
    const weatherData = await weatherResponse.json();
    console.log(weatherData);

    // Обновляем город и страну на странице
    cityName.textContent = `${locationData.city}, ${locationData.country}`;

    // Обновляем описание погоды, температуру и иконку
    weatherText.textContent = weatherData.current.condition.text;
    temperatureText.textContent = `${weatherData.current.temp_c}°`;
    iconImg.src = `https:${weatherData.current.condition.icon}`;

    // Устанавливаем текущую дату
    const currentDate = new Date();
    const dayOfWeek = daysOfWeek[currentDate.getDay()]; // Получаем день недели
    const month = months[currentDate.getMonth()]; // Получаем месяц
    const day = currentDate.getDate(); // Получаем число
    date.textContent = `${dayOfWeek}, ${month} ${day}`;

    // Запрашиваем прогноз на неделю
    const forecastResponse = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=94b25103b10948d693083138241610&q=${locationData.city}&days=7&aqi=no`
    );
    const forecastData = await forecastResponse.json();
    console.log(forecastData);

    // Обновляем прогноз на неделю
    forecastData.forecast.forecastday.forEach((dayData, index) => {
      const weekDayElement = weekDays[index];
      const dateObj = new Date(dayData.date);

      // Обновляем день недели для каждого дня
      const dayOfWeekShort = daysOfWeek[dateObj.getDay()].slice(0, 3);
      weekDayElement.querySelector(".text-weekDay").textContent = dayOfWeekShort;

      // Обновляем максимальную и минимальную температуру
      weekDayElement.querySelector(".temperature-max-text").textContent = `${Math.round(dayData.day.maxtemp_c)}°`;
      weekDayElement.querySelector(".temperature-min-text").textContent = `${Math.round(dayData.day.mintemp_c)}°`;

      // Обновляем иконку для каждого дня
      weekDayElement.querySelector(".icon-small img").src = `https:${dayData.day.condition.icon}`;
    });
  } catch (error) {
    console.error("Ошибка при получении данных:", error);
  }
};

getLocationInfo();

