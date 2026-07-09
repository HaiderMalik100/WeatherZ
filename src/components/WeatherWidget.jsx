import React from 'react';
import '../styles/WeatherWidget.css';

const WeatherWidget = ({ label, value, unit, icon }) => {
  return (
    <div className="weather-widget">
      <div className="widget-icon">{icon}</div>
      <div className="widget-content">
        <span className="widget-label">{label}</span>
        <div className="widget-value">
          <span className="value-num">{value}</span>
          <span className="value-unit">{unit}</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherWidget;