import React from 'react'
import { useParams} from "react-router-dom";
import Weather from '../../components/weather/Weather';

const City = () => {
  const params = useParams();
  const cityName = params.cityName;
  return (
    <>
      <div>City: {cityName}</div>
      <Weather />
    </>
    
  )
}

export default City