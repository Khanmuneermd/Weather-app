import { useState } from "react"
import { BiSearch } from "react-icons/bi"

// Input component with a search button
export default function InputSearch({onSearch}) {
    const [inputValue, setInputValue] = useState('')
    // on changing the city name on the input bar the value gets updated
    function handleInputChange(ev){
        setInputValue(ev.target.value);
    }
    // passing the recieved value as a prop to the WeatherCard file
    function handleSearch(){
        onSearch(inputValue);
        setInputValue('');
    }
  return (
    <div className="flex w-full h-auto lg:screen-max-width lg:mx-auto bg-purple text-white py-2 px-2 rounded-lg">
        <input type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter city name"
            className="lg:screen-max-width lg-mx-auto py-2 px-9 lg:px-3 rounded-lg focus:ring-2 focus:ring-fuchsia-600 transition-all duration-700 outline-none
            text-black mr-1 
            "
         />
         <button onClick={handleSearch}>
            <BiSearch className="text-2xl"/>
         </button>
    </div>
  )
}
