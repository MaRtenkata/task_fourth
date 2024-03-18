import axios from 'axios';

export async function fetchWeatherData() {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&units=metric&appid=${
      import.meta.env.VITE_API_KEY
    }`
  );
  return response.data;
}
