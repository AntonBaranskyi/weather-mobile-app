import { StyleSheet, Text, View } from 'react-native';
import React, { useContext } from 'react';
import { MainContext } from '../../context/MainContext';
import { Temperature } from '../../types/temperatureType';
import { MyButton } from '../MyButton';

export const Header = () => {
  const { toggleTemperatureType, temperatureType } = useContext(MainContext);

  const onHandkePressC = () => {
    toggleTemperatureType(Temperature.METRIC);
  };

  const onHandlePressF = () => {
    toggleTemperatureType(Temperature.STANDART);
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoWrapper}>
        <Text style={styles.logoText}>Weather app</Text>
      </View>

      <View style={styles.buttonsWrapper}>
        <MyButton
          title='℃'
          onPress={onHandkePressC}
          isActive={temperatureType === Temperature.METRIC}
        />
        <MyButton
          title='℉'
          onPress={onHandlePressF}
          isActive={temperatureType === Temperature.STANDART}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },

  logoWrapper: {
    flexGrow: 1,
  },

  logoText: {
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',

    color: '#fff',
  },

  temperatureTypeText: {
    color: '#fff',

    fontSize: 16,
  },

  buttonsWrapper: {
    flexDirection: 'row',
    gap: 5,
  },

  button: {
    backgroundColor: 'green',
  },
});
