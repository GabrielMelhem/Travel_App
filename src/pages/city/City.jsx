import React from 'react'
import { useParams} from "react-router-dom";

const City = () => {
  const params = useParams();
  const cityName = params.cityName;
  return (
    <div>City: {cityName}</div>
  )
}

export default City