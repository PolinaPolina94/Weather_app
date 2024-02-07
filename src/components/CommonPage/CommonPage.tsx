import WeatherDetails from './WeatherDetails/WeatherDetails';
import WeatherList from './WeatherList/WeatherList';
import cloudBg from '@/assets/cloudsBg.mp4';

function CommonPage() {
  return (
    <div className="common-page">
      <video src={cloudBg} autoPlay loop muted />
      <div className="absolute">
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
        {/* Add padding-bottom 34px */}
      </div>
    </div>
  );
}

export default CommonPage;
