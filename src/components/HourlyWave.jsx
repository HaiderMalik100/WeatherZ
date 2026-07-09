import React from 'react';
import '../styles/HourlyWave.css';

const HourlyWave = ({ data }) => {
  const maxTemp = Math.max(...data.map(h => h.main.temp));
  const minTemp = Math.min(...data.map(h => h.main.temp));
  const range = maxTemp - minTemp || 1;

  const formatHour = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleTimeString('en-US', {
      hour: 'numeric',
      hour12: true
    });
  };

  return (
    <div className="hourly-wave">
      <h3 className="section-title">Hourly Forecast</h3>
      <div className="wave-container">
        <svg className="wave-svg" viewBox="0 0 800 200" preserveAspectRatio="none">
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--aurora-green)" />
              <stop offset="50%" stopColor="var(--aurora-blue)" />
              <stop offset="100%" stopColor="var(--aurora-purple)" />
            </linearGradient>
          </defs>
          <path
            d={generateWavePath(data, minTemp, range)}
            fill="none"
            stroke="url(#waveGradient)"
            strokeWidth="3"
            className="wave-path"
          />
        </svg>
        <div className="hourly-items">
          {data.map((hour, idx) => {
            const heightPercent = ((hour.main.temp - minTemp) / range) * 100;
            return (
              <div key={idx} className="hour-item">
                <span className="hour-temp">{Math.round(hour.main.temp)}°</span>
                <div className="hour-bar">
                  <div
                    className="hour-fill"
                    style={{ height: `${heightPercent}%` }}
                  ></div>
                </div>
                <img
                  src={`https://openweathermap.org/img/wn/${hour.weather[0].icon}.png`}
                  alt={hour.weather[0].description}
                  className="hour-icon"
                />
                <span className="hour-time">{formatHour(hour.dt)}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const generateWavePath = (data, minTemp, range) => {
  const width = 800;
  const height = 200;
  const stepX = width / (data.length - 1);

  let path = `M 0 ${height - ((data[0].main.temp - minTemp) / range) * height}`;

  data.forEach((hour, i) => {
    const x = i * stepX;
    const y = height - ((hour.main.temp - minTemp) / range) * height;
    if (i === 0) return;
    const prevX = (i - 1) * stepX;
    const prevY = height - ((data[i - 1].main.temp - minTemp) / range) * height;
    const cx = (prevX + x) / 2;
    path += ` Q ${cx} ${prevY}, ${x} ${y}`;
  });

  return path;
};

export default HourlyWave;