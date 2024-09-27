import getWeatherImage from '../getWeatherImage';

test.each([
  {
    description: "Sunny",
    image: "https://openweathermap.org/img/wn/01d@2x.png",
    weatherCode: "0"
  },
  {
    description: "Mainly Sunny",
    image: "https://openweathermap.org/img/wn/01d@2x.png",
    weatherCode: "1"
  },
  {
    description: "Partly Cloudy",
    image: "https://openweathermap.org/img/wn/02d@2x.png",
    weatherCode: "2"
  },
  {
    description: "Cloudy",
    image: "https://openweathermap.org/img/wn/03d@2x.png",
    weatherCode: "3"
  },
  {
    description: "Foggy",
    image: "https://openweathermap.org/img/wn/50d@2x.png",
    weatherCode: "45"
  },
  {
    description: "Rime Fog",
    image: "https://openweathermap.org/img/wn/50d@2x.png",
    weatherCode: "48"
  },
  {
    description: "Light Drizzle",
    image: "https://openweathermap.org/img/wn/09d@2x.png",
    weatherCode: "51"
  },
  {
    description: "Drizzle",
    image: "https://openweathermap.org/img/wn/09d@2x.png",
    weatherCode: "53"
  },
  {
    description: "Heavy Drizzle",
    image: "https://openweathermap.org/img/wn/09d@2x.png",
    weatherCode: "55"
  },
  {
    description: "Light Freezing Drizzle",
    image: "https://openweathermap.org/img/wn/09d@2x.png",
    weatherCode: "56"
  },
  {
    description: "Freezing Drizzle",
    image: "https://openweathermap.org/img/wn/09d@2x.png",
    weatherCode: "57"
  },
  {
    description: "Light Rain",
    image: "https://openweathermap.org/img/wn/10d@2x.png",
    weatherCode: "61"
  },
  {
    description: "Rain",
    image: "https://openweathermap.org/img/wn/10d@2x.png",
    weatherCode: "63"
  },
  {
    description: "Heavy Rain",
    image: "https://openweathermap.org/img/wn/10d@2x.png",
    weatherCode: "65"
  },
  {
    description: "Light Freezing Rain",
    image: "https://openweathermap.org/img/wn/10d@2x.png",
    weatherCode: "66"
  },
  {
    description: "Freezing Rain",
    image: "https://openweathermap.org/img/wn/10d@2x.png",
    weatherCode: "67"
  },
  {
    description: "Light Snow",
    image: "https://openweathermap.org/img/wn/13d@2x.png",
    weatherCode: "71"
  },
  {
    description: "Snow",
    image: "https://openweathermap.org/img/wn/13d@2x.png",
    weatherCode: "73"
  },
  {
    description: "Heavy Snow",
    image: "https://openweathermap.org/img/wn/13d@2x.png",
    weatherCode: "75"
  },
  {
    description: "Snow Grains",
    image: "https://openweathermap.org/img/wn/13d@2x.png",
    weatherCode: "77"
  },
  {
    description: "Light Showers",
    image: "https://openweathermap.org/img/wn/09d@2x.png",
    weatherCode: "80"
  },
  {
    description: "Showers",
    image: "https://openweathermap.org/img/wn/09d@2x.png",
    weatherCode: "81"
  },
  {
    description: "Heavy Showers",
    image: "https://openweathermap.org/img/wn/09d@2x.png",
    weatherCode: "82"
  },
  {
    description: "Light Snow Showers",
    image: "https://openweathermap.org/img/wn/13d@2x.png",
    weatherCode: "85"
  },
  {
    description: "Snow Showers",
    image: "https://openweathermap.org/img/wn/13d@2x.png",
    weatherCode: "86"
  },
  {
    description: "Thunderstorm",
    image: "https://openweathermap.org/img/wn/11d@2x.png",
    weatherCode: "95"
  },
  {
    description: "Light Thunderstorms With Hail",
    image: "https://openweathermap.org/img/wn/11d@2x.png",
    weatherCode: "96"
  },
  {
    description: "Thunderstorm With Hail",
    image: "https://openweathermap.org/img/wn/11d@2x.png",
    weatherCode: "99"
  }
])(
  'should render the correct image for weather code: $weatherCode',
  ({weatherCode, image, description}) => {
    expect(getWeatherImage(weatherCode)).toEqual({image: image, description: description});
  },
);
