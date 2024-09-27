import React from 'react';
import {RootStackNavProps} from '../navigation/stack-param-list';
import {ScrollView, StyleSheet} from 'react-native';
import _ from 'lodash';
import {SafeAreaView} from 'react-native-safe-area-context';
import {HomeHeader, WeatherForWeekList} from '../components';

export const HomeScreen: React.FC<RootStackNavProps<'HomeScreen'>> = ({
  navigation,
  route,
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <HomeHeader
          onPress={() => {
            navigation.navigate('SearchScreen');
          }}
        />

        <WeatherForWeekList
          locationData={{
            lat: route?.params?.locationData?.lat ?? 18.51957,
            lng: route?.params?.locationData?.lng ?? 73.85535,
            name: route?.params?.locationData?.name ?? 'Pune',
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingTop: 10,
    paddingHorizontal: 15,
  },
});
