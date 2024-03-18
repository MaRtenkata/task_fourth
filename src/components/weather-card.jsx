import WeatherIcon from './weather-icon';
import { WiHumidity } from 'react-icons/wi';
import { MdOutlineVisibility } from 'react-icons/md';
import { FiSunrise } from 'react-icons/fi';
import { FiSunset } from 'react-icons/fi';
import { WiBarometer } from 'react-icons/wi';

/* eslint-disable react/prop-types */
export const WeatherCard = (props) => {
  const { entry, sunrise, sunset } = props;

  const date = entry.dt_txt.split(' ').shift();

  return (
    <div className='mt-10 flex justify-around w-full bg-white rounded-lg shadow-lg'>
      <div className='flex flex-col items-center p-5'>
        <WeatherIcon iconName={entry.weather[0].icon} />
        <p>{date}</p>
      </div>
      <div className='flex items-center justify-center flex-col px-4'>
        <span className='text-3xl'>{entry.main.temp} C°</span>
        <p className='text-xs space-x-1'>
          <span> Feels like</span>
          <span>{entry.main.feels_like} C°</span>
        </p>
        <p className='capitalize'> {entry.weather[0].description}</p>
      </div>
      <div className='flex items-center justify-center flex-col px-4'>
        <p className='text-md'>Humidity</p>
        <WiHumidity className='text-5xl text-blue-300' />
        <p className='text-xl'>{entry.main.humidity}%</p>
      </div>
      <div className='flex items-center justify-center flex-col px-4'>
        <p className='text-md'>Visibility</p>
        <MdOutlineVisibility className='text-5xl 00' />
        <p className='text-xl'>{entry.visibility}km</p>
      </div>
      <div className='flex items-center justify-center flex-col px-4'>
        <p className='text-md'>Pressure</p>
        <WiBarometer className='text-5xl 00' />
        <p className='text-xl'>{entry.main.pressure} hPa</p>
      </div>
      <div className='flex items-center justify-center flex-col px-4'>
        <p className='text-md'>Sunrise</p>
        <FiSunrise className='text-5xl 00' />
        <p className='text-xl'>{sunrise}</p>
      </div>
      <div className='flex items-center justify-center flex-col px-4'>
        <p className='text-md'>Sunset</p>
        <FiSunset className='text-5xl 00' />
        <p className='text-xl'>{sunset}</p>
      </div>
    </div>
  );
};

export default WeatherCard;
