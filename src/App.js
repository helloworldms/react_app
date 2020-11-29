import React, { Component } from "react";
import "./App.css";
import TOC from "./components/TOC";

// 클래스 소속시 function 생략
// 하나의 최상위 태그
// attribute = props

class Contents extends Component {
  render() {
    return (
      <article>
        <h2>{this.props.title}</h2>
        {this.props.desc}
      </article>
    );
  }
}

class Subject extends Component {
  render() {
    return (
      <header>
        <h1>{this.props.title}</h1>
        {this.props.sub}
      </header>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Subject title="WEB" Sub="world wide web!"></Subject>
        <TOC></TOC>
        <Contents
          title="HTML"
          desc="HTML is HyperText Markup Language."
        ></Contents>
      </div>
    );
  }
}

export default App;
