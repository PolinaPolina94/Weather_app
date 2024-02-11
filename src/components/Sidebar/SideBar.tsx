import { DailyData } from '@/types';
import Card from './Card';
import Burger from '../Burger/Burger';
import { useState } from 'react';

type Temperature = {
  currentTemperature: number;
  diffTemperature: DailyData;
};

function SideBar(props: Temperature) {
  const temperature = props.currentTemperature;
  const minTemperature = props.diffTemperature.temperature2mMin[0];
  const maxTemperature = props.diffTemperature.temperature2mMax[0];

  const [isShow, setIsShow] = useState(!true);

  function toggleBurger() {
    console.log(isShow);
    setIsShow(!isShow);
  }

  return (
    <>
      <div className="absolute top-10 ml-10 z-10" onClick={toggleBurger}>
        <Burger />
      </div>
      <div className={isShow ? 'sidebar-shown' : 'sidebar'}>
        <div className="search">
          <input type="text" placeholder="Search for a city or airport" />
        </div>
        <div className="flex flex-col gap-[20px]">
          <Card
            temperature={temperature}
            minTemperature={minTemperature}
            maxTemperature={maxTemperature}
          />
          {/* For Kiev */}
          <Card
            temperature={temperature}
            minTemperature={minTemperature}
            maxTemperature={maxTemperature}
          />
        </div>
      </div>
    </>
  );
}

export default SideBar;
