export interface DailyWeatherData {
    avgTemp: number;
    weatherCodes: number[];
    mostFrequentWeatherCode?: {
        description: string;
        image: string;
    };
  }
  
export interface WeatherData {
    [date: string]: DailyWeatherData;
}

export interface LocationData {
    name: string;
    lat: number;
    lng: number;
}

export interface WeatherResponse {
    latitude: number;
    longitude: number;
    generationtime_ms: number;
    utc_offset_seconds: number;
    timezone: string;
    timezone_abbreviation: string;
    elevation: number;
    current_units: CurrentUnits;
    current: Current;
    hourly_units: HourlyUnits;
    hourly: Hourly;
  }
  export interface CurrentUnits {
    time: string;
    interval: string;
    temperature_2m: string;
  }
  export interface Current {
    time: string;
    interval: number;
    temperature_2m: number;
  }
  export interface HourlyUnits {
    time: string;
    temperature_2m: string;
    weather_code: string;
  }
  export interface Hourly {
    time?: (string)[];
    temperature_2m?: (number)[];
    weather_code?: (number)[];
  }
  
  
  export interface LocationDataResponse {
    results?: (ResultsEntity)[];
    generationtime_ms: number;
  }
  export interface ResultsEntity {
    id: number;
    name: string;
    latitude: number;
    longitude: number;
    elevation: number;
    feature_code: string;
    country_code: string;
    admin1_id: number;
    admin3_id: number;
    admin4_id: number;
    timezone: string;
    population: number;
    postcodes?: (string)[] | null;
    country_id: number;
    country: string;
    admin1: string;
    admin3: string;
    admin4: string;
  }
  

  
  export interface ParsedWeatherDataItem {
    avgTemp: number;
    mostFrequentWeatherCode?: MostFrequentWeatherCode;
    date: string
  }
  export interface MostFrequentWeatherCode {
    description: string;
    image: string;
  }
  

  export type WeatherImage = Record<
  'day' | 'night',
  {
    description: string;
    image: string;
  }
>;

export type WeatherCode =
  | '0'
  | '1'
  | '2'
  | '3'
  | '45'
  | '48'
  | '51'
  | '53'
  | '55'
  | '56'
  | '57'
  | '61'
  | '63'
  | '65'
  | '66'
  | '67'
  | '71'
  | '73'
  | '75'
  | '77'
  | '80'
  | '81'
  | '82'
  | '85'
  | '86'
  | '95'
  | '96'
  | '99';