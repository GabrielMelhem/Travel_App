import React, { useEffect, useState } from 'react'
import CountryCard from '../countryCard/CountryCard';
import { Grid } from '@mui/material';

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
  },[region]);

  const handleClick =()=>{
    setSearchClick(!searchClick)
  }

  // const countriesList =countries.map((country,index)=>{
  //   return (<li key={index}>{country.name.common}</li>)
  // })

  const filteredCountries=countries.filter((country)=>{
    if (country.region.toLowerCase().includes(region.toLowerCase())) {
      return true;
    } else {
      return false;
    }
  })

  const filteredCountriesList =filteredCountries.map((country,index)=>{
    return (
      <Grid container spacing={4}>
        <Grid item xs={2} sm={6} md={4} >
        <CountryCard country={country} key={index}/>
        </Grid>
        
      </Grid>
    )
  })

  return (
    <>
      <div>CountriesList</div>
      
      {/* <button onClick={handleClick}>search</button> */}
      {/* {searchClick && countriesList} */}
      {region && filteredCountriesList}
      {console.log('filteredCounties',filteredCountries)}
    </>
    
  )
}

export default CountriesList