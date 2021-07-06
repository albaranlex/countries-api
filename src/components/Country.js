import React from "react";

const Country = ({ results, getCountry }) => {
  const lands = results.map((obj, i) => {
    console.log(obj);
    const {
      name,
      flag,
      capital,
      region,
      subregion,
      population,
      languages,
      alpha2code,
      alpha3code,
      callingCodes,
      timezones,
    } = obj;
    return (
      <div className="country-container">
        <div key={i}>
          <div className="country-heading">
            <img src={flag} alt={name} className="flag" />
            <h2>{name}</h2>
          </div>

          <div className="content">
            <ul className="gen-info">
              <li>CAPITAL CITY:</li>
              <li>
                <span>{capital}</span>
              </li>
              <li>REGION:</li>
              <li>
                {" "}
                <span>{region}</span>
              </li>
              <li>SUBREGION:</li>
              <li>
                <span>{subregion}</span>
              </li>
              <li>POPULATION:</li>
              <li>
                {" "}
                <span>{population}</span>
              </li>
              <li>LANGUAGES:</li>
              <li>
                {languages.map((lang) => (
                  <span>{lang.name}</span>
                ))}
              </li>
              <li>ALPHA2CODE </li>
              <li>
                <span>{alpha2code}</span>
              </li>
              <li>ALPHA3CODE:</li>
              <li>
                <span>{alpha3code}</span>
              </li>
              <li>CALLING CODE:</li>
              <li>
                <span>{callingCodes}</span>
              </li>
              <li>TIMEZONES:</li>
              <li>
                <span>{timezones}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  });

  return <React.Fragment>{lands}</React.Fragment>;
};
export default Country;
