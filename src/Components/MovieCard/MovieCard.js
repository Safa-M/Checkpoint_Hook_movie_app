import React from "react";
import "./MovieCard.css";
import { Link } from "react-router-dom";

const MovieCard = ({ newCard }) => {
  return (
    <div className="col-2">
      <div className="cover">
        <div className="header">
          <div className="seen">
            <span className="glyphicon glyphicon-eye-open">
              {newCard.rating}/5
            </span>
          </div>
          <div className="type">{newCard.year}</div>
        </div>
        <div className="info">
          <h3>{newCard.title}</h3>
          <p>{newCard.description}</p>
          <button>
            <Link to={`/${newCard.title}`} className="see-trailer">
              SEE TRAILER
            </Link>
          </button>
        </div>
        <img src={newCard.poster} alt={newCard.title} />
        {newCard.children}
      </div>
    </div>
  );
};

export default MovieCard;
