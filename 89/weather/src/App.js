import './App.css';
import React, { useEffect, useState } from 'react';
import WeatherDetails from './WeatherDetails.js';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Weather() {

  const [zip, setZip] = useState('44118');
  const [DataisLoaded, setDataisLoaded] = useState(false);

  const [weatherInformation, setWeatherInformation] = useState();

  useEffect(() => {
    (async () => {
      try {
        const r = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=cb7c71219cf09eb0bb414b932669be97&units=imperial`);
        if (!r.ok) {
          throw new Error(`${r.status} ${r.statusText}`);
        }
        const weatherData = await r.json();
        setWeatherInformation(weatherData);
        setDataisLoaded(true);
      } catch (e) {
        console.error(e);
      }
    })();
  }, [zip]);

  if (!DataisLoaded) {
    setDataisLoaded(true)
    return <div> <h1> Loading... </h1> </div>;
  }

  return (
    <div className="App">
      <div className="container text-center">
        <h1>Choose a US Zip to see the weather</h1>
        <div>
          <ul>
            <li><button className="btn btn-dark" onClick={() => setZip('08701')}>08701</button></li>
            <li><button className="btn btn-dark" onClick={() => setZip('44118')}>44118</button></li>
            <li><button className="btn btn-dark" onClick={() => setZip('44122')}>44122</button></li>
          </ul>
        </div>
        <div className="container">
          <input className='input-group input-group-sm mb-3 col-md-auto' placeholder='or enter a zip here' />
        </div>
      </div>
      {weatherInformation ? <WeatherDetails weather={weatherInformation} /> : <h1> Please wait some time.... </h1>}

    </div>
  );
}

