import imageMoon from '@/assets/Group.svg';

type Details = {
  title: string;
  value: string | number;
  description: string;
};

function DetailCard({ title, value, description }: Details) {
  return (
    <div className="detail-card">
      <div className="flex flex-col justify-between">
        <div className="flex mt-[15px]">
          <p className="h-[22px] ml-[20px]">🌒</p>
          <span className="detail-title mb-6">{title}</span>
        </div>
        <p className="detail-value ml-[20px] mb-2">{value}</p>
        <p className="ml-[11px]">
          {' '}
          <img src={imageMoon} alt="image" />
        </p>
      </div>
      <p className="ml-[20px] detail-description">{description}</p>
    </div>
  );
}
export default DetailCard;
