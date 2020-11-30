import React, { Component } from "react";
import "./App.css";
import TOC from "./components/TOC";
import Subject from "./components/Subject";
import Contents from "./components/Contents";

// 클래스 소속시 function 생략
// 하나의 최상위 태그
// attribute = props

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "welcome",
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
        {/* <Subject
          title={this.state.Subject.title}
          sub={this.state.Subject.sub}
        ></Subject> */}
        <header>
          <h1>
            <a
              href="/"
              onClick={function (e) {
                e.preventDefault();
                // this.state.mode = 'welcome'
                this.setState({
                  mode: "welcome",
                });

                // 이벤트 함수 안에서 this가 자기자신 가르키지 않음
              }.bind(this)}
            >
              {this.state.Subject.title}
            </a>
          </h1>
          {this.state.Subject.sub}
        </header>
        );
        <TOC data={this.state.Contents}></TOC>
        <Contents title={_title} desc={_desc}></Contents>
      </div>
    );
  }
}

export default App;
