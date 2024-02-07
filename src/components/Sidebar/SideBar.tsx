import { DailyData } from '@/types';
import Card from './Card';

export type Temperature = {
  currentTemperature: number;
  diffTemperature: DailyData;
};

function SideBar(props: Temperature) {
  const temperature = props.currentTemperature;
  const minTemperature = props.diffTemperature.temperature2mMin[0];
  const maxTemperature = props.diffTemperature.temperature2mMax[0];

  return (
    <div className="sidebar">
      <div className="search">
        <input type="text" placeholder="Search for a city or airport" />
      </div>
      <div className="flex flex-col gap-[20px] w-full">
        <Card
          temperature={temperature}
          minTemperature={minTemperature}
          maxTemperature={maxTemperature}
        />
        {/* For Kiev */}
        {/* <Card /> */}
      </div>
    </div>
  );
}

export default SideBar;
