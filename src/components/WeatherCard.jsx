import { useState, useEffect } from 'react';
import InputSearch from './InputSearch';

export default function WeatherCard(){
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('Seoni'); // Default city
  const [inputCity, setInputCity] = useState('');
  const [error, setError] = useState(null);
  const fetchWeather = async (city) => {
    try {
      // getting the response from the server
      const response = await fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`, {
        method: 'GET',
        headers: {

          // here the api key and api host name are hidden in an env file if you want to use the app u need to subscribe to weather api from rapid api
          // here is the link https://rapidapi.com/weatherapi/api/weatherapi-com/playground/

          'X-RapidAPI-Key': import.meta.env.VITE_X_RAPIDAPI_KEY,
          'X-RapidAPI-Host': import.meta.env.VITE_X_RAPIDAPI_HOST,
        },
      });
      // if the user enters wrong data (ie. some gibberish or wrong city name)
      if (!response.ok) {
        throw new Error('City not found');
      }
      // if the user has put the right data (ie. city name) then we proceed forward
      const data = await response.json();
      setWeather(data);
      // setting the error to null since the error is not found
      setError(null);
    } catch (error) {
      // setting the error
      setError('City not found');
      // setting the weather to null since the city is not available
      setWeather(null)
    }
  };

  // handling the input city to remove unnecessary spacing 
  const handleCitySubmit = (e) => {
    e.preventDefault();
    // NS refers to no spacing so that any unnecessary spacing added by the user is trimmed
    const cityNS = inputCity.trim();
    if (cityNS) {
      fetchWeather(cityNS);
      setCity(cityNS);
      setInputCity('');
    }
  };

  // since the input element used in the form that is taking the city name is a react component we need this function in order to add the city name into our api
  const handleSearch = (city)=>{
    fetchWeather(city);
    setCity(city);
  }

  useEffect(() => {
    fetchWeather(city);
  }, [city]);

  // destructuring of location and current from weather
  const { location, current } = weather || {};
  return (
    <div className='flex w-full h-full lg:screen-max-width justify-center items-center mx-auto my-5'>
      <div className='flex flex-col justify-center items-center py-2'>
        <form onSubmit={handleCitySubmit}
         className='flex'
        >
          {/* input element with a submit button */}
         <InputSearch onSearch={handleSearch}/>
        </form>

        {/* dynamic enry of data from api */}
        {/* handling error in case an error shows up */}
        {error ? (<p className='text-red-500 my-10 text-lg font-semibold'>{error}</p>) : location && current ? 
        (
          // using tailwind css to create appealing an minimalistic responsive design
          <div className="weather-card py-5 px-20 my-4 text-center border-2 rounded-lg shadow-lg space-y-2">
            <p className='text-center text-3xl font-semibold'>{current.temp_c}°C</p>
            <h2 className='font-semibold text-sm'><span className='text-2xl font-semibold'>{location.name}</span>, {location.region}</h2>
            <p className='font-semibold'>
              {current.condition.text}</p>
            <p className='font-semibold'>
              Wind: {current.wind_kph} kph</p>
            <p className='font-semibold'>Humidity: {current.humidity}%</p>
            <p className='font-semibold'>Visibility: {current.vis_km} km</p>
            <p className='font-semibold'>Pressure: {current.pressure_mb} mb</p>
          </div>
        ) : 
        (
        <div>Loading...</div>
        )}
      </div>
    </div>
  );
}


