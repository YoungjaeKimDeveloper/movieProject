import React from "react";
import Header from "./assets/components/Header/Header";
import MovieList from "./assets/components/MovieList/MovieList";
import "./App.css";

const App = () => {
  return (
    <div className="movieApp">
      <Header />
      <MovieList />
    </div>
  );
};

export default App;
