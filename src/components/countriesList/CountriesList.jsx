import React, { useEffect, useState } from "react";
import CountryCard from "../countryCard/CountryCard";
import "./countiesList.css";

const url = "https://restcountries.com/v3.1/all";

const CountriesList = ({ searchClick, setSearchClick, region }) => {
  const [countries, setCountries] = useState([]);
  let response = [];

  const fetchCountriesList = async () => {
    try {
      response = await fetch(url).then((res) => {
        return res.json();
      });
      console.log("countriesList", response);
      setCountries(response);
      console.log("countries", countries);
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    fetchCountriesList();
  }, [region]);

  const handleClick = () => {
    setSearchClick(!searchClick);
  };

  const allCountriesList = countries.map((country, index) => {
    return <CountryCard key={index} country={country} />;
  });

  const filteredCountries = countries.filter((country) => {
    if (country.region.toLowerCase().includes(region.toLowerCase())) {
      return true;
    } else {
      return false;
    }
  });
  const filteredCountriesList = filteredCountries.map((country, index) => {
    return <CountryCard key={index} country={country} />;
  });

  return (
    <>
      {region.toLowerCase() === "all"
        ? allCountriesList
        : filteredCountriesList}

      {console.log("filteredCounties", filteredCountries)}
      {console.log("allCountiesList", allCountriesList)}
    </>
  );
};

export default CountriesList;
