import React, { useState } from "react";
import "./Country.css";

const Country = ({ country }) => {
  const [visited, setVisited] = useState(false);

  const [count, setCountVisited] = useState(0);

  //   console.log(country.area.area);

  const handleVisited = () => {
    // console.log("btn clicked");

    // ----- 1st way -----
    // if (visited) {
    //   setVisited(false);
    // } else {
    //   setVisited(true);
    // }

    // ----- 2nd way -------
    // setVisited(visited ? false : true);

    // -------- 3rd way ------
    setVisited(!visited);

    setCountVisited(visited ? "count+1" : "count-1");
  };

  return (
    <div className={`country`}>
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <h3>Name: {country.name.common}</h3>
      <p>
        <strong>Population:</strong> {country.population.population}
      </p>
      <p>
        <strong>Capital:</strong> {country.capital.capital}
      </p>
      <p>
        <strong>Region: </strong>
        {country.region.region}
      </p>
      <p>
        <strong>Continents: </strong>
        {country.continents.continents}
      </p>
      <p>
        <strong>Area: </strong>
        {country.area.area}{" "}
        {country.area.area > 30000 ? "Big Country" : "Small Country"}
      </p>

      <button
        className={`${visited ? "country-visited" : "country-not-visited"}`}
        onClick={handleVisited}
      >
        {visited ? "Visited" : "Not Visited"}
      </button>
    </div>
  );
};

export default Country;

/**
 *
 * 1. inline css (style object)
 *
 */
