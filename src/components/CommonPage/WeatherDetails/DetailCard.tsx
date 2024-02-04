import image from '../../../assets/Group.svg';

function DetailCard() {
  return (
    <div className="detail-card">
      <div className="flex mt-[15px]">
        {/* change to img */}
        <p className="w-[22px] ml-[20px]">🌒</p>
        {/* UPPERCASE */}
        <span className="detail-title">UV INDEX</span>
      </div>
      <p className="w-[45px] text-6xl ml-[20px]">12</p>
      <p className="w-[45px] text-[27px] ml-[20px]">Middle</p>
      <p>
        {' '}
        <img className="w-[164.9px] mr-[11.54px] ml-[10.87px]" src={image} alt="image" />
      </p>
      <p className="w-[167px] ml-[20px] detail-text">Middle for the rest of the day.</p>
    </div>
  );
}
export default DetailCard;
