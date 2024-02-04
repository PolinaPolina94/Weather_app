import WeatherDetails from './WeatherDetails/WeatherDetails';
import WeatherList from './WeatherList/WeatherList';

function CommonPage() {
  return (
    <div className="common-page bg-blue-400">
      <div className="pt-[82px] pb-[38px] flex flex-col">
        <span className="h-[44px] center-city">Minsk</span>
        <span className="h-[122px] center-celsium">21</span>
        <span className="h-[29px] center-normal">Partly Cloudy</span>
        <span className="h-[25px] center-diaposone">H:29° L:15°</span>
      </div>
      <div className="content">
        <WeatherList />
        <WeatherDetails />
      </div>
    </div>
  );
}

export default CommonPage;
