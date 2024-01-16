import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";

const CitiesList = ({countryCode}) => {
    const [cities, setCities] = useState([]);

      ////https://openweathermap.org
  const fetchCities = async () => {
    try {
      const apiKey = `994d2cb34b80e507a087468cf0d50649`;
      const apiEndpoint = `http://api.openweathermap.org/data/2.5/find?country=${countryCode}&appid=${apiKey}`;

      const response = await fetch(apiEndpoint, {
        headers: {
          "Access-Control-Allow-Headers" : "Content-Type",
          "Access-Control-Allow-Origin": "*",
          // mode: `no-cors`,
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PATCH"
        },
      });

      const data = await response.json();
      console.log("citiesList", data);
      setCities(data);
      console.log("cities", cities);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchCities();
  },[countryCode]);

  ////2-https://countrystatecity.in/docs/api/cities-by-country/
  // var headers = new Headers();
  // headers.append("X-CSCAPI-KEY", "T1JBRGQwR0MwYk5xdVkzS0dJMFFsbHBWbERXeXZqV1dPTmRwaTJGcQ==");

  // var requestOptions = {
  //   method: "GET",
  //   headers: headers,
  //   redirect: "follow",
  // };
  
  // const fetchCitiesList = async () => {
    
  //   try {
      
  //     const response= await fetch(
  //       `https://api.countrystatecity.in/v1/countries/${countryCode}/cities`,
  //       requestOptions
  //     )

  //     const result = await response.json();
  //     console.log("citiesList", result);
  //     setCities(result);
  //     console.log("cities", cities);
  //   } catch (error) {
  //     console.log("error", error)
  //   }
  // }
  //  useEffect(() => {
  //     fetchCitiesList();
  //   },[countryCode]);
  

  return (
    <div>
        <h2>List of Cities</h2>
        <ul>
          {cities.map((city,index) => (
            <li key={index}>{city.name}</li>
          ))}
        </ul>
    </div>
  )
}

export default CitiesList