import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URI } from "./constants";
import { Country } from "./components/Country/Country";
import { useDebounce } from "./hooks/useDebounce";
import { CountriesList } from "./components/CountriesList/CountriesList";
import { Weather } from "./components/Weather/Weather";

export const CountriesPageDebounceHook = () => {
  const [countryNameSearch, setCountryNameSearch] = useState(null);
  const [countriesList, setCountriesList] = useState(null);
  const [country, setCountry] = useState(null);
  const debouncedCountryName = useDebounce(countryNameSearch);

  function fetchCountries(countryNameSearch) {
    axios
      .get(`${BASE_URI}/name/${countryNameSearch}`)
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

  const handleChange = (e) => {
    e.preventDefault();
    setCountryNameSearch(e.target.value);
  };

  const handleShow = (country) => {
    setCountry(country);
    setCountriesList(null);
  };

  useEffect(() => {
    if (debouncedCountryName) {
      fetchCountries(debouncedCountryName);
    } else {
      setCountry(null);
      setCountriesList(null);
    }
  }, [debouncedCountryName]);

  return (
    <>
      <span>find countries </span>
      <input
        type="search"
        onChange={handleChange}
        value={countryNameSearch ?? ""}
      />
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
