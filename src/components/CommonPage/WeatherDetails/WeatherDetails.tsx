import { CurrenData } from '@/types';
import TimePanel from './TimePanel';
import TimePanelDetails from './TimePanelDetails';

type HourlyData = {
  hourlyDataTime: Date[];
  hourlyDataTemp: Float32Array;
  currentData: CurrenData;
  visibility: number;
  uvIndex: number;
};

function WeatherDetails({
  hourlyDataTime,
  hourlyDataTemp,
  currentData,
  visibility,
  uvIndex,
}: HourlyData) {
  const options = {
    hour: 'numeric',
    hour12: true,
  } as const;

  const houres = hourlyDataTime.map((el) => el.toLocaleString('en-US', options));

  return (
    <div className="weather-details">
      <TimePanel houres={houres} hourlyDataTemp={hourlyDataTemp} />
      <TimePanelDetails currentData={currentData} visibility={visibility} uvIndex={uvIndex} />
    </div>
  );
}
export default WeatherDetails;
