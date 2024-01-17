import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const CitiesList = ({ countryCode, countryName }) => {
  const [citiesData, setCitiesData] = useState({
    data: [],
  });
  console.log("country Code", countryCode);
  console.log("country Name", countryName);

  const url = "https://countriesnow.space/api/v0.1/countries/population/cities";

  const fetchCitiesList = async () => {
    try {
      const fetchData = await fetch(url);
      const res = await fetchData.json();
      console.log("res", res);
      setCitiesData({
        ...citiesData,
        data: res.data,
      });
      console.log("citiesData", citiesData);
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    fetchCitiesList();
  }, [countryName]);

  let cities = [];
  cities = citiesData.data;
  console.log("cities", cities);

  const filteredCities = cities.filter((city) => {
    if (city.country.toLowerCase().includes(countryName.toLowerCase())) {
      return true;
    } else {
      return false;
    }
  });
  console.log('filteredCities',filteredCities)

  const filteredCitiesList = filteredCities.map((filteredCity, index) => {
    return <li key={index}> {filteredCity.city}</li>;
  });

  return (
    <div>
      <h2>List of Cities</h2>
      {filteredCitiesList}
    </div>
  );
};

export default CitiesList;
