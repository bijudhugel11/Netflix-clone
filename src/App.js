import React, { useState } from "react";
import "./App.css";
import Row from "./Row";
import Banner from "./Banner";
import Navbar from "./Navbar";
import requests from "./request";

//e342ac585da2fa92473efe1f8144e672
function App() {
  const [list] = useState({
    movies: [
      {
        title: "NETFLIX ORIGINALS",
        fetchUrl: requests.fetchNetflixOriginals,
        isLargeRow: true,
      },
      { title: "Trending now", fetchUrl: requests.fetchTrending },
      { title: "Action Movies", fetchUrl: requests.fetchActionMovies },
      { title: "Top Rated", fetchUrl: requests.fetchTopRated },
      { title: "Comedy Movies", fetchUrl: requests.fetchComedyMovies },
      { title: "Documentaries", fetchUrl: requests.fetchDocumentaries },
      { title: "Horror Movies", fetchUrl: requests.fetchHorrorMovies },
      { title: "Romance Movies", fetchUrl: requests.fetchRomanceMovies },
    ],
  });
  console.log(list.movies);

  return (
    <div className="app">
      <Navbar />
      <Banner />
      <h1>NETFLIX Clone</h1>
      {list.movies.map((movie, index) => (
        <Row
          key={index}
          title={movie.title}
          fetchUrl={movie.fetchUrl}
          isLargeRow={movie.isLargeRow}
        />
      ))}
      {/*  <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title="Trending now" fetchUrl={requests.fetchTrending} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />

      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} /> */}
    </div>
  );
}

export default App;
