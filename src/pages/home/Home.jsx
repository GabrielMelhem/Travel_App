import React, { useState } from 'react'
import Region from '../../components/region/Region'
import CountriesList from '../../components/countriesList/CountriesList';

const Home = () => {
  const [region,setRegion]=useState('');
  const [searchClick,setSearchClick]=useState(false);
  return (
    <>
      <div>Home</div>
      <Region region={region} setRegion={setRegion}/>
      <CountriesList searchClick={searchClick} setSearchClick={setSearchClick} />
    </>
  )
}

export default Home