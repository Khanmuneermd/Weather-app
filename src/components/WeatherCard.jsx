import { useEffect, useState } from 'react';
import { fetchWeather } from '../api/api';

export default function WeatherCard({ city }) {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchWeather(city)
    .then(setWeatherData)
    .catch(
      (error) => {
        setError(error)
        setWeatherData(null)
      }
    );
  }, [city]);


  const { location, current } = weatherData || {};
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (!weatherData) return <div>Loading...</div>;

  return (
    <div className='weather-card my-5 py-4'>
      <div className='flex flex-col justify-center items-center mx-auto'>
        <div className='weather-data border-2 rounded-lg px-10 py-10 shadow-xl'>
          <h2 className='text-center text-2xl'>Current Weather</h2>
          <div className='flex font-semibold temprature flex-col justify-center items-center'>
            <div className='flex temp text-center justify-center items-center'>
              <p className='text-center text-5xl'>{Math.floor(current.temp_c)}</p>
              <sup className='text-lg text-gray-500'>°C</sup>
              <img src={current.condition.icon} alt='condition img' />
            </div>
            <div className='condition text-lg'>
              <p>{current.condition.text}</p>
            </div>
            <div className='feelslike flex space-x-3 mt-1 justify-center items-center'>
              <p className='font-semibold'>Feels like</p>
              <div className='feelslike-temp flex justify-center items-center'>
                <p className='text-2xl'>{Math.floor(current.feelslike_c)}</p>
                <sup className='text-gray-500'>°C</sup>
              </div>
            </div>
          </div>
          <div className='px-5'>
            <div className='location flex space-x-1 justify-center'>
              <h2 className='text-3xl font-semibold'>{location.name},</h2>
              <p className='mt-3 font-semibold'>{location.region}</p>
            </div>
            <div className='flex justify-center'>
              <div className='flex space-x-3 justify-between ml-5'>
                <div>
                  <p>Wind speed</p>
                  <p>Wind direction</p>
                  <p>Wind gust</p>
                  <p>Humidity</p>

                </div>
                <div className='font-semibold'>
                  <p>{current.wind_kph} Kph</p>
                  <p>{current.wind_dir}</p>
                  <p>{current.humidity}%</p>
                  <p>{Math.floor(current.gust_kph)} kph</p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
      {/* Add more weather details as needed */}
    </div>
  );
}

