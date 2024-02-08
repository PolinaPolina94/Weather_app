import { HourlyHour } from '../TimePanel';
import TimeWeatherItem from './TimeWeaherItem';

function TimeWeatherList({ houres, hourlyDataTemp }: HourlyHour) {
  return (
    <div className="time-weather-list">
      {houres.map((hour, ind) => (
        // Know about index
        <TimeWeatherItem key={ind} hour={hour} hourlyDataTemp={hourlyDataTemp[ind]} />
      ))}
    </div>
  );
}
export default TimeWeatherList;
