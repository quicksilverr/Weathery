import React from 'react';
import {RootStackNavProps} from '../navigation/stack-param-list';
import {ActivityIndicator, StyleSheet, TextInput} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import debounce from 'lodash/debounce';
import _ from 'lodash';
import {URLS, useLazyFetch} from '../api';
import {LocationDataResponse} from '../helpers/type';
import {SearchList} from '../components';

export const SearchScreen: React.FC<RootStackNavProps<'SearchScreen'>> = ({
  navigation,
}) => {
  const [fetchData, {data, error, loading}] =
    useLazyFetch<LocationDataResponse>();

  const onSearch = (query: string) => {
    fetchData(`${URLS.locationApi}?name=${query}&count=${20}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };
  const onQueryDebouce = React.useCallback(debounce(onSearch, 500), []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#121212',
        paddingTop: 10,
        paddingHorizontal: 15,
      }}>
      <TextInput
        placeholder="Search location..."
        placeholderTextColor={'#FFF'}
        onChangeText={onQueryDebouce}
        style={styles.input}
      />
      {loading && _.isEmpty(data?.results) ? (
        <ActivityIndicator testID="loading-indicator" />
      ) : (
        <SearchList
          error={error}
          isLoading={loading}
          navigation={navigation}
          results={data?.results}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#1E1E1E',
    color: '#FFFFFF',
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#37474F',
    marginBottom: 20,
  },
});
