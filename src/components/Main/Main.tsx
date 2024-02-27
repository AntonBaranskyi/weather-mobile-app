import {
  View,
  ActivityIndicator,
  ImageBackground,
  FlatList,
} from 'react-native';
import React, { useContext, useEffect } from 'react';
import { Weather } from '../WeatherMain';
import { MainContext } from '../../context/MainContext';
import { Header } from '../Header';
import { BACKGROUND } from '../../contsants/bgImage';

import { StyleSheet } from 'react-native';
import { InputSearch } from '../InputSearch';
import { ForecastItem } from '../ForecastItem';


export const Main = () => {
  const { weatherLoading, forecastLoading, weather, weatherForecast } =
    useContext(MainContext);

  if (weatherLoading || forecastLoading || !weather) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size={48} />
      </View>
    );
  }

  return (
    <ImageBackground
      style={{ height: '100%', flex: 1 }}
      resizeMode='cover'
      source={{
        uri: BACKGROUND,
      }}
    >

      <View
        style={{
          ...StyleSheet.absoluteFillObject,
          backgroundColor: 'rgba(0,0,0,0.1)',
          justifyContent: 'center',
        }}
      >
        <View
          style={{
            flexGrow: 1,
          }}
        >
          <Header />
          <InputSearch />
          <Weather />
        </View>

        <FlatList
          data={weatherForecast.list}
          style={{
            flexGrow: 0,
            height: 150,
            marginBottom: 20,
          }}
          contentContainerStyle={{
            gap: 10,
            paddingHorizontal: 10,
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <ForecastItem forecastItem={item} />}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
