import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { LocationData } from '../helpers/type';


export type RootStackParamList = {
    HomeScreen: {
      locationData: LocationData
    };
    SearchScreen: undefined;
  };

export type RootStackNavProps<T extends keyof RootStackParamList> = {
    navigation: NativeStackNavigationProp<RootStackParamList, T>;
    route: RouteProp<RootStackParamList, T>;
};
  