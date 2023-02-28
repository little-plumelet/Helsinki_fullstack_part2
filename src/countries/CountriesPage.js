import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URI } from "./constants";

export const CountriesPage = () => {
  const [country, setCountry] = useState(null);
  const [countriesList, setCountriesList] = useState(null);

  const handleChange = (e) => {
    e.preventDefault();
    setCountry(e.target.value);
  };

  useEffect(() => {
    if (country) {
      axios
        .get(`${BASE_URI}/name/${country}`)
        .then((response) => {
          console.log(response.data);
          setCountriesList(response.data);
        })
        .catch((err) => alert(err));
    }
  }, [country]);

  return (
    <>
      {"find countries "}
      <input type="search" onChange={handleChange} value={country ?? ""} />
      {countriesList && countriesList.length > 10 && (
        <div>{"Too many matches. Specify another filter"}</div>
      )}
      {countriesList && countriesList.length <= 10 && (
        <>
          {countriesList.map((country) => (
            <div key={country.cioc}>{country.name.common}</div>
          ))}
        </>
      )}
    </>
  );
};
