import React from 'react';
import '../styles/CurrentWeather.css';

const CurrentWeather = ({ data }) => {
  return (
    <div className="current-weather">
      <div className="location">
        <h2>{data.name}, {data.sys.country}</h2>
        <p className="condition">{data.weather[0].description}</p>
      </div>
      <div className="temp-display">
        <span className="temp">{Math.round(data.main.temp)}</span>
        <span className="unit">°C</span>
      </div>
      <img
        src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`}
        alt={data.weather[0].description}
        className="weather-icon"
      />
    </div>
  );
};

export default CurrentWeather;