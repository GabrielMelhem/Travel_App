import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import CitiesList from "../../components/citiesList/CitiesList";


const Country = () => {
  const params = useParams();
  const countryName = params.countryName;
  const [countryData, setCountryData] = useState({
    name: "",
    official: "",
    flagImg: "",
    population: 0,
    region: "",
    subregion: "",
    capital: "",
    currencies: {},
    languages: [],
    borders: [],
    code: "",
  });
  
  const url = "https://restcountries.com/v3.1/name/";

  const fetchCountyData = async () => {
    try {
      const fetchData = await fetch(`${url}${countryName}`);
      const res = await fetchData.json();
      console.log("countryData", res);
      setCountryData({
        ...countryData,
        name: res[0].name.common,
        official: res[0].name.official,
        flagImg: res[0].flags.png,
        population: res[0].population,
        region: res[0].region,
        subregion: res[0].subregion,
        capital: res[0].capital,
        currencies: res[0].currencies,
        languages: res[0].languages,
        borders: res[0].borders,
        code: res[0].cca2,
      });
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchCountyData();
  }, [countryName]);

  const  countryCode = countryData.code;
  console.log("countryCode", countryCode);

  let languages;
  languages = Object.values(countryData.languages);

  let borders = [];
  borders = countryData.borders;

  let currencies;
  currencies = Object.values(countryData.currencies);


  return (
    <div>
      <div>
        <img src={countryData.flagImg} alt="Country Flag" />
      </div>
      <div>
        <h2>{countryName}</h2>
      </div>
      <div>
        <section>
          <p>
            Official Name: <span>{countryData.official}</span>
          </p>
          <p>
            Population: <span>{countryData.population}</span>
          </p>
          <p>
            Region: <span>{countryData.region}</span>
          </p>
          <p>
            Sub Region: <span>{countryData.subregion}</span>
          </p>
          <p>
            Capital: <span>{countryData.capital}</span>
          </p>
        </section>
        <section>
          <p>
            Currencies:{" "}
            <span>
              {currencies?.map(
                (currency, index) =>
                  currency.name +
                  `${index === currencies.length - 1 ? "" : " , "} `
              )}
            </span>
          </p>
          <p>
            Languages:{" "}
            <span>
              {languages?.map(
                (language, index) =>
                  language + `${index === languages.length - 1 ? "" : " , "} `
              )}
            </span>
          </p>
        </section>
      </div>
      <div>
        <p>
          Borders:
          {borders !== undefined &&
            countryData.borders.map((border, index) => (
              border + `${index === languages.length - 1 ? "" : " , "} `
            ))}
        </p>
      </div>
      <div>
        <CitiesList countryCode={countryCode} countryName={countryName}/>
      </div>
    </div>
  );
};

export default Country;
