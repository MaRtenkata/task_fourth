# Weather App

This is a weather app built with React, Tailwind CSS, Zustand, react-query, and axios. It fetches weather data from the OpenWeatherMap API.

## Features

- 5 day forecast displayed showing predicted high/low temps and weather conditions

- Search for weather data by city name

## Usage

To use the app:

1. Clone the repo
2. Run `npm install`
3. Get an API key from [OpenWeatherMap](https://openweathermap.org/api)
4. Create a `.env` file and add your API key like:

```
    REACT_APP_API_KEY=YOUR_API_KEY
```

5. Run `npm run dev` to start the dev server

The app should now be running on http://localhost:5173

## Built With

- [React](https://reactjs.org/) - Front-end framework
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Zustand](https://github.com/pmndrs/zustand) - State management
- [react-query](https://react-query.tanstack.com/) - Data fetching
- [axios](https://github.com/axios/axios) - HTTP client
- [Vite](https://vitejs.dev/) - Build tool
- [OpenWeatherMap API](https://openweathermap.org/api) - Weather data API

## Thing to improve

- Adding more testing

- Adding more error handling

- Adding more weather data

- Make design responsive

- Improve the search bar to so that it searches for the correct city
