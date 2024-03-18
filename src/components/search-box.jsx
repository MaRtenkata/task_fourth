import { FaSearchLocation } from 'react-icons/fa';

const SearchBox = () => {
  return (
    <form className='ml-2 flex items-center' action='submit'>
      <input
        className='px-4 py-2 w-[230px] border border-gray-300 rounded-l-md focus:outline-none  focus:border-blue-500 '
        type='text'
        placeholder='Search location..'
      ></input>
      <button
        className='px-4 py-[13px] bg-blue-500 text-white rounded-r-md focus:outline-none hover:bg-blue-600 '
        type='submit'
      >
        <FaSearchLocation />
      </button>
    </form>
  );
};

export default SearchBox;
