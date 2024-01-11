import React, { useState } from 'react'

const Region = ({region, setRegion}) => {
    

    const handleChange=(e)=>{
        setRegion(e.target.value);
        console.log('region',region)
    }
  return (
    <>
    <div>Region</div>
    <form>
        <select value={region} onChange={handleChange}>
            <option value="All">All</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
        </select>
    </form>
    </>
    
  )
}

export default Region