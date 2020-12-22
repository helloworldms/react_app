import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <span>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      About this page: I built it because I love movies.
    </span>
  );
}

export default Navigation;
