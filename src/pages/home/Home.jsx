import React, { useContext, useState } from 'react'
import Region from '../../components/region/Region'
import CountriesList from '../../components/countriesList/CountriesList';
import { AuthContext } from '../../context/AuthContext';

const Home = () => {
  const {user} = useContext(AuthContext);

  const [region,setRegion]=useState('');
  const [searchClick,setSearchClick]=useState(false);
  return (
    <>
      <div>Home</div>
      <h2>Welcome {user ? user.email : "misterious user"} to Travel App</h2>

      <Region region={region} setRegion={setRegion}/>
      <CountriesList searchClick={searchClick} setSearchClick={setSearchClick} region={region}/>
    </>
  )
}

export default Home