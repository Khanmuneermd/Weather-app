import AstronomyCard from "./components/AstronomyCard";
import CityForm from "./components/CityForm";
import Navbar from "./components/Navbar";
import WeatherCard from "./components/WeatherCard";
import { useState } from "react";
export default function App() {
  const [city, setCity] = useState('Jabalpur'); // Default city
  const handleCitySubmit = (newCity)=>{
    setCity(newCity)
  }
  return (
    <div>
        <Navbar />
      <div className='w-full h-auto px-4 lg:screen-max-width lg:mx-auto'>
          <CityForm onCitySubmit={handleCitySubmit}/>
        {/* rendering the elements in app */}
        <div className='flex flex-col lg:flex-row lg:flex-wrap justify-center items-center lg:space-x-3'>
          <WeatherCard city={city} />
          <AstronomyCard city={city}/>
        </div>

      </div>
    </div>
  );
}
