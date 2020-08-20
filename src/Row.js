import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url = "http://image.tmdb.org/t/p/original/";
function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]); // state is same as the temporary memory for storing the variable.
  const [trailerUrl, setTrailerUrl] = useState("");

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
      console.log(movie);
    }
  };
  useEffect(() =>
    /* useEffect is the function which will work whenever the component gets loaded. */

    /* whenever we are using the use effect and if there is any variable which is code in from other file (fetchUrl) then we have to right it in dependencies [fetchUrl] because useEffect is depended in fetchUrl so all dependecies are written in the [dependencies] */
    /* now we are using the async function which will load or fetch the daata from the other third party resources*/
    {
      async function fetchData() {
        const request = await axios.get(fetchUrl);
        //console.log(request);
        //  console.log(request.data.results);
        setMovies(request.data.results);

        return request;
      }
      fetchData();
    }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  // console.log(movies);
  return (
    <div className="row">
      <h2>{title}</h2>

      <div className={`row__posters`}>
        {movies.map((movie) => (
          <img
            onClick={() => handleClick(movie)}
            key={movie.id}
            className={`row__poster  ${
              isLargeRow === true && "row__posterLarge"
            }`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
