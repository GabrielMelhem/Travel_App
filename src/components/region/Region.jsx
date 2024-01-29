import React from "react";
import { FormControl, InputLabel,MenuItem } from "@mui/material";
import Select from '@mui/material/Select'; 

const Region = ({ region, setRegion }) => {
  const handleChange = (e) => {
    setRegion(e.target.value);
    console.log("region", region);
  };
  return (
    <>
      {/* <div>Region</div> */}
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Region</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={region}
          onChange={handleChange}
          autoWidth
          label="Region"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={'All'}>All</MenuItem>
          <MenuItem value={'Africa'}>Africa</MenuItem>
          <MenuItem value={'America'}>America</MenuItem>
          <MenuItem value={'Asia'}>Asia</MenuItem>
          <MenuItem value={'Europe'}>Europe</MenuItem>
          <MenuItem value={'Oceania'}>Oceania</MenuItem>
        </Select>
      </FormControl>

      {/* <form>
          <select name="region-select" value={region} onChange={handleChange}>
            <option value="All">All</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </form> */}
    </>
  );
};

export default Region;
