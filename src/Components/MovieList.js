import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import MovieCard from "./MovieCard/MovieCard";

const MovieList = ({ movieslist, searchValue, rating }) => {
  return (
    <>
      {movieslist
        .filter(
          (el) =>
            el.title.toLowerCase().includes(searchValue.toLowerCase().trim()) &&
            el.rating >= rating
        )
        .map((newCard, i) => (
          <div key={i}>
            <MovieCard newCard={newCard} />
          </div>
        ))}
    </>
  );
};
export default MovieList;
