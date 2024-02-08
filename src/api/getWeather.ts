import { fetchWeatherApi } from 'openmeteo';

export async function getWeather(lat: number, lon: number) {
  const params = {
    latitude: lat,
    longitude: lon,
    current: [
      'temperature_2m',
      'relative_humidity_2m',
      'apparent_temperature',
      'is_day',
      'weather_code',
      'wind_speed_10m',
    ],
    hourly: ['temperature_2m', 'weather_code', 'visibility'],
    daily: ['weather_code', 'temperature_2m_max', 'temperature_2m_min', 'sunrise', 'uv_index_max'],
    timeformat: 'unixtime',
    timezone: 'auto',
    forecast_days: 10,
  };
  const url = 'https://api.open-meteo.com/v1/forecast';

  const responses = await fetchWeatherApi(url, params);
  const range = (start: number, stop: number, step: number) =>
    Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);
  const response = responses[0];
  const utcOffsetSeconds = response.utcOffsetSeconds();

  const current = response.current()!;
  const hourly = response.hourly()!;
  const daily = response.daily()!;

  return {
    current: {
      time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
      temperature2m: current.variables(0)!.value(),
      relativeHumidity2m: current.variables(1)!.value(),
      apparentTemperature: current.variables(2)!.value(),
      isDay: current.variables(3)!.value(),
      weatherCode: current.variables(4)!.value(),
      windSpeed10m: current.variables(5)!.value(),
    },
    hourly: {
      time: range(Number(hourly.time()), Number(hourly.timeEnd()), hourly.interval()).map(
        (t) => new Date((t + utcOffsetSeconds) * 1000)
      ),
      temperature2m: hourly.variables(0)!.valuesArray()!,
      weatherCode: hourly.variables(1)!.valuesArray()!,
      visibility: hourly.variables(2)!.valuesArray()!,
    },
    daily: {
      time: range(Number(daily.time()), Number(daily.timeEnd()), daily.interval()).map(
        (t) => new Date((t + utcOffsetSeconds) * 1000)
      ),
      weatherCode: daily.variables(0)!.valuesArray()!,
      temperature2mMax: daily.variables(1)!.valuesArray()!,
      temperature2mMin: daily.variables(2)!.valuesArray()!,
      sunrise: daily.variables(3)!.valuesArray()!,
      uvIndexMax: daily.variables(4)!.valuesArray()!,
    },
  };
}
