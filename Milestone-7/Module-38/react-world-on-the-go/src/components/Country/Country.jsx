import React from "react";

const Country = ({ country }) => {
  //   console.log(country?.population?.population);
  return (
    <div>
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
    </div>
  );
};

export default Country;
