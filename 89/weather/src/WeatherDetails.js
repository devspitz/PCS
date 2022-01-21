import React from "react";

export default function WeatherDetails(props) {

    const { name, weather, main } = props.weather;
    console.log(props);
    return (
        <ol className='weatherDisplay'>
            <li><h2>{name}</h2></li>
            <li><img src={`https://openweathermap.org/img/w/${weather[0].icon}.png` } alt="theWeatherPicture"/></li>
            <li> <p>The weather in {name} is currently {main.temp}.</p></li>
        </ol>)
}