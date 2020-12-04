import React, { Component } from "react";
import TOC from "./Components/TOC";
import ReadContent from "./Components/ReadContent";
import Subject from "./Components/Subject";
import Control from "./Components/Control";
import CreateContent from "./Components/CreateContent";

class App extends Component {
  constructor(props) {
    super(props);
    // 스테이트 값 초기화 / 컴포넌터 실행될때 랜더  컨스트럭터 가장 먼저 실행 / 프롭스로 전달하기 위한 정보

    this.state = {
      mode: "read",
      selected_content_id: 2,
      welcome: { title: "welcome", desc: "Hello, React" },
      subject: { title: "web", sub: "world wide web" },
      contents: [
        { id: 1, title: "HTML", desc: "HTML is Hyper" },
        { id: 2, title: "CSS", desc: "CSS is Hyper" },
        { id: 3, title: "JavaScript", desc: "JavaScript is Hyper" },
      ],
    };
  }
  render() {
    var _title,
      _desc,
      _article = null;

    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
    } else if (this.state.mode === "read") {
      var i = 0;
      while (i < this.state.contents.length) {
        var data = this.state.contents[i];
        if (data.id === this.state.selected_content_id) {
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i = i + 1;
      }
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
    } else if (this.state.mode === "create") {
      _article = <CreateContent></CreateContent>;
    }
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function (e) {
            this.setState({ mode: "welcome" });
          }.bind(this)}
        ></Subject>
        {/* <header>
          <h1>
            <a
              href="/"
              onClick={function (e) {
                e.preventDefault();
                alert("hi");
                this.setState({ mode: "welcome" });
              }.bind(this)}
            >
              {this.state.subject.title}
            </a>
          </h1>
          {this.state.subject.sub}
        </header> */}
        <TOC
          onChangePage={function (id) {
            this.setState({
              mode: "read",
              selected_content_id: Number(id),
            });
          }.bind(this)}
          data={this.state.contents}
        ></TOC>
        <Control
          onChangeMode={function (_mode) {
            this.setState({ mode: _mode });
          }.bind(this)}
        ></Control>
        {_article}
      </div>
    );
  }
}

export default App;
