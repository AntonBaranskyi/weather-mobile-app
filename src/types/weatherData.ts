export interface MainWeatherData {
  temp: number;
  feels_like: number;
  humidity: never;
  pressure: number;
}

interface ISys {
  country: string;
  sunrise: number;
  sunset: number;
}

export interface IWeather {
  description: string;

  id: number;
  main: string;
}

interface IWind {
  speed: number;
}

export interface IWeatherData {
  base: string;
  clouds: { all: number };
  cod: number;
  main: MainWeatherData;
  name: string;
  sys: ISys;
  timezone: number;
  visibility: number;
  weather: IWeather[];
  wind: IWind;
}
