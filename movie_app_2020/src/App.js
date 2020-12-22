import React from "react";
import { HashRouter } from "react-router-dom";
import About from " ./routes/About";
import Home from " ./routes/Home";
import Navigation from " ./routes/Navigation";

function App() {
  return (
    <HashRouter>
      <Navigation>
        <Router path="/" exact={true} component={Home} />;
        <Router path="/about" component={About} />;
      </Navigation>
    </HashRouter>
  );
}

export default App;
