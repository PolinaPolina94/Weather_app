type HourItem = {
  hour: string;
  hourlyDataTemp: number;
};

function TimeWeatherItem({ hour, hourlyDataTemp }: HourItem) {
  return (
    <div className="time-weather-item">
      <p className="time">{hour}</p>
      <p className="w-[28px] h-[28px]">🌛</p>
      <p className="cels w-[31px] h-[26px]">{hourlyDataTemp.toFixed()}&deg;</p>
    </div>
  );
}
export default TimeWeatherItem;
