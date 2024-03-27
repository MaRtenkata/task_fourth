import axios from 'axios';

export async function fetchWeatherData(location) {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${location.lat}&lon=${
      location.lon
    }&units=metric&appid=${import.meta.env.VITE_API_KEY}`
  );
  return response.data;
}
