const loader = document.getElementById('loader');
const attractionsContainer = document.getElementById('attractions-container');

async function fetchAttractions() {
    loader.style.display = 'block'; // Показать loader

    try {
        const response = await fetch('https://6729b8f86d5fa4901b6e13bc.mockapi.io/:endpoint');
        const data = await response.json();

        renderAttractions(data);
    } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
    } finally {
        loader.style.display = 'none'; // Скрыть loader
    }
}

function renderAttractions(attractions) {
    attractionsContainer.innerHTML = ''; // Очистить контейнер

    attractions.forEach(attraction => {
        const attractionDiv = document.createElement('div');
        attractionDiv.innerHTML = `
            <h2>${attraction.name}</h2>
            <p>${attraction.description}</p>
            <p>Локация: ${attraction.location}</p>
            <img src="${attraction.image}" alt="${attraction.name}" style="width: 200px;">
        `;
        attractionsContainer.appendChild(attractionDiv);
    });
}

// Вызов функции для загрузки данных при загрузке страницы
fetchAttractions();