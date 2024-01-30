import React from "react";
import CountriesList from "../countriesList/CountriesList";
import { Grid } from "@mui/material";

const GridLayout = ({ searchClick, setSearchClick, region }) => {
  return (
    <div>
      <Grid container spacing={3}>
          <CountriesList
            searchClick={searchClick}
            setSearchClick={setSearchClick}
            region={region}
          />
        </Grid>
      
    </div>
  );
};

export default GridLayout;
