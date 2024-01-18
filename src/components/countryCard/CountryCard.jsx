import React from "react";
import { useNavigate } from "react-router-dom";

const CountryCard = ({country}) => {
  const navigate =useNavigate();

  const showDetailsHandler = () => {
    navigate(`/country/${country.name.common}`);
  };
  return (
    <div className="country" onClick={showDetailsHandler}>
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
    </div>
  );
};

export default CountryCard;
