import { IWeather, MainWeatherData } from './weatherData';

interface ICityData {
  id: number;
  name: string;
  country: string;
}

export interface IWeatherForecastMain {
  dt: number;
  main: MainWeatherData;
  weather: IWeather[];

  clouds: { all: number };
}

export interface IWeatherForecast {
  list: IWeatherForecastMain[];

  city: ICityData;
}
