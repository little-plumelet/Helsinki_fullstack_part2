import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { BASE_URI, DELAY } from "./constants";
import { Country } from "./components/Country/Country";
import { debounce } from "./utils";
import { CountriesList } from "./components/CountriesList/CountriesList";
import { Weather } from "./components/Weather/Weather";

export const CountriesPage = () => {
  const [countryName, setCountryName] = useState(null);
  const [countriesList, setCountriesList] = useState(null);
  const [country, setCountry] = useState(null);

  function fetchCountries(countryName) {
    axios
      .get(`${BASE_URI}/name/${countryName}`)
      .then((response) => {
        if (response.data.length > 1) {
          setCountriesList(response.data);
          setCountry(null);
        } else if (response.data.length === 1) {
          setCountry(response.data[0]);
          setCountriesList(null);
        }
      })
      .catch((err) => {
        alert(err);
        setCountriesList(null);
        setCountry(null);
      });
  }

  // eslint-disable-next-line
  const cashedDebounce = useCallback(debounce(fetchCountries, DELAY), []);

  const handleChange = (e) => {
    e.preventDefault();
    setCountryName(e.target.value);
  };

  const handleShow = (country) => {
    setCountry(country);
    setCountriesList(null);
  };

  useEffect(() => {
    if (countryName) {
      cashedDebounce(countryName);
    } else {
      setCountry(null);
      setCountriesList(null);
    }
  }, [countryName, cashedDebounce]);

  return (
    <>
      <span>find countries </span>
      <input type="search" onChange={handleChange} value={countryName ?? ""} />
      {countriesList && countriesList.length > 10 && (
        <div>{"Too many matches. Specify another filter"}</div>
      )}
      {countriesList && countriesList.length <= 10 && (
        <CountriesList countriesList={countriesList} handleClick={handleShow} />
      )}
      {country && (
        <>
          <Country
            name={country.name.official}
            capital={country.capital}
            languages={country.languages}
            flag={country.flag}
            area={country.area}
          />
          <Weather
            capital={country.capital}
            capitalInfo={country.capitalInfo.latlng}
          />
        </>
      )}
    </>
  );
};
