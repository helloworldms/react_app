import React from "react";

function Movie({ movie, movie: { snippet } }) {
  return (
    <div>
      <h2>{snippet.channelTitle}</h2>
      <h4>{snippet.title}</h4>
      <img src={snippet.thumbnails.medium.url} alt={movie}></img>
    </div>
  );
}

export default Movie;
