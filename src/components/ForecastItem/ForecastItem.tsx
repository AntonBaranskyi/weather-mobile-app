import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { IWeatherForecastMain } from '../../types/weatherForecast';

import { BlurView } from 'expo-blur';
import dayjs from 'dayjs';

type Props = {
  forecastItem: IWeatherForecastMain;
};

export const ForecastItem: React.FC<Props> = ({ forecastItem }) => {
  return (
    <BlurView intensity={30} style={styles.container}>
      <Text style={styles.temp}>{Math.round(forecastItem.main.temp)}°</Text>
      <Text style={styles.date}>
        {dayjs(forecastItem.dt * 1000).format('ddd ha')}
      </Text>
    </BlurView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    aspectRatio: 3 / 4,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    borderColor: 'white',
    borderWidth: StyleSheet.hairlineWidth,
  },
  temp: {
    fontSize: 35,
    color: 'white',
    marginVertical: 10,
  },
  date: {
    color: 'ghostwhite',
    fontSize: 16,
  },
});
