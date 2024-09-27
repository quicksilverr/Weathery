import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const ListEmpty = () => {
  return <Text style={styles.text}>Sorry, No results found.</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});
