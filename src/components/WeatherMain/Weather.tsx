import { View, Text, StyleSheet, Image } from 'react-native';
import React, { useContext, useMemo } from 'react';
import { MainContext } from '../../context/MainContext';
import { Temperature } from '../../types/temperatureType';

export const Weather = () => {
  const { weather, temperatureType } = useContext(MainContext);

  const weatherType = weather.weather[0].main;

  const imagePicker = useMemo(() => {
    switch (weatherType) {
      case 'Clouds':
        return <Image source={require('../../../assets/cloud.png')} />;
      case 'Clear':
        return <Image source={require('../../../assets/sunny.png')} />;
      case 'Rain':
        return <Image source={require('../../../assets/rain.png')} />;
      default:
        return <Image source={require('../../../assets/sunny.png')} />;
    }
  }, [weatherType]);

  return (
    <View style={styles.container}>
      <Text style={styles.cityText}>{weather.name}</Text>
      {imagePicker}

      <Text style={styles.cityTemp}>
        {Math.floor(weather.main.temp)}
        {temperatureType === Temperature.METRIC ? '℃' : '℉'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  cityText: {
    fontSize: 46,
    color: '#fff',
  },

  cityTemp: {
    fontSize: 64,
    color: '#fff',
  },
});
