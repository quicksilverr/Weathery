import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

interface TodaysWeatherProps {
  locationName: string;
  weatherImage?: string;
  weatherDescription?: string;
  weatherAvgTemp: number;
}

export const TodaysWeather: React.FC<TodaysWeatherProps> = ({
  locationName,
  weatherImage,
  weatherDescription,
  weatherAvgTemp,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>
        {`Today's weather in ${locationName}`}
      </Text>
      {weatherImage && (
        <Image
          source={{
            uri: weatherImage,
          }}
          borderRadius={16}
          style={styles.image}
        />
      )}
      <Text style={styles.description}>{weatherDescription ?? ''}</Text>
      <Text style={styles.avg}>
        {weatherAvgTemp}°<Text style={styles.celcius}>C</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 45,
    color: '#FFF',
    fontWeight: '900',
    marginBottom: 14,
    textAlign: 'center',
  },
  image: {height: 100, width: 100},
  description: {
    fontSize: 17,
    color: '#B0BEC5',
    fontWeight: '400',
    marginBottom: 12,
    marginTop: -12,
  },
  avg: {
    fontSize: 45,
    color: '#B0BEC5',
    fontWeight: '900',
    marginTop: -12,
  },
  celcius: {fontSize: 24},
});
