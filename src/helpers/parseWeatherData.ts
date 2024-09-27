import _ from "lodash";
import getWeatherImage from "./getWeatherImage";
import { ParsedWeatherDataItem, WeatherCode, WeatherData, WeatherResponse } from "./type";
import moment from "moment";

const validWeatherCodes: WeatherCode[] = [
    '0', '1', '2', '3', '45', '48', '51', '53', '55', '56', '57', '61', '63', '65',
    '66', '67', '71', '73', '75', '77', '80', '81', '82', '85', '86', '95', '96', '99',
  ];

  const isWeatherCode = (code: string): code is WeatherCode => {
    return validWeatherCodes.includes(code as WeatherCode);
  };
  

const getWeatherCode = (code: string): WeatherCode => {
    
    if(isWeatherCode(code)){
        return code
    } else {
        return '0'
    }
}
const findMostFrequentWeatherCode = (codes: number[]): string => {
    const frequencyMap: { [key: number]: number } = {};
    let mostFrequentCode = codes[0];
    let maxCount = 0;
  
    codes.forEach((code) => {
      frequencyMap[code] = (frequencyMap[code] || 0) + 1;
      if (frequencyMap[code] > maxCount) {
        mostFrequentCode = code;
        maxCount = frequencyMap[code];
      }
    });
  
    return mostFrequentCode.toString();
  };
  

export const processWeatherData = (hourlyDateStrings: string[],hourlyTemps: number[], hourlyCodes: number[]) => {
  const weatherData: WeatherData = {};
  
  if(!isNilAndEmpty(hourlyDateStrings) && !isNilAndEmpty(hourlyTemps) && !isNilAndEmpty(hourlyCodes)){
    for (let i = 0; i < hourlyTemps.length; i++) {
  
        const dateKey = hourlyDateStrings[i].split("T")[0];
        
        if (!weatherData[dateKey]) {
          weatherData[dateKey] = {
            avgTemp: 0,
            weatherCodes: [],
          };
        }
    
        weatherData[dateKey].avgTemp += hourlyTemps[i];
        weatherData[dateKey].weatherCodes.push(hourlyCodes[i]);
        
      }
    
      Object.keys(weatherData).forEach((date) => {
        const dayData = weatherData[date];
    
        dayData.avgTemp = Math.round(dayData.avgTemp / 24);
        const mostFrequentCode = getWeatherCode(findMostFrequentWeatherCode(dayData.weatherCodes))
        dayData.mostFrequentWeatherCode = getWeatherImage(mostFrequentCode)
      });
  }

  return weatherData;
};

export const getCurrentAndWeekWeatherData = (weatherData: WeatherResponse) => {
    const currentAndWeeklyWeatherData: {
        currentDate: ParsedWeatherDataItem,
        weekDates: ParsedWeatherDataItem[]
    } = {
        currentDate: {
            avgTemp: 0,
            date: moment().format('DD-MM-YYYY'),
            mostFrequentWeatherCode: getWeatherImage('0'),
          },
          weekDates: []
    }

    const processedWeatherData = processWeatherData(weatherData?.hourly?.time, weatherData?.hourly?.temperature_2m, weatherData?.hourly?.weather_code)

  
    if (!_.isEmpty(processedWeatherData) && !_.isNil(processedWeatherData)) {
        const values = Object.entries(processedWeatherData).map(([key, value]) => {
          return {
            date: key,
            avgTemp: value.avgTemp,
            mostFrequentWeatherCode: value?.mostFrequentWeatherCode,
          };
        });
        currentAndWeeklyWeatherData.currentDate = values[0];
        currentAndWeeklyWeatherData.weekDates = [...values]
      }

      return currentAndWeeklyWeatherData
}

export const isNilAndEmpty = (item: any) => {
    return _.isNil(item) && _.isEmpty(item)
}