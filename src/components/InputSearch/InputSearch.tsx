import { Button, StyleSheet, TextInput, View } from 'react-native';
import React, { useContext, useState } from 'react';
import { MainContext } from '../../context/MainContext';

export const InputSearch = () => {
  const { onHandleChangeCityName } = useContext(MainContext);
  const [inputState, setInputState] = useState('');

  const handleChangeInputState = (term: string) => {
    setInputState(term);
  };

  const handleConfirmCity = () => {
    if (inputState) {
      onHandleChangeCityName(inputState);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholderTextColor='#fff'
        style={styles.input}
        placeholder='Write city'
        value={inputState}
        onChangeText={handleChangeInputState}
      />
      <View style={styles.button}>
        <Button title='Find' onPress={handleConfirmCity} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },

  input: {
    width: '80%',
    borderColor: 'lightgray',

    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 2,

    backgroundColor: 'gray',

    color: '#fff',
  },

  button: {
    width: '20%',
  },
});
