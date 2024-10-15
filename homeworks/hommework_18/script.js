
async function fetchCatFact() {
    try {
        const response = await fetch('https://catfact.ninja/fact');
        const data = await response.json();
        return data.fact;
    } catch (error) {
        console.error("Ошибка получения факта о кошке:", error);
        return "Не удалось загрузить факт о кошке.";
    }
}


async function fetchCatImage() {
    try {
        const response = await fetch('https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1');
        const data = await response.json();
        return data[0].url;  
    } catch (error) {
        console.error("Ошибка получения изображения кошки:", error);
        return "";
    }
}


async function updateCatContent() {
    const factElement = document.getElementById('cat-fact');
    const imageElement = document.getElementById('cat-image');

  
    const fact = await fetchCatFact();
    factElement.textContent = fact;


    const imageUrl = await fetchCatImage();
    imageElement.src = imageUrl;
}


document.getElementById('update-btn').addEventListener('click', updateCatContent);

updateCatContent();
