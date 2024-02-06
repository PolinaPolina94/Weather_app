export type Temperature = {
  temperature: number;
  minTemperature: number;
  maxTemperature: number;
};

function Card({ temperature, minTemperature, maxTemperature }: Temperature) {
  return (
    <div className="card text-white">
      <div className="flex flex-col pt-[25px] pb-[16px] pl-[20px]">
        <span className="location pb-[5px]"> My Location </span>
        <span className="font-normal pb-[59px]"> Minsk </span>
        <span className="font-normal"> Partly Cloudy </span>
      </div>
      <div className="flex flex-col w-[151px] h-[131px] pt-[22px] pb-[22px] mr-[20px]">
        <div className="celsium"> {temperature.toFixed()}&deg; </div>
        <div className="diapasone w-[110px]">
          <span>H:{maxTemperature.toFixed()}&deg;</span>
          <span>L:{minTemperature.toFixed()}&deg;</span>
        </div>
      </div>
    </div>
  );
}
export default Card;
