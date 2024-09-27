# 🌩️ Weather Watch

Introducing *Weather Watch*, the app that delivers accurate weather forecasts, ensuring you’re always prepared for the day’s weather with a smile!

This task is designed to evaluate your proficiency in mobile app development, particular with React Native and TypeScript.

Introducing Weather Watch, the app that delivers accurate weather forecasts, ensuring you’re always prepared for the day’s weather with a smile! 

![Screenshot_1727080310](https://github.com/user-attachments/assets/faa479d4-418a-4cd7-a98e-fb1f0339b742)
![Screenshot_1727080336](https://github.com/user-attachments/assets/d2bbcb2e-996c-45c0-84a8-667846f4cfc9)
![Screenshot_1727080399](https://github.com/user-attachments/assets/673763fb-3706-4428-b1f0-630761e39ba8)


Code Details
The folder strucutre of the application is -

screens -> these are where all the containers are, the app screens.
componenets - These contain files, which has various basic or complex building blocks used in the screens
helpers - these are just function, which have complex logic and parsing.
store - we are using redux toolkit for global state management and rtk query as the middleware
navigation - we are using react-navigation for the app navigation, all of it's components reside in this folder.
Running
We are using expo for this application. You'll need to install using this command. The underneath packages, use node version 20.
it's better to use yarn
nvm use 20 && yarn 
then yarn start


## Exercise

Create a mobile application using React Native that encompasses the following:

- Display the location name, current temperature and an image representation of the weather using a location of your choice when the application opens.
- Display a weekly weather forecast for the selected location.
   - Display an average temperature, rounded up.
   - Display an image that best represents the weather for the day.
- Include a search function that allows users to look up weather by a location name.
  - If there are multiple locations returned by the API, give the user an option to select one.
  - When selecting a location, the weather forecast should update.

## Resources

- Use the [Open Meteo API](https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m&hourly=temperature_2m,weather_code) to obtain a weather forecast, changing the latitude and longitude where required. Don’t use any packages related to Open Meteo when interacting with the API.
- Use the [Open Meteo Geocoding API](https://geocoding-api.open-meteo.com/v1/search?name=) to obtain a latitude and longitude for a given location.
- Use the helper function [getWeatherImage](./src/helpers/getWeatherImage.ts) to map between a WMO weather code coming from the Open Meteo API and an image representation of the weather.

> Note: All APIs listed above are free to use without sign up.

## Requirements

- Create a fork of this repository.
- Use React Native and TypeScript.
- Ensure the app works on iOS and Android.
- Showcase your software’s testing capabilities to ensure it meets requirements by testing:
   - One complex component.
   - One helper function.
   - One API request.
- Ensure that the entire application test suite is passing.
   - Please do not remove any tests from the current project.
- Ensure that your solution accounts for edge cases and handles unusual or unexpected scenarios effectively.
- Ensure that your code is passing TypeScript compiler and ESLint checks.
   - These jobs have already been defined in package.json.
- Don’t spend longer than 2 hours on this technical test.
- Don’t focus too much time on the visual aspects of the app, favour simple layouts and basic styling using React Native libraries over using a UI kit.

> Keep in mind that your test submission (app and tests) can be evaluated in different timezones.

## Submission

Submit a link to your forked repository with your application contents. Make sure the link is accessible.

**Happy Coding**
