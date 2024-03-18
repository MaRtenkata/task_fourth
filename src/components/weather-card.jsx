import WeatherIcon from './weather-icon';
import { WiHumidity } from 'react-icons/wi';
import { FiSunrise } from 'react-icons/fi';
import { FiSunset } from 'react-icons/fi';
import { WiBarometer } from 'react-icons/wi';
import { useState } from 'react';
import DetailsPageModal from '../details-modal';
import { memo } from 'react';

/* eslint-disable react/prop-types */
const WeatherCard = memo(function WeatherCard(props) {
  const { entry, sunrise, sunset, data } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const date = entry.dt_txt.split(' ').shift();

  return (
    <>
      <div className='mt-10 flex justify-around w-full bg-white rounded-lg shadow-lg'>
        <div className='flex flex-col items-center p-5'>
          <WeatherIcon iconName={entry.weather[0].icon} />
          <p>{date}</p>
          <button
            className='rounded-md border-gray-300 border-2 p-2 hover:bg-slate-200'
            onClick={() => openModal()}
          >
            View Details
          </button>
        </div>
        <div className='flex items-center justify-center flex-col px-4'>
          <span className='text-3xl'>{entry.main.temp}°</span>
          <p className='text-xs space-x-1'>
            <span> Feels like</span>
            <span>{entry.main.feels_like}°</span>
          </p>
          <p className='capitalize'> {entry.weather[0].description}</p>
        </div>
        <div className='flex items-center justify-center flex-col px-4'>
          <p className='text-md'>Humidity</p>
          <WiHumidity className='text-5xl text-blue-300' />
          <p className='text-xl'>{entry.main.humidity}%</p>
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
        <DetailsPageModal
          isOpen={isModalOpen}
          onClose={closeModal}
          data={data}
          entry={entry}
        />
      </div>
    </>
  );
});

export default WeatherCard;
