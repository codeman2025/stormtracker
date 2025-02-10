const stormInfo = document.getElementById("storm-info");
const fetchModelsButton = document.getElementById("fetch-models-btn");
const modelsInfoContainer = document.getElementById("weather-models-info");

// OpenWeatherMap API
const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
const stormUrl = `https://api.openweathermap.org/data/2.5/weather?q=Dublin,IE&appid=${apiKey}&units=metric`; // For storm-related data

// Fetch storm information
async function fetchStormInfo() {
    try {
        const response = await fetch(stormUrl);
        const data = await response.json();
        document.getElementById("storm-name").textContent = `Storm: ${data.name}`;
        document.getElementById("storm-status").textContent = `Weather status: ${data.weather[0].description}`;
        document.getElementById("storm-icon").style.backgroundImage = `url('http://openweathermap.org/img/wn/${data.weather[0].icon}.png')`;
    } catch (error) {
        console.error('Error fetching storm data:', error);
        alert('Failed to fetch storm data');
    }
}

// Fetch weather models (example: OpenWeatherMap forecast)
async function fetchWeatherModels() {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Dublin,IE&appid=${apiKey}&units=metric`);
        const data = await response.json();
        const modelInfo = data.list.slice(0, 5).map(forecast => {
            return `<p>Time: ${forecast.dt_txt} - Temp: ${forecast.main.temp}°C, Weather: ${forecast.weather[0].description}</p>`;
        }).join('');
        modelsInfoContainer.innerHTML = modelInfo;
    } catch (error) {
        console.error('Error fetching weather models:', error);
        alert('Failed to fetch weather models');
    }
}

// Event listeners
fetchModelsButton.addEventListener("click", fetchWeatherModels);

// Initialize the app
fetchStormInfo();
