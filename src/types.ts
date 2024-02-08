export type DailyData = {
  time: Date[];
  weatherCode: Float32Array;
  temperature2mMax: Float32Array;
  temperature2mMin: Float32Array;
  uvIndexMax: Float32Array;
};

export type HourlyData = {
  time: Date[];
  temperature2m: Float32Array;
  precipitation: Float32Array;
  weatherCode: Float32Array;
};

export type WeatherData = {
  current: {
    time: Date;
    temperature2m: number;
    apparentTemperature: number;
    isDay: number;
    weatherCode: number;
  };
  daily: {
    time: Date[];
    weatherCode: Float32Array;
    temperature2mMax: Float32Array;
    temperature2mMin: Float32Array;
    sunrise: Float32Array;
    uvIndexMax: Float32Array;
    precipitationSum: Float32Array;
    showersSum: Float32Array;
  };
  hourly: {
    time: Date[];
    temperature2m: Float32Array;
    precipitation: Float32Array;
    weatherCode: Float32Array;
  };
};
