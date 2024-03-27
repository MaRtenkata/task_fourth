import axios from 'axios';

export const fetchLatAndLong = async (city) => {
  try {
    const responce = await axios.get(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${
        import.meta.env.VITE_API_KEY
      }`
    );

    return responce.data;
  } catch (error) {
    console.log(error);
  }
};
