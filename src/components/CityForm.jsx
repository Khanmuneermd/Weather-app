import { useState } from "react";
import { LiaSearchSolid } from "react-icons/lia";
const CityForm = ({ onCitySubmit }) => {
  const [inputCity, setInputCity] = useState('');

  const handleCityChange = (e) => {
    setInputCity(e.target.value);
  };

  const handleCitySubmit = (e) => {
    e.preventDefault();
    if (inputCity.trim() !== ' ') {
      onCitySubmit(inputCity.trim());
      setInputCity(''); // Clear the input field after submission
    }
  };

  return (
    <form onSubmit={handleCitySubmit} className='my-5 flex mx-auto'>
      <input
        type='text'
        value={inputCity}
        onChange={handleCityChange}
        placeholder='Enter city name'
        className="border-2 rounded screen-max-width h-auto outline-none focus:ring-2 focus:ring-midnight px-4 py-2 transition-all duration-500"
      />
      <button type='submit' className='ml-1 px-4 py-2 bg-blue-500 text-white rounded'>
        <LiaSearchSolid className='text-2xl'/>
      </button>
    </form>
  );
};

export default CityForm;
