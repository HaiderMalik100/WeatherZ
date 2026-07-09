import React, { useState } from 'react';
import AuroraBackground from './components/AuroraBackground';
import SearchBar from './components/SearchBar';
import CurrentWeather from './components/CurrentWeather';
import HourlyWave from './components/HourlyWave';
import ForecastPills from './components/ForecastPills';
import WeatherWidget from './components/WeatherWidget';
import useWeather from './hooks/useWeather';
import { getWindDirection } from './utils/weatherUtils';
import Footer from './components/Footer';
import './styles/App.css';

function App() {
  const [city, setCity] = useState('Karachi');
  const { weather, forecast, hourly, loading, error } = useWeather(city);

  return (
    <div className="app">
      <AuroraBackground condition={weather?.weather[0]?.main} />
      <div className="container">
        <SearchBar onSearch={setCity} />

        {loading && <div className="loader">Scanning atmosphere...</div>}
        {error && <div className="error">Error: {error}</div>}

        {weather && (
          <>
            <CurrentWeather data={weather} />
            <div className="widgets-grid">
  <WeatherWidget
    label="Feels Like"
    value={Math.round(weather.main.feels_like)}
    unit="°"
    icon="🌡️"
  />
  <WeatherWidget
    label="Humidity"
    value={weather.main.humidity}
    unit="%"
    icon="💧"
  />
  <WeatherWidget
    label="Pressure"
    value={weather.main.pressure}
    unit="hPa"
    icon="🌀"
  />
  <WeatherWidget
    label="Sea Level"
    value={weather.main.sea_level}
    unit="hPa"
    icon="🌊"
  />
  <WeatherWidget
    label="Wind Speed"
    value={Math.round(weather.wind.speed * 3.6)}
    unit="km/h"
    icon="🌬️"
  />
  <WeatherWidget
    label="Wind Gust"
    value={Math.round(weather.wind.gust * 3.6)}
    unit="km/h"
    icon="💨"
  />
  <WeatherWidget
    label="Wind Dir"
    value={getWindDirection(weather.wind.deg)}
    unit=""
    icon="🧭"
  />
  <WeatherWidget
    label="Min / Max"
    value={`${Math.round(weather.main.temp_min)} / ${Math.round(weather.main.temp_max)}`}
    unit="°"
    icon="📊"
  />
</div>
            {hourly && <HourlyWave data={hourly} />}
            {forecast && <ForecastPills data={forecast} />}
          </>
        )}
      </div>
      <Footer />
    </div>

    
  );
}

export default App;