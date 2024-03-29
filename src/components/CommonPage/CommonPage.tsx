import { CurrenData, DailyData, HourlyData } from '@/types';
import WeatherDetails from './WeatherDetails/WeatherDetails';
import WeatherList from './WeatherList/WeatherList';
import cloudBg from '@/assets/cloudsBg.mp4';

type Temperature = {
  currentTemperature: number;
  dailyData: DailyData;
  hourlyData: HourlyData;
  currentData: CurrenData;
};

function CommonPage(props: Temperature) {
  const temperature = props.currentTemperature;
  const minTemperature = props.dailyData.temperature2mMin[0];
  const maxTemperature = props.dailyData.temperature2mMax[0];
  const dailyDataTime = props.dailyData.time;
  const currentData = props.currentData;
  const visibility = props.hourlyData.visibility[0];
  const uvIndex = props.dailyData.uvIndexMax[0];

  const days = dailyDataTime.map((el) => el.toString().split(' ').slice(0, 1).join());
  const hourlyDataTime = props.hourlyData.time.slice(0, 10);
  const hourlyDataTemp = props.hourlyData.temperature2m.slice(0, 10);

  // Show time at the moment
  const currentDate = new Date();
  console.log(currentDate.getHours(), currentDate.getMinutes());

  return (
    <div className="common-page">
      <video src={cloudBg} autoPlay loop muted />
      <div className="absolute">
        <div className="pt-[82px] pb-[38px] flex flex-col">
          <span className="h-[44px] center-city">Minsk</span>
          <span className="h-[122px] center-celsium">{temperature.toFixed()}&deg;</span>
          <span className="h-[29px] center-normal">Partly Cloudy</span>
          <div className="h-[25px] center-diaposone">
            <span>H:{maxTemperature.toFixed()}&deg;</span>
            <span>L:{minTemperature.toFixed()}&deg;</span>
          </div>
        </div>
        <div className="content">
          <WeatherList
            days={days}
            minTemp={props.dailyData.temperature2mMin}
            maxTemp={props.dailyData.temperature2mMax}
          />
          <WeatherDetails
            hourlyDataTime={hourlyDataTime}
            hourlyDataTemp={hourlyDataTemp}
            currentData={currentData}
            visibility={visibility}
            uvIndex={uvIndex}
          />
        </div>
        {/* Add padding-bottom 34px */}
      </div>
    </div>
  );
}

export default CommonPage;
