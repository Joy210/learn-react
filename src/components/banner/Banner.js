import React, { useEffect, useState } from "react";
import "./Banner.css";

import axios from "../../axios";
import requests from "../../Requests";

function Banner() {
  const [movie, setMovie] = useState([]);
  const posterUrl = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);

      setMovie(
        request.data.results[
          // get random number of movie
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );

      return request;
    }

    fetchData();
  }, []);

  // console.log("Movie: ", movie);

  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${posterUrl + movie?.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "top center",
      }}
    >
      <div className="container-fluid">
        <div className="banner-contents">
          <h1 className="banner-title">{movie.name}</h1>
          <div className="banner-buttons">
            <button className="btn">Play</button>
            <button className="btn ml-2">My List</button>
          </div>
          <p className="banner-description">
            {movie.overview && movie.overview.substr(0, 150)}
          </p>
        </div>
      </div>
      <div className="banner-fadeBottom"></div>
    </div>
  );
}

export default Banner;
