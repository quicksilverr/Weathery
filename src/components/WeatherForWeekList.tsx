import React from 'react';
import {ActivityIndicator, FlatList, View} from 'react-native';
import {WeatherForWeekListItem} from './WeatherForWeekListItem';
import _ from 'lodash';
import {ListEmpty} from './ListEmpty';
import {ErrorView} from './ErrorView';
import {TodaysWeather} from './TodaysWeather';
import {LocationData} from '../helpers/type';
import {URLS, useLazyFetch} from '../api';
import {getCurrentAndWeekWeatherData} from '../helpers/parseWeatherData';

interface WeatherForWeekListProps {
  locationData: LocationData;
}
export const WeatherForWeekList: React.FC<WeatherForWeekListProps> = ({
  locationData,
}) => {
  const [fetchData, {data, error, loading}] = useLazyFetch(
    getCurrentAndWeekWeatherData,
  );

  React.useEffect(() => {
    fetchData(
      `${URLS.baseApi}forecast?latitude=${locationData.lat}&longitude=${locationData.lng}&current=temperature_2m&hourly=temperature_2m,weather_code`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
  }, [locationData]);

  if (error && _.isNil(data)) {
    return <ErrorView errorString={error} />;
  }

  if (loading) {
    return <ActivityIndicator />;
  }
  return (
    <View>
      <TodaysWeather
        locationName={locationData.name}
        weatherAvgTemp={data?.currentDate?.avgTemp ?? 0}
        weatherDescription={
          data?.currentDate.mostFrequentWeatherCode?.description
        }
        weatherImage={data?.currentDate.mostFrequentWeatherCode?.image}
      />
      <FlatList
        data={data?.weekDates}
        ListEmptyComponent={<ListEmpty />}
        horizontal
        renderItem={({item}) => {
          return (
            <WeatherForWeekListItem
              key={JSON.stringify(item)}
              weatherItem={item}
            />
          );
        }}
      />
    </View>
  );
};
