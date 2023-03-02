import axios from "axios";
import { useEffect, useState } from "react";

export const Weather = ({ capital, capitalInfo }) => {
  const [weatherData, setWeatherData] = useState(null);
  const api_key = process.env.REACT_APP_WEATHER_API_KEY;
  const [lat, lon] = capitalInfo;

  useEffect(() => {
    if (lat && lon) {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`
        )
        .then((response) => {
          setWeatherData(response?.data);
        })
        .catch((err) =>
          alert(`Error occured during fetching weather data. Error: ${err}!`)
        );
    }
  }, [lat, lon, api_key]);

  return (
    <>
      <h2>Weather in {capital}</h2>
      {weatherData && (
        <table>
          <thead></thead>
          <tbody>
            <tr>
              <td>temperature </td>
              <td>{weatherData?.main?.temp} Celcius</td>
            </tr>
            <tr>
              <td>
                <img
                  src={`http://openweathermap.org/img/wn/${weatherData?.weather[0]?.icon}@2x.png`}
                  alt="weather icon"
                />
              </td>
            </tr>
            <tr>
              <td>wind </td>
              <td>{weatherData?.wind?.speed} m/s</td>
            </tr>
          </tbody>
        </table>
      )}
    </>
  );
};
