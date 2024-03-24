import React from "react";
import ReactDOM from "react-dom";
import { useEffect } from "react";

// API KEY - 15efdb82
import "./App.css";
import SearchIcon from "./search.svg";

const API_URL = "http://www.omdbapi.com?apikey=15efdb82";

const movie1 = {
  Title: "Superman/Batman: Apocalypse",
  Year: "2010",
  imdbID: "tt1673430",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BMjk3ODhmNjgtZjllOC00ZWZjLTkwYzQtNzc1Y2ZhMjY2ODE0XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
};

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
  return (
    <div className="app">
      <h1>Movie Land</h1>
      <div className="search">
        <input
          placeholder="Search for Movies"
          value="Superman"
          onChange={() => {}}
        />
        <img src={SearchIcon} alt="Search" onClick={() => {}} />
      </div>
      <div className="container">
        <div className="movie">
          <div>
            <p>{movie1.Year}</p>
          </div>
          <div>
            <img
              src={
                movie1.Poster !== "N/A"
                  ? movie1.Poster
                  : "https://via.placeholder.com/400"
              }
              alt={movie1.Title}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
