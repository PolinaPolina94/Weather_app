import TimeWeatherList from './TimeWeatherList/TimeWeatherList';
export type HourlyHour = {
  houres: string[];
  hourlyDataTemp: Float32Array;
};

function TimePanel({ houres, hourlyDataTemp }: HourlyHour) {
  return (
    <div className="time-panel">
      <p className="w-[287px] time-panel-description">
        Cloudy conditions from 1AM-9AM, with showers expected at 9AM.
      </p>
      <TimeWeatherList houres={houres} hourlyDataTemp={hourlyDataTemp} />
    </div>
  );
}

export default TimePanel;
