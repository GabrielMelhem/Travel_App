import React from "react";
import { useState, useEffect } from "react";

const CitiesList = ({ countryCode, countryName }) => {
  // const [citiesList, setCitiesList] = useState([]);
  const [responseData, setResponseData] = useState([]);
  console.log("country Code", countryCode);
  console.log("country Name", countryName);

  const url = "https://countriesnow.space/api/v0.1/countries";

  const fetchCitiesList = async () => {
    try {
      const fetchData = await fetch(url);
      const response = await fetchData.json();
      console.log("response", response);
      setResponseData(response.data);
      console.log("responseData", responseData);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchCitiesList();
  }, [countryName]);

  const filterdResponseData = responseData.filter((res) => {
    if (countryCode.toLowerCase().includes(res.iso2.toLowerCase())) {
      return true;
    } else {
      return false;
    }
  });
  console.log("filterdResponseData", filterdResponseData);

  const listOfCities = () => {
    if (filterdResponseData[0]) {
      return (
        <div>
          {filterdResponseData[0].cities.map((city, index) => {
            return <li key={index}>{city}</li>;
          })}
        </div>
      );
    } else {
      return (
        <div>
          <p>No cities to display</p>
        </div>
      );
    }
  };

  //------------------------
  // const [citiesData, setCitiesData] = useState({
  //   data: []
  // });
  // const url = "https://countriesnow.space/api/v0.1/countries/population/cities";

  // const fetchCitiesList = async () => {
  //   try {
  //     const fetchData = await fetch(url);
  //     const res = await fetchData.json();
  //     console.log("res", res);
  //     setCitiesData({
  //       ...citiesData,
  //       data: res.data,
  //     });
  //     console.log("citiesData", citiesData);
  //   } catch (error) {
  //     console.log("error", error);
  //   }
  // };
  // useEffect(() => {
  //   fetchCitiesList();
  // }, [countryName]);

  // let cities = [];
  // cities = citiesData.data;
  // console.log("cities", cities);

  // const filteredCities = cities.filter((city) => {
  //   if (countryName.toLowerCase().includes(city.country.toLowerCase())) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // });
  // console.log('filteredCities',filteredCities)

  // const filteredCitiesList = filteredCities.map((filteredCity, index) => {
  //   return <li key={index}> {filteredCity.city}</li>;
  // });

  return (
    <div>
      <h2>List of Cities</h2>
      {listOfCities()}
    </div>
  );
};

export default CitiesList;
