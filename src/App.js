import React, { useState, useEffect } from "react";
import Nav from "./Components/Nav";
import Movie from "./Components/Movie";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("cars");
  const [baseUrl, setBaseUrl] = useState("");

  const API_KEY = "c8d1999078061642012cc417e5f95ad9";

  useEffect(() => {
    getMovies();
  }, [query]);

  const getMovies = async () => {
    const getMovies = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
    );
    const getConfig = await fetch(
      `https://api.themoviedb.org/3/configuration?api_key=${API_KEY}`
    );
    const data = await getMovies.json();
    const configData = await getConfig.json();
    console.log();
    const image_base_url =
      configData.images.base_url + configData.images.poster_sizes[3] + "/";
    console.log(data);
    setMovies(data.results);
    setBaseUrl(image_base_url);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const updateQuery = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <Nav />
      <form onSubmit={updateQuery} className="search-form">
        <input
          type="text"
          value={search}
          onChange={updateSearch}
          className="search-bar"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="movie-card">
        {movies.map((movie) => (
          <Movie
            key={movie.id}
            title={movie.original_title}
            image={baseUrl + movie.poster_path}
            overview={movie.overview}
            popularity={movie.popularity}
            release_date={movie.release_date}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
