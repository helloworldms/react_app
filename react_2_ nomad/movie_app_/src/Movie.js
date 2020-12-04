import React from "react";
import PropTypes from "prop-types";

function Movie({ year, title, summary, poster }) {
  return (
    <div className="movie">
      <img src={poster} alt={title} title={title} />
      <div className="moive__data">
        <h3 className="moive__title">{title}</h3>
        <h3 className="moive__yeart">{year}</h3>
        <h3 className="moive__summary">{summary}</h3>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Movie;
