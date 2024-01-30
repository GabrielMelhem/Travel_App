import React, { useContext, useState } from "react";
import Region from "../../components/region/Region";
import CountriesList from "../../components/countriesList/CountriesList";
import { AuthContext } from "../../context/AuthContext";
import GridLayout from "../../components/gridLayout/GridLayout";

const Home = () => {
  const { user } = useContext(AuthContext);

  const [region, setRegion] = useState("");
  const [searchClick, setSearchClick] = useState(false);
  return (
    <>
      <div>Home</div>
      <h2>Welcome {user ? user.email : "misterious user"} to Travel App</h2>

      <Region region={region} setRegion={setRegion} />
      {region ? (
        <GridLayout
          searchClick={searchClick}
          setSearchClick={setSearchClick}
          region={region}
        />
      ) : (
        <p>Select Region Please</p>
      )}
    </>
  );
};

export default Home;
