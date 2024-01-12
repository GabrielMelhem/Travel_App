import React, { useEffect, useState } from 'react'

const url = "https://restcountries.com/v3.1/all";

const CountriesList = ({searchClick,setSearchClick,region}) => {
  const [countries,setCountries]=useState([]);
  let response=[];

  const fetchCountriesList = async()=>{
    try {
      response=await fetch(url).then((res)=>{
        return res.json();
      })
      console.log('countriesList', response);
      setCountries(response);
      console.log('countries',countries)
    } catch (error) {
      console.log('error',error)
    }
  }
  useEffect(()=>{
    fetchCountriesList();
  },[searchClick]);

  const handleClick =()=>{
    setSearchClick(!searchClick)
  }

  const countriesList =countries.map((country,index)=>{
    return (<li key={index}>{country.name.common}</li>)
  })

  const filteredCountries=countries.filter((country)=>{
    if (country.region.toLowerCase().includes(region.toLowerCase())) {
      return true;
    } else {
      return false;
    }
  })

  const filteredCountriesList =filteredCountries.map((country,index)=>{
    return (<li key={index}>{country.name.common}</li>)
  })

  return (
    <>
      <div>CountriesList</div>
      <button onClick={handleClick}>search</button>
      {/* {searchClick && countriesList} */}
      {searchClick && filteredCountriesList}
      {console.log('filteredCounties',filteredCountries)}
    </>
    
  )
}

export default CountriesList