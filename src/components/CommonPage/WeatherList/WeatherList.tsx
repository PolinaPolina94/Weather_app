import WeatherItem from './WeatherItem';

function WeatherList() {
  return (
    <div className="max-w-[535px] list">
      <span className="list-title pb-[10px]"> 10-DAY FORECAST </span>
      {/* Use map */}
      <WeatherItem />
      <WeatherItem />
      <WeatherItem />
      <WeatherItem />
      <WeatherItem />
      <WeatherItem />
      <WeatherItem />
      <WeatherItem />
      <WeatherItem />
      <WeatherItem />
      {/* To fix bottom padding */}
    </div>
  );
}
export default WeatherList;
