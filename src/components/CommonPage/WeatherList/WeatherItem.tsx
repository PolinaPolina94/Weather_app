import image from '@/assets/Group.svg';

function WeatherItem({ day }: { day: string }) {
  return (
    <div className="weather-item w-[503px] h-[55px]">
      <div className="flex">
        <p className="w-[70.915px]">{day}</p>
        {/* change to img */}
        <p className="w-[31px]">🌞</p>
      </div>
      <div className="flex">
        <p className="w-[32px]">18</p>
        <img className="w-[164.9px] mr-[11.54px] ml-[10.87px]" src={image} alt="image" />
        <p className="w-[54px]">20</p>
      </div>
    </div>
  );
}
export default WeatherItem;
