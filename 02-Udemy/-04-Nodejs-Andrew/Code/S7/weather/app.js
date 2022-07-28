const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const address = process.argv[2];

if (!address) {
  console.log("Please provide an address");
} else {
  geocode(address, (error, { latitude, longitude, location }) => {
    if (error) {
      return console.log(error);
    }

    forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
        return console.log(error);
      }

      console.log(location);
      console.log(forecastData);
    });
  });
}

// console.log('starting');

// setTimeout(()=>{
//     console.log('2 second timer');
// },2000)
// setTimeout(()=>{
//     console.log('0 second timer');
// },0)
// console.log('stopping');

// request({ url: url, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to weather service!')
//     } else if (response.body.error) {
//         console.log('Unable to find location')
//     } else {
//         console.log(response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degress out. There is a ' + response.body.currently.precipProbability + '% chance of rain.')
//     }
// })

// const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/" +
// address +
// ".json?access_token=pk.eyJ1IjoiZWxnZW5pdXMiLCJhIjoiY2w1ejlhcG1qMGxseTNicDJ0cTRhdTlldSJ9.uJpVChQ4h2ngrVnHro3ypQ&limit=1'

// request({ url: geocodeURL, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to location services!')
//     } else if (response.body.features.length === 0) {
//         console.log('Unable to find location. Try another search.')
//     } else {
//         const latitude = response.body.features[0].center[0]
//         const longitude = response.body.features[0].center[1]
//         console.log(latitude, longitude)
//     }
// })

// geocode('Boston', (error, data) => {
//     console.log('Error', error)
//     console.log('Data', data)
// })
