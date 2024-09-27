import React from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import moment from 'moment';
import {ParsedWeatherDataItem} from '../helpers/type';

interface WeatherForWeekListProps {
  weatherItem: ParsedWeatherDataItem;
}
export const WeatherForWeekListItem: React.FC<WeatherForWeekListProps> = ({
  weatherItem,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.day}>{moment(weatherItem.date).format('dddd')}</Text>
      <Text style={styles.dateFormat}>
        {moment(weatherItem.date).format('Do MMM YYYY')}
      </Text>
      <Image
        source={{
          uri: weatherItem.mostFrequentWeatherCode?.image,
        }}
        borderRadius={16}
        style={styles.image}
      />
      <Text style={styles.description}>
        {weatherItem?.mostFrequentWeatherCode?.description}
      </Text>
      <Text style={styles.avgTemp}>
        {weatherItem.avgTemp}°<Text style={styles.celsius}>C</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1F2933',
    padding: 20,
    borderRadius: 8,
    marginRight: 10,
    borderColor: '#37474F',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  day: {fontSize: 27, color: '#FFF', fontWeight: '800'},
  dateFormat: {
    fontSize: 12,
    color: '#B0BEC5',
    fontWeight: '400',
    marginTop: 12,
  },
  image: {height: 100, width: 100},
  description: {
    fontSize: 17,
    color: '#B0BEC5',
    fontWeight: '400',
    marginBottom: 12,
    marginTop: -12,
  },
  avgTemp: {
    fontSize: 45,
    color: '#FFAB40',
    fontWeight: '900',
    marginTop: -12,
  },
  celsius: {fontSize: 24},
});
