import WeatherItem from './WeatherItem';

type Days = {
  days: string[];
  minTemp: Float32Array;
  maxTemp: Float32Array;
};

function WeatherList({ days, minTemp, maxTemp }: Days) {
  return (
    <div className="max-w-[535px] list">
      <span className="list-title pb-[10px]"> 10-DAY FORECAST </span>
      {days.map((day, ind) => (
        // Know about index
        <WeatherItem key={ind} day={day} minTemp={minTemp[ind]} maxTemp={maxTemp[ind]} />
      ))}
      {/* To fix bottom padding */}
    </div>
  );
}
export default WeatherList;
