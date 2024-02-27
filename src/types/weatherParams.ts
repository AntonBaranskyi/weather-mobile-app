import { Temperature } from './temperatureType';

export interface WeatherParams {
  cityName?: string;
  API: string;
  type: Temperature;
  location?: {
    lat: number;
    lon: number;
  };
}
