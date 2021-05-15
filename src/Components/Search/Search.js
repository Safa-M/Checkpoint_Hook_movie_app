import React from "react";
import './Search.css'

const Search = ({ handleSearchInputChanges }) => {
  return (
    <div>
      <form >
        <input
          className="search"
          onChange={(e) => handleSearchInputChanges(e.target.value)}
          type="text"
          placeholder="Search"
        />
      </form>
    </div>
  );
};

export default Search;
