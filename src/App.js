import React from "react";
import { useEffect, useState } from "react";

// API KEY - 15efdb82
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";

const API_URL = "http://www.omdbapi.com?apikey=15efdb82";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setsearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    // after response we need to get the data from it
    const data = await response.json();
    setMovies(data.Search);
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
          value={searchTerm}
          onChange={(e) => setsearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="Search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No Movies Found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
