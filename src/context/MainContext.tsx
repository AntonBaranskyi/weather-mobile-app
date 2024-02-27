import React, { createContext, useEffect, useState } from 'react';
import { getWeatherData, getWeatherForecast } from '../api/weather';
import { API_KEY } from '../contsants/API';
import { Temperature } from '../types/temperatureType';
import { IWeatherData } from '../types/weatherData';

import * as Location from 'expo-location';
import { IWeatherForecast } from '../types/weatherForecast';

import Toast from 'react-native-toast-message';

interface ContextState {
  weather: IWeatherData | null;
  weatherLoading: boolean;
  forecastLoading: boolean;
  weatherForecast: IWeatherForecast | null;
  toggleTemperatureType: (term: Temperature) => void;
  temperatureType: Temperature;
  cityName: string;
  onHandleChangeCityName: (term: string) => void;
  weatherError: boolean;
}

export const MainContext = createContext<ContextState>({
  weather: null,
  weatherLoading: false,
  forecastLoading: false,
  weatherForecast: null,
  toggleTemperatureType: () => {},
  temperatureType: Temperature.METRIC,
  cityName: '',
  onHandleChangeCityName: () => {},
  weatherError: false,
});

type Props = {
  children: React.ReactNode;
};

export const MainProvider: React.FC<Props> = ({ children }) => {
  const [weather, setWeather] = useState<IWeatherData | null>(null);
  const [weatherError, setWeatherError] = useState(false);
  const [weatherForecast, setWeatherForecast] =
    useState<IWeatherForecast | null>(null);
  const [weatherLoading, setWeatherLoading] = useState(false);
  const [forecastLoading, setForecastLoading] = useState(false);
  const [location, setLocation] = useState<Location.LocationObject>(null);
  const [cityName, setCityName] = useState('');
  const [temperatureType, setTemperatureType] = useState(Temperature.METRIC);

  useEffect(() => {
    if (weatherError) {
      console.log('efect error');

      Toast.show({
        type: 'error',
        text1: 'Something goes wrong',
        text2: 'Check if the searched city exist',
      });
    }
  }, [weatherError]);

  const onGetLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      console.log('Error');

      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    console.log(location);

    setLocation(location);
  };

  const onGetForecastData = () => {
    setForecastLoading(true);
    setWeatherError(false);

    getWeatherForecast({
      cityName,
      API: API_KEY,
      type: temperatureType,
      location: {
        lat: location?.coords?.latitude,
        lon: location?.coords?.longitude,
      },
    })
      .then(setWeatherForecast)
      .catch(() => {
        setWeatherError(true);
        setCityName('');
      })
      .finally(() => {
        setForecastLoading(false);
      });
  };

  const onGetWeatherData = () => {
    setWeatherError(false);
    setWeatherLoading(true);

    getWeatherData({
      cityName: cityName,
      API: API_KEY,
      type: temperatureType,
      location: {
        lat: location?.coords?.latitude,
        lon: location?.coords?.longitude,
      },
    })
      .then(setWeather)
      .catch(() => {
        setWeatherError(true);
        setCityName('');
      })
      .finally(() => {
        setWeatherLoading(false);
      });
  };

  useEffect(() => {
    onGetLocation();
  }, []);

  useEffect(() => {
    if (location || cityName) {
      onGetWeatherData();
      onGetForecastData();
    }
  }, [location, cityName, temperatureType]);

  const onHandleChangeCityName = (term: string) => {
    console.log(term);

    setCityName(term);
  };

  const toggleTemperatureType = (term: Temperature) => {
    setTemperatureType(term);
  };

  const value = {
    weather,
    weatherLoading,
    forecastLoading,
    weatherForecast,
    toggleTemperatureType,
    temperatureType,
    cityName,
    onHandleChangeCityName,
    weatherError,
  };

  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
};
