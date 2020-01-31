import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { globalStyles } from '../assets/styles/global';

export default function Shift({ navigation }) {
  const [shift, setShift] = useState(true);
  const user = navigation.getParam('user');

  const pressHandler = () => {
    setShift(!shift);
  };
  return (
    <View style={globalStyles.container}>
      <Text style={styles.shiftText}>Shift Screen</Text>
      <Text style={styles.shiftText}>Hello {user.name}</Text>
      <TouchableOpacity onPress={pressHandler}>
        <Text style={styles.shiftButton}>{shift ? 'Shift' : 'Unshift'}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  shiftButton: {
    backgroundColor: 'skyblue',
    textAlign: 'center',
    padding: 16,
    marginHorizontal: 24,
    fontSize: 20,
    color: 'forestgreen'
  },
  shiftText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 16,
    color: 'coral',
    borderRadius: 10
  }
});
