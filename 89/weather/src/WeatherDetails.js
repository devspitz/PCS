import React from "react";

export default function WeatherDetails(props) {

    const { name, main, weather } = props.weather;
console.log(name);
    return (
        <ol>  
            <li><h2>{name}</h2></li>

            {main.map(details => (
                <li><h2>{details.temp} <span>&#8457;</span></h2></li>
            ))}
        

            <li> <p>The weather in {name} is currently {weather.map(weather => (
                    <li><h2>{weather.description}</h2></li>))}.</p></li>
        </ol>)
}