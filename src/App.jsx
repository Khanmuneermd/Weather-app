import Navbar from "./components/Navbar";
import WeatherCard from "./components/WeatherCard";
export default function App() {
  return (
    <div>
      {/* rendering the elements in app */}
      <Navbar/>
      <WeatherCard/>
    </div>
  );
}
