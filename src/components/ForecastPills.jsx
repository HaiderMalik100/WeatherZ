import React from 'react';
import '../styles/ForecastPills.css';

const ForecastPills = ({ data }) => {
  const formatDay = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleDateString('en-US', {
      weekday: 'short'
    });
  };

  return (
    <div className="forecast-pills">
      <h3 className="section-title">5-Day Forecast</h3>
      <div className="pills-container">
        {data.map((day, idx) => (
          <div
            key={idx}
            className="forecast-pill"
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            <span className="pill-day">{formatDay(day.dt)}</span>
            <img
              src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
              alt={day.weather[0].description}
              className="pill-icon"
            />
            <div className="pill-temps">
              <span className="pill-high">{Math.round(day.main.temp_max)}°</span>
              <span className="pill-low">{Math.round(day.main.temp_min)}°</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForecastPills;