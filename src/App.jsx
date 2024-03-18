import Navbar from './components/navbar';
import WeatherCard from './components/weather-card';
import { useQuery } from 'react-query';
import { fetchWeatherData } from './actions/fetchWeatherData.js';

import { formatUnixTime } from './utils/formatUnixTime.js';
import { useLocationStore } from './hooks/useStore.jsx';

function App() {
  const location = useLocationStore((state) => state.location);

  const { isLoading, error, data } = useQuery(
    ['weatherForecast', location],
    () => fetchWeatherData(location)
  );

  if (isLoading) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;

  const uniqueDates = [
    ...new Set(
      data.list.map(
        (entry) => new Date(entry.dt * 1000).toISOString().split('T')[0]
      )
    ),
  ];

  const firstDataForEachDate = uniqueDates.map((date) => {
    return data?.list.find((entry) => {
      const entryDate = new Date(entry.dt * 1000).toISOString().split('T')[0];
      const entryTime = new Date(entry.dt * 1000).getHours();
      return entryDate === date && entryTime >= 6;
    });
  });

  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar cityName={data.city.name} />

      <div>
        <h1 className='text-center text-5xl'>
          5 Day Forcast for {data.city.name}
        </h1>
        {firstDataForEachDate.slice(1).map((entry) => {
          return (
            <WeatherCard
              key={entry.dt}
              sunrise={formatUnixTime(data.city.sunrise)}
              sunset={formatUnixTime(data.city.sunset)}
              data={data}
              entry={entry}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
