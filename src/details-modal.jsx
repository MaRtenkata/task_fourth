import WeatherIcon from './components/weather-icon';

/* eslint-disable react/prop-types */
const DetailsModal = ({ onClose, isOpen, entry, data }) => {
  const hourDataList = data.list.filter((e) => {
    const entryDate = new Date(e.dt * 1000).toISOString().split('T')[0];

    return entryDate === entry.dt_txt.split(' ').shift();
  });

  const dayOfWeek = new Date(entry.dt * 1000).toLocaleString('en-US', {
    weekday: 'long',
  });

  if (!isOpen) return null;
  return (
    <div className='fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50'>
      <div className=' bg-white p-8 mx-10 rounded-lg shadow-lg'>
        <div className=' flex flex-col px-4 items-center'>
          <h1 className='text-2xl'>{dayOfWeek}</h1>
          <span className='text-5xl'>{entry.main.temp}°</span>
          <p className='text-xs space-x-1 '>
            <span> Feels like</span>
            <span>{entry.main.feels_like}°</span>
          </p>
          <p className='text-xs space-x-2'>
            <span>
              {entry.main.temp_min}
              °↓{' '}
            </span>
            <span>
              {' '}
              {entry.main.temp_max}
              °↑
            </span>
          </p>
        </div>
        <div className='mt-5 flex gap-10 justify-between pr-3'>
          {hourDataList.map((d, i) => (
            <div
              key={i}
              className=' flex flex-col justify-between items-center text-xs font-semibold '
            >
              <p>{d.dt_txt}</p>
              <WeatherIcon iconName={d.weather[0].icon} />
              <p>{d.main.temp}°</p>
            </div>
          ))}
        </div>

        <button
          className='rounded-md border-gray border-2 p-2 mt-2 w-full hover:bg-slate-200'
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default DetailsModal;
