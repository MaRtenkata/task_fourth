/* eslint-disable react/prop-types */
import { CiCloud } from 'react-icons/ci';
import { FaLocationCrosshairs } from 'react-icons/fa6';
import SearchBox from './search-box';
import { useState } from 'react';

import { useLocationStore } from '../hooks/useStore';
import { fetchLatAndLong } from '../actions/fetchLatAndLong';

const Navbar = (props) => {
  const [city, setCity] = useState('');
  const setLocation = useLocationStore((state) => state.setLocation);

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await fetchLatAndLong(city);

      setLocation({ lat: response[0].lat, lon: response[0].lon });
    } catch (error) {
      console.log(error);
    }
  }

  async function handleInputChange(value) {
    setCity(value);
  }

  function handleCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (postiion) => {
        const { latitude, longitude } = postiion.coords;
        setLocation({ lat: latitude, lon: longitude });
      });
    }
  }

  return (
    <nav className='sticky top-0 z-50 bg-white shadow-md px-4'>
      <div className='h-16 flex items-center justify-between'>
        <div className='flex items-center'>
          <h2>Weather App</h2>
          <CiCloud className='text-3xl mt-1 text-blue-300 ml-2' />
        </div>
        <div className='flex items-center'>
          <button onClick={handleCurrentLocation} className='flex items-center'>
            <FaLocationCrosshairs className='text-3xl text-gray-500 hover:text-blue-300' />
            <span className='ml-2'>{props.cityName}</span>
          </button>
          <SearchBox
            value={city}
            onSubmit={handleSubmit}
            onChange={(e) => handleInputChange(e.target.value)}
          />
        </div>
      </div>
      <div></div>
    </nav>
  );
};

export default Navbar;
