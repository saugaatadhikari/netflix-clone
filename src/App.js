import React from "react";
import "./App.css";
import Row from "./Components/Row";
import Banner from "./Components/Banner";
import request from "./requests";
import Nav from "./Components/Nav";
function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row
        title="Netflix Originals"
        fetchURL={request.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchURL={request.fetchTrending} />
      <Row title="Top Rated" fetchURL={request.fetchTopRated} />
      <Row title="Action Movies" fetchURL={request.fetchActionMovies} />
      <Row title="Romance Movies" fetchURL={request.fetchRomanceMovies} />
      <Row title="Horror Movies" fetchURL={request.fetchHorrorMovies} />
      <Row title="Documentaries" fetchURL={request.fetchDocumentaries} />
      <Row title="Comedy Movies" fetchURL={request.fetchComedyMovies} />
    </div>
  );
}

export default App;
