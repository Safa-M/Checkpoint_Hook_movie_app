import React from "react";
import "./Filter.css";

const Filter = ({ rating, setRating }) => {
  const stars = (a) => {
    let staysarray = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= a) {
        staysarray.push(
            <span style={{ color: "#fbe300" }} onClick={() => setRating(i)}>
              ★
            </span>
        );
      } else {
        staysarray.push(
            <span
              style={{ color: "#b9d6e9" }}
              onClick={() => setRating(i)}
            >
              ★
            </span>
        );
      }
    }
    return staysarray;
  };

  return <div className="rating-stars">{stars(rating)}</div>;
};

export default Filter;
