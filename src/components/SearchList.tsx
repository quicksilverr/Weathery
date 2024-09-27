import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import _ from 'lodash';
import {ListEmpty} from './ListEmpty';
import {ErrorView} from './ErrorView';
import {ResultsEntity} from '../helpers/type';

interface SearchListProps {
  results?: ResultsEntity[];
  isLoading: boolean;
  error: string | null;
  navigation: any;
}
export const SearchList: React.FC<SearchListProps> = ({
  error,
  isLoading,
  results,
  navigation,
}) => {
  const onPress = (item: ResultsEntity) => {
    navigation.navigate({
      name: 'HomeScreen',
      params: {
        locationData: {
          lat: item.latitude,
          lng: item.longitude,
          name: item.name,
        },
      },
    });
  };

  if (error) {
    return <ErrorView errorString={error} />;
  }

  if (isLoading) {
    return <ActivityIndicator />;
  }

  return (
    <FlatList
      data={results}
      ListEmptyComponent={<ListEmpty />}
      renderItem={({index, item}) => {
        return (
          <TouchableOpacity
            key={JSON.stringify(item)}
            onPress={() => {
              onPress(item);
            }}
            style={styles.item}>
            <Text style={styles.name}>{item.name}</Text>
          </TouchableOpacity>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#1F2933',
    padding: 20,
    borderRadius: 8,
    marginRight: 10,
    borderColor: '#37474F',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
  },
  name: {fontSize: 27, color: '#FFF', fontWeight: '800'},
});
