import WeatherItem from './WeatherItem';

type Days = {
  days: string[];
};

function WeatherList({ days }: Days) {
  return (
    <div className="max-w-[535px] list">
      <span className="list-title pb-[10px]"> 10-DAY FORECAST </span>
      {days.map((day, ind) => (
        <WeatherItem key={ind} day={day} />
      ))}
      {/* To fix bottom padding */}
    </div>
  );
}
export default WeatherList;
