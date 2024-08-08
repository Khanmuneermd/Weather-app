import { useEffect, useState } from "react"
import { fetchAstronomy } from "../api/api"

export default function Astronomy({ city}) {
  const [astronomyData, setAstronomyData] = useState(null)
  const [error, setError] = useState(null)
  useEffect(() => {
    fetchAstronomy(city)
      .then(setAstronomyData)
      .catch((error )=> {
        setError(error)
        setAstronomyData(null)    
      })
  }, [city])

  if(error){
    return <div>Error: {error.message}</div>
  }
  if (!astronomyData) {
    return <div>Loading...</div>
  }

  const { location, astronomy } = astronomyData || {}

  return (
    <div className='flex astronomyCard py-4'>
      <div className='astronomyData border-2 px-16 py-16 rounded-lg shadow-lg mx-4'>
        <h2 className='text-2xl text-center font-semibold'>Astronomy</h2>
        <div className='location flex py-1'>
          <h2 className='text-4xl font font-semibold'>{location.name},</h2>
          <p className='text-md mt-4 font-semibold'>{location.region}</p>
        </div>
        <div className='flex justify-between space-x-4'>
          <div>
            <p>Sunrise</p>
            <p>Sunset</p>
            <p>Moonrise</p>
            <p>Moonset</p>
            <p>Moonphase</p>
          </div>
          <div className='font-semibold'>
            <p>{astronomy.astro.sunrise}</p>
            <p>{astronomy.astro.sunset}</p>
            <p>{astronomy.astro.moonrise}</p>
            <p>{astronomy.astro.moonset}</p>
            <p>{astronomy.astro.moon_phase}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
