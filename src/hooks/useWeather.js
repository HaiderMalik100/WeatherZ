import { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = "31253c6c58b916942fc218efc65fbe5e"
const BASE_URL = "https://api.openweathermap.org/data/2.5"

const useWeather = (city) => {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [hourly, setHourly] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      setError(null);
      try {
        const [currentRes, forecastRes] = await Promise.all([
          axios.get(`${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`),
          axios.get(`${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`)
        ]);

        setWeather(currentRes.data);
        setHourly(forecastRes.data.list.slice(0, 8));

        // Better 5-day grouping: take 12:00 PM each day
        const dailyData = forecastRes.data.list.filter(item =>
          item.dt_txt.includes('12:00:00')
        );
        setForecast(dailyData.slice(0, 5));

      } catch (err) {
        setError(err.response?.data?.message || 'Failed to fetch weather');
      } finally {
        setLoading(false);
      }
    };

    if (city) fetchWeather();
  }, [city]);

  return { weather, forecast, hourly, loading, error };
};

export default useWeather;