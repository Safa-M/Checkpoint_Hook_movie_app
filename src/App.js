import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import "./App.css";
import MovieList from "./Components/MovieList";
import { AddFilm } from "./Components/AddFilm/AddFilm";
import Search from "./Components/Search/Search";
import Filter from "./Components/Filter/Filter";
import Details from "./Components/Details";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const movieslist = [
    {
      poster: "./images/Call.jpg",
      title: "The Call",
      description:
        "Two people live in different times. Seo-Yeon lives in the present and Young-Sook lives in the past. One phone call connects the two, and their lives are changed irrevocably.",
      rating: "4",
      year: "2020",
      trailer: "https://www.youtube.com/embed/hxkKeniT-0Q",
    },
    {
      poster: "./images/Exit.jpg",
      title: "Exit",
      description:
        "A rock climber tries to save the day when a mysterious white gas envelops an entire district in Seoul, South Korea.",
      rating: "3.5",
      year: "2019",
      trailer: "https://www.youtube.com/embed/BssmJFpXtTQ",
    },
    {
      poster: "./images/Alive.jpg",
      title: "Alive",
      description:
        "The rapid spread of an unknown infection has left an entire city in ungovernable chaos, but one survivor remains alive in isolation. It is his story.",
      rating: "3.1",
      year: "2020",
      trailer: "https://www.youtube.com/embed/jQ8CCg1tOqc",
    },
    {
      poster: "./images/innocent-witness.jpg",
      title: "Innocent Witness",
      description:
        "A man either committed suicide or he was murdered. An autistic girl is the only witness.",
      rating: "4.7",
      year: "2019",
      trailer: "https://www.youtube.com/embed/jZwEF2_Kw9I",
    },
  ];
  const [rating, setRating] = useState(0);

  const [searchValue, setSearchValue] = useState("");
  const handleSearchInputChanges = (x) => {
    setSearchValue(x);
  };

  const [addnewMovie, setaddnewMovie] = useState(movieslist);
  const add = (a) => {
    setaddnewMovie([...addnewMovie, a]);
  };

  return (
    <Router>
      <section className="App">
        <div className="movieList">
          <Switch>
            <Route
              path="/:title"
              exact
              render={() => (
                <>
                  <Details movieslist={movieslist} />
                </>
              )}
            />
            <Route
              path="/"
              exact
              render={() => (
                <>
                  <nav>
                    <Search
                      handleSearchInputChanges={handleSearchInputChanges}
                    ></Search>
                    <Filter rating={rating} setRating={setRating} />
                    <AddFilm add={add}></AddFilm>
                  </nav>
                  <MovieList
                    movieslist={addnewMovie}
                    searchValue={searchValue}
                    rating={rating}
                  />
                </>
              )}
            />
          </Switch>
        </div>
      </section>
    </Router>
  );
}

export default App;
