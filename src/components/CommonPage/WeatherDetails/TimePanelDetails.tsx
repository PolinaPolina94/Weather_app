import { CurrenData } from '@/types';
import DetailCard from './DetailCard';

type CurrentProps = {
  currentData: CurrenData;
  visibility: number;
  uvIndex: number;
};

function TimePanelDetails({ currentData, visibility, uvIndex }: CurrentProps) {
  return (
    <div className="time-panel-details">
      {/* wihout using map */}
      <DetailCard
        title={'uv index'}
        value={uvIndex.toFixed()}
        description={'middle for the rest of the day.'}
      />
      <DetailCard
        title={'sunrise'}
        value={'08:45 AM'}
        description={'it always will be a sunrise, man'}
      />
      <DetailCard
        title={'wind'}
        value={currentData.windSpeed10m.toFixed() + 'km\\h'}
        description={'a bit windy, I think'}
      />
      <DetailCard
        title={'feels like'}
        value={currentData.apparentTemperature.toFixed() + '°'}
        description={'something about feelings'}
      />
      <DetailCard
        title={'humidity'}
        value={currentData.relativeHumidity2m + '%'}
        description={'so wet'}
      />
      <DetailCard
        title={'visibility'}
        value={(visibility / 1000).toFixed() + 'km'}
        description={'visibility is good'}
      />
    </div>
  );
}

export default TimePanelDetails;
