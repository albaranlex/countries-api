import React, { useState, useEffect } from "react";
import axios from "axios";
import Country from "./components/Country";
import Header from "./components/Header";
import { BiSearchAlt } from "react-icons/bi";
import DotLoader from "react-spinners/DotLoader";

const App = () => {
  const [userInput, setUserInput] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const getCountry = (status, countryName) => {
    let textToUrl = encodeURIComponent(countryName);
    let endPoint = `https://restcountries.eu/rest/v2/${status}/${textToUrl}`;

    // fetch(endPoint)
    // .then((res)=> res.json())
    // .then((data)=>setResults(data))

    axios(endPoint)
      .then(({ data }) => setResults(data))
      .catch((err) => console.log(`You had an ${err}`));
  };
  function changeHandle(e) {
    setUserInput(e.target.value);
  }
  function submitHandle(e) {
    e.preventDefault();
    getCountry("name", userInput);
    setUserInput("");
  }

  if (loading)
    return (
      <div className="loading">
        <DotLoader size={30} color={"#00e5ff"} loading={loading} />;
      </div>
    );

  return (
    <div>
      <Header />
      <div className="app">
        <div className="form-container">
          <form onSubmit={submitHandle}>
            <input
              type="text"
              value={userInput}
              onChange={changeHandle}
              placeholder="Write a country name"
            />
            <button type="submit">
              <BiSearchAlt />
            </button>
          </form>
        </div>
        <div className="results-container">
          <Country results={results} getCountry={getCountry} />
        </div>
      </div>
    </div>
  );
};

export default App;
