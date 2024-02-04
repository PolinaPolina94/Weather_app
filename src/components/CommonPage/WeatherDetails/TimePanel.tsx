import TimeWeatherList from './TimeWeatherList/TimeWeatherList';

function TimePanel() {
  return (
    <div className="time-panel">
      <p className="w-[287px] time-panel-description">
        Cloudy conditions from 1AM-9AM, with showers expected at 9AM.
      </p>
      <TimeWeatherList />
    </div>
  );
}

export default TimePanel;
