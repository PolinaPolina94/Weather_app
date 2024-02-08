import TimePanel from './TimePanel';
import TimePanelDetails from './TimePanelDetails';

type HourlyData = {
  hourlyDataTime: Date[];
  hourlyDataTemp: Float32Array;
};

function WeatherDetails({ hourlyDataTime, hourlyDataTemp }: HourlyData) {
  const options = {
    hour: 'numeric',
    hour12: true,
  } as const;
  const houres = hourlyDataTime.map((el) => el.toLocaleString('en-US', options));

  return (
    <div className="weather-details">
      <TimePanel houres={houres} hourlyDataTemp={hourlyDataTemp} />
      <TimePanelDetails />
    </div>
  );
}
export default WeatherDetails;
