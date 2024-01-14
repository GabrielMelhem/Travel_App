import React from "react";

const CountryCard = ({country
//   flag,
//   name,
//   population,
//   capital,
//   region,
//   code,
//   showDetails,
}) => {
  const showDetailsHandler = () => {
    //showDetails(code);
    console.log('country details')
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
