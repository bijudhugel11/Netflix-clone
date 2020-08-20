import React, { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./request";
import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState([]);
  const fetchUrl = requests.fetchNetflixOriginals;

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );

      /* for random movies we have
       */
    }
    fetchData();
  }, [fetchUrl]);

  console.log(movie);
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("http://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button type="button" className="banner__button">
            PLAY
          </button>
          <button type="button" className="banner__button">
            Show My list List
          </button>
        </div>

        <h1 className="banner__description ">
          {truncate(movie?.overview, 150)}
        </h1>

        {/* Movie title */}
        {/* one div with two button  */}
        {/* discription of movies  */}
      </div>
      <div className="banner--fadeBottom"></div>
    </header>
  );
}

export default Banner;
