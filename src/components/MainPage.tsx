import { useEffect, useState } from 'react';
import CommonPage from './CommonPage/CommonPage';
import SideBar from './Sidebar/SideBar';
import { getWeather } from '@/api/getWeather';
import { WeatherData } from '@/types';

function MainPage() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  useEffect(() => {
    const getCurrentData = async () => {
      // Minsk coordinates
      const weatherData = await getWeather(53.9, 27.5667);
      setWeatherData(weatherData);
    };
    getCurrentData();
  }, []);

  console.log(weatherData);

  return (
    <div className="container font-SF-Pro-Display">
      {weatherData && (
        <>
          <CommonPage
            currentTemperature={weatherData.current.temperature2m}
            dailyData={weatherData.daily}
            hourlyData={weatherData.hourly}
            currentData={weatherData.current}
          />
          <SideBar
            currentTemperature={weatherData.current.temperature2m}
            diffTemperature={weatherData.daily}
          />
        </>
      )}
    </div>
  );
}

export default MainPage;
