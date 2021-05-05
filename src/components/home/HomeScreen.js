import React from "react";
import Banner from "../banner/Banner";
import Nav from "./../partials/Nav";
import requests from "./../../Requests";
import Row from "./../movies/Row";

function HomeScreen() {
  return (
    <div className="homeScreen">
      <Nav />

      {/* Banner */}
      <Banner />

      {/* Row */}
      <div className="movie-wrapper">
        <div className="container-fluid">
          <Row
            title="Trending Now"
            fetchUrl={requests.fetchTrending}
            isLargeRow
          />
          <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
          <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
          <Row title="Commedy Movies" fetchUrl={requests.fetchCommedyMovies} />
          <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
          <Row
            title="Romantic Movies"
            fetchUrl={requests.fetchRomanticMovies}
          />
          <Row title="Documentries" fetchUrl={requests.fetchDeocumentries} />
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
