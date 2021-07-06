import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "./components/Loading";
import Country from "./components/Country";
import Header from "./components/Header";
import { BiSearchAlt } from "react-icons/bi";
const App = () => {
  const [userInput, setUserInput] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
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
  if (loading) return <Loading />;

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
