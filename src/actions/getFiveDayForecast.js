export const getFiveDayForecast = async ({ lat, lon }) => {
  const data = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${
      import.meta.VITE_OPENWEATHER_API_KEY
    }`
  );
  if (!data.ok) {
    throw new Error('Failed to fetch data');
  }

  return data.json();
};
