import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface ErrorProps {
  errorString: string;
}
export const ErrorView: React.FC<ErrorProps> = ({errorString}) => {
  return (
    <View>
      <Text style={styles.text}>
        It's not you, it's us. There's seems to be an error on our end.
      </Text>
      <Text style={styles.text}>{errorString}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {fontSize: 14, color: 'white'},
});
