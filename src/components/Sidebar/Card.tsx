import cloudBg from '@/assets/cloudsBg.mp4';

export type Temperature = {
  temperature: number;
  minTemperature: number;
  maxTemperature: number;
};

function Card({ temperature, minTemperature, maxTemperature }: Temperature) {
  return (
    <div className="card text-white">
      <video src={cloudBg} autoPlay loop muted className="rounded-[14px]" />
      <div className="absolute flex justify-between top-[25px] left-[20px] right-[20px]">
        <div className="flex flex-col h-full">
          <span className="location pb-[5px]"> My Location </span>
          <span className="font-normal pb-[59px]"> Minsk </span>
          <span className="font-normal"> Partly Cloudy </span>
        </div>
        <div className="flex flex-col w-[151px] h-[131px] pb-[22px]">
          <div className="celsium"> {temperature.toFixed()}&deg; </div>
          <div className="diapasone w-[110px]">
            <span>H:{maxTemperature.toFixed()}&deg;</span>
            <span>L:{minTemperature.toFixed()}&deg;</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;
