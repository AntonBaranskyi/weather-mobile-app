import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

type Props = {
  title: string;
  onPress: () => void;
  isActive?: boolean;
};

export const MyButton: React.FC<Props> = ({
  title,
  onPress,
  isActive = false,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, isActive && styles.activeButton]}
      onPress={onPress}
    >
      <Text style={[styles.text]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 3,
    paddingHorizontal: 5,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: 'inherit',

    borderColor: 'lightgray',
    borderWidth: 2,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  activeButton: {
    backgroundColor: 'lightgray',
  },
});
