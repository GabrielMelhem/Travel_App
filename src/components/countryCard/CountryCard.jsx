import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@mui/material";

const CountryCard = ({ country }) => {
  const navigate = useNavigate();

  const showDetailsHandler = () => {
    navigate(`/country/${country.name.common}`);
  };
  return (
    <>
    
      <Card sx={{ maxWidth: 345 }} onClick={showDetailsHandler}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={country.flags.svg}
            alt="Country Flag"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {country.name.common}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Population: {country.population}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Capital: {country.capital}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Region: {country.region}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>


      {/* <div className="country" onClick={showDetailsHandler}>
      <picture>
        <img src={country.flags.svg} alt="Country Flag" />
      </picture>
      <section>
        <h2>{country.name.common}</h2>
        <p>
          <span>Population:</span>
          {country.population}
        </p>
        <p>
          <span>Capital:</span>
          {country.capital}
        </p>
        <p>
          <span>Region:</span>
          {country.region}
        </p>
      </section>
    </div> */}
    </>
  );
};

export default CountryCard;
