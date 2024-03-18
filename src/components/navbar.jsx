import { CiCloud } from 'react-icons/ci';
import { FaLocationCrosshairs } from 'react-icons/fa6';
import SearchBox from './search-box';

const Navbar = () => {
  return (
    <nav className='sticky top-0 z-50 bg-white shadow-md px-4'>
      <div className='h-16 flex items-center justify-between'>
        <div className='flex items-center'>
          <h2>Weather App</h2>
          <CiCloud className='text-3xl mt-1 text-blue-300 ml-2' />
        </div>
        <div className='flex items-center'>
          <button className='flex items-center'>
            <FaLocationCrosshairs className='text-3xl text-gray-500 hover:text-blue-300' />
            <span className='ml-2'>Location</span>
          </button>
          <SearchBox />
        </div>
      </div>
      <div></div>
    </nav>
  );
};

export default Navbar;
