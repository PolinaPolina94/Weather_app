import { fetchWeatherApi } from 'openmeteo';

export async function getWeather(lat: number, lon: number) {
  const params = {
    latitude: lat,
    longitude: lon,
    current: ['temperature_2m', 'apparent_temperature', 'is_day', 'weather_code'],
    hourly: ['temperature_2m', 'precipitation_probability', 'precipitation', 'weather_code'],
    daily: ['weather_code', 'temperature_2m_max', 'temperature_2m_min'],
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
      apparentTemperature: current.variables(1)!.value(),
      isDay: current.variables(2)!.value(),
      precipitation: current.variables(3)!.value(),
      weatherCode: current.variables(4)!.value(),
      cloudCover: current.variables(5)!.value(),
      windSpeed10m: current.variables(6)!.value(),
    },
    hourly: {
      time: range(Number(hourly.time()), Number(hourly.timeEnd()), hourly.interval()).map(
        (t) => new Date((t + utcOffsetSeconds) * 1000)
      ),
      temperature2m: hourly.variables(0)!.valuesArray()!,
      precipitationProbability: hourly.variables(1)!.valuesArray()!,
      precipitation: hourly.variables(2)!.valuesArray()!,
      weatherCode: hourly.variables(3)!.valuesArray()!,
    },
    daily: {
      time: range(Number(daily.time()), Number(daily.timeEnd()), daily.interval()).map(
        (t) => new Date((t + utcOffsetSeconds) * 1000)
      ),
      weatherCode: daily.variables(0)!.valuesArray()!,
      temperature2mMax: daily.variables(1)!.valuesArray()!,
      temperature2mMin: daily.variables(2)!.valuesArray()!,
      apparentTemperatureMax: daily.variables(3)!.valuesArray()!,
      apparentTemperatureMin: daily.variables(4)!.valuesArray()!,
      sunrise: daily.variables(5)!.valuesArray()!,
      uvIndexMax: daily.variables(6)!.valuesArray()!,
      precipitationSum: daily.variables(7)!.valuesArray()!,
      showersSum: daily.variables(8)!.valuesArray()!,
      windSpeed10mMax: daily.variables(9)!.valuesArray()!,
    },
  };
}
