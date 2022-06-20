import axios from "axios";
import citiesData from "../../constants";
export const GET_WEATHER_BEGIN = "GET_WEATHER_BEGIN";
export const GET_WEATHER_SUCCESS = "GET_BOOKS_SUCCESS";
export const GET_WEATHER_FAILURE = "GET_WEATHER_FAILURE";


export const getWeatherBegin = () => ({
    type: GET_WEATHER_BEGIN
})

export const getWeatherSuccess = (todaysWeather) => ({
    type: GET_WEATHER_SUCCESS,
    payload: {todaysWeather}

})

export const getWeatherFailure = (error) => ({
    type: GET_WEATHER_FAILURE,
    payload: {error}
})

export function getTodaysWeather(){
    return dispatch => {
      dispatch(getWeatherBegin())
      const todaysWeather = new Object();  
      citiesData.map((city)=> {
          const lat = city.latitude;
          const lng = city.longitude;
          const params = 'time, airTemperature, precipitation,windspeed, Humidity, cloudCover,icecover ';
          let apiUrl = `https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}`;
           
          return todaysWeather[city.name] =  axios({
               url : apiUrl,
               method: 'GET',
               header : {
                   Authorization :  `${APIkey}`,
                   Accept: "application/json"
               }
           }).then((response) => {
              console.log(`${city.name}`,response)
              if (response.status == 200) {
                  //Message data
                  let cityWeather = response.data.map((item) => {
                      return {
                          time : item.time,
                          airTemperature: item.airTemperature,
                          precipitation: item.precipitation,
                          windSpeed : item.windSpeed,
                          humidity  : item.humidity,
                          cloudCover: item.cloudCover,
                          iceCover  : item.iceCover,
                      }
                  })
              }else {
                  let cityWeather = () => {
                      return {
                          time : "00.00",
                          airTemperature: "00.00",
                          precipitation: "00.00",
                          windSpeed : "00.00",
                          humidity : "00.00",
                          cloudCover: "00.00",
                          iceCover: "00.00",
                      }
                  }
              }
           }).catch((error) => {
               dispatch(getWeatherFailure(error))
           })
      })
      dispatch(getWeatherSuccess(todaysWeather))
      
    }
}
