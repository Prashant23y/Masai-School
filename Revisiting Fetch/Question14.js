const weatherForm = document.getElementById('weatherForm');
const cityInput = document.getElementById('city');
const weatherDisplay = document.getElementById('weather');

weatherForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const city = cityInput.value.trim();
  if (!city) {
    weatherDisplay.textContent = 'Please enter a city name.';
    return;
  }
  fetchWeather(city);
});

async function fetchWeather(city) {
  const apiKey = '3a4190140159b527f02da6fc9c7b25f0';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}`;

  weatherDisplay.textContent = 'Loading...';

  try {
    const response = await fetch(url);

    if (!response.ok) {
      if (response.status === 404) {
        weatherDisplay.textContent = `City "${city}" not found. Please check the spelling and try again.`;
      } else {
        weatherDisplay.textContent = `Error: ${response.status} ${response.statusText}`;
      }
      return;
    }

    const data = await response.json();
    const tempC = (data.main.temp - 273.15).toFixed(1); // Convert from Kelvin to Celsius
    const description = data.weather[0].description;

    weatherDisplay.textContent = 
      `Weather in ${data.name}: ${tempC}°C, ${description.charAt(0).toUpperCase() + description.slice(1)}`;
    
  } catch (error) {
    weatherDisplay.textContent = 'Network error. Please try again later.';
    console.error('Fetch error:', error);
  }
}
