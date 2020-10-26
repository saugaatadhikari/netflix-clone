/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "../axios";
import request from "../requests";
import "./Banner.css";
const Banner = () => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const requests = await axios.get(request.fetchNetflixOriginals);
      setMovie(
        requests.data.results[
          Math.floor(Math.random() * requests.data.results.length - 1)
        ]
      );
      console.log(
        requests.data.results[
          Math.floor(Math.random() * requests.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);
  console.log(movie);
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">{movie?.overview}</h1>
      </div>
      <div className="banner__fadeBottom"></div>
    </header>
  );
};

export default Banner;
