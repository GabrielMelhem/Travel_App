import React from 'react'
import { useParams } from 'react-router-dom'

const Country = () => {
  const { countryName } = useParams();
  return (
    <div>{countryName}</div>
  )
}

export default Country