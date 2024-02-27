import { client } from '../services/fetchClient';
import { IWeatherData } from '../types/weatherData';
import { IWeatherForecast } from '../types/weatherForecast';
import { WeatherParams } from '../types/weatherParams';

export const getWeatherData = ({
  cityName,
  API,
  type,
  location,
}: WeatherParams) => {
  if (cityName) {
    return client.get<IWeatherData>(
      `/weather?q=${cityName}&appid=${API}&units=${type}`
    );
  }

  return client.get<IWeatherData>(
    `/weather?lat=${location.lat}&lon=${location.lon}&appid=${API}&units=${type}`
  );
};

export const getWeatherForecast = ({
  cityName,
  API,
  type,
  location,
}: WeatherParams) => {
  if (cityName) {
    return client.get<IWeatherForecast>(
      `/forecast?q=${cityName}&appid=${API}&units=${type}`
    );
  }

  return client.get<IWeatherForecast>(
    `/forecast?lat=${location.lat}&lon=${location.lon}&appid=${API}&units=${type}`
  );
};
