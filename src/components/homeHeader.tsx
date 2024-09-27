import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
interface HomeHeaderProps {
  onPress: () => void;
}
export const HomeHeader: React.FC<HomeHeaderProps> = ({onPress}) => {
  return (
    <View>
      <Text style={styles.mainText}>Weathery</Text>
      <TouchableOpacity onPress={onPress} style={styles.searchButton}>
        <Text style={{color: '#FFFFFF'}}>Search Location...</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainText: {color: '#90CAF9', fontSize: 35, marginBottom: 10},
  searchButton: {
    backgroundColor: '#1E1E1E',
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#37474F',
    marginBottom: 20,
  },
});
