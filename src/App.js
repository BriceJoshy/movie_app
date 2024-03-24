import React from "react";
import ReactDOM from "react-dom";
import { useEffect } from "react";

// API KEY - 15efdb82

const API_URL = "http://www.omdbapi.com?apikey=15efdb82";

const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    // after response we need to get the data from it
    const data = await response.json();
    console.log(data.Search);
  };
  useEffect(() => {
    searchMovies("Superman");
  }, []);
  return <h1>Hello world</h1>;
};

export default App;
