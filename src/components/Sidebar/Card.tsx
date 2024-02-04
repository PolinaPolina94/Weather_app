function Card() {
  return (
    <div className="card text-white">
      <div className="flex flex-col pt-[25px] pb-[16px] pl-[20px]">
        <span className="location pb-[5px]"> My Location </span>
        <span className="font-normal pb-[59px]"> Minsk </span>
        <span className="font-normal"> Partly Cloudy </span>
      </div>
      <div className="flex flex-col w-[151px] h-[131px] pt-[22px] pb-[22px] pr-[20px]">
        <div className="celsium"> 21 </div>
        <span className="diapasone">H:29° L:15°</span>
      </div>
    </div>
  );
}
export default Card;
