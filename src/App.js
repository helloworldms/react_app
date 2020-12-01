import React, { Component } from "react";
import "./App.css";
import TOC from "./components/TOC";
import Subject from "./components/Subject";
import Contents from "./components/Contents";
import Control from "./components/Control";

// 클래스 소속시 function 생략
// 하나의 최상위 태그
// attribute = props

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "read",
      Subject: { title: "web", sub: "World wid web!" },
      welcome: { title: "Welcome", desc: "Hello,React!!!" },
      Contents: [
        { id: 1, title: "HTML", desc: "HTML is information" },
        { id: 2, title: "CSS", desc: "CSS is for design" },
        { id: 3, title: "JavaScript", desc: "javaScript is for interactive" },
      ],
    };
  }

  render() {
    var _title,
      _desc = null;
    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode === "read") {
      _title = this.state.Contents[0].title;
      _desc = this.state.Contents[0].desc;
    }

    return (
      <div className="App">
        <Subject
          title={this.state.Subject.title}
          sub={this.state.Subject.sub}
          onChangePage={function () {
            this.setState({ mode: "welcome" });
          }.bind(this)}
        ></Subject>

        <TOC
          onChange={function (id) {
            this.setState({
              mode: "read",
              selected_contente_id: Number(id),
            });
          }.bind(this)}
          data={this.state.contents}
        ></TOC>
        <Control onChangeMode={function () {}.bind(this)}></Control>
        <Contents title={_title} desc={_desc}></Contents>
      </div>
    );
  }
}

export default App;
