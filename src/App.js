import './App.css';
import { useState } from "react";
import Search from './components/search/search';
import CurrentWeather from './components/current-weather/current-weather'
import {WEATHER_API_URL, WEATHER_API_KEY} from './api';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
const [currentWeather, setCurrentWeather] =useState(null);
const [forecast, setForecast] =useState(null);

  const handleOnSearchChange=(searchData) => {
    const[lat, lon]=searchData.value.split(" ");

    const currentWeatherFetch=fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`);
    const forecastFetch=fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`);

    Promise.all([currentWeatherFetch, forecastFetch])
    .then(async (response)=> {
      const weatherResponse=await response[0].json();
      const forecastResponse=await response[1].json();

      setCurrentWeather({ city: searchData.label , ...weatherResponse});
      setForecast({ city: searchData.label , ...forecastResponse});

    })
    .catch((err) => console.log(err));
  }

  console.log(currentWeather);
  console.log(forecast);

  return (
    <><div className="container">
      <div className='row'><div className='col'><p></p></div></div>
        <div className='row'>
          <div className='col-sm-12'>
            <Search onSearchChange={handleOnSearchChange} />
          </div>
        </div>
        <div className='row'>
          <div className='vol-12 col-6'>
            {currentWeather && <CurrentWeather data={currentWeather} />}
          </div>
        </div>
      </div></>
  );
}

export default App;
