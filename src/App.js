import React, { Component } from "react";
import "./App.css";
import Toc from "./components/Toc";
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
      //스테이트 값 변경 > 랜더 재 호출
      // value
      mode: "welcome",
      selected_contetn_id: 2,
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
      var i = 0;
      while (i < this.state.contents.length) {
        var data = this.state.contents[i];
        if (data.id === this.state.selected_contetn_id) {
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i = i + 1;
      }
      _title = this.state.Contents[0].title;
      _desc = this.state.Contents[0].desc;
    }

    return (
      <div className="App">
        {/* <header>
          <h1>
            <a
              href="/"
              onClick={function (e) {
                e.preventDefault();
                this.setState({
                  mode: "welcome",
                });
              }.bind(this)}
            >
              {this.state.Subject.title}
            </a>
          </h1>
          {this.state.Subject.sub}
        </header> */}
        <Subject
          title={this.state.Subject.title}
          sub={this.state.Subject.sub}
          onChangePage={function () {
            this.setState({ mode: "welcome" });
          }.bind(this)}
        ></Subject>

        <Toc
          onChange={function (id) {
            this.setState({
              mode: "read",
              selected_contente_id: Number(id),
            });
          }.bind(this)}
          data={this.state.contents}
        ></Toc>
        <Control onChageMode={function (mode) {}.bind(this)}></Control>

        <Contents title={_title} desc={_desc}></Contents>
      </div>
    );
  }
}

export default App;
