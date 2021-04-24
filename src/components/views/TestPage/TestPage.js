import React, { Component } from "react";
import "./Sections/TestPage.css";
import List from "./Sections/List";

class TestPage extends Component {
  state = {
    questions: {
      Q: "친구가 '숙제 베껴도 돼?' 질문했을 때 당신의 반응은?",
      A1: "(베끼는 건 안되지만) 숙제하는 거 도와줄게!",
      A2: "물론이지",
      A3: "넌 내가 숙제를 했을 거라 생각해?",
      A4: "ㅋㅋ응 안돼",
      A5: "잠깐만 우리 숙제가 있었어?",
      A6: "(읽씹)",
    },
  };

  handleSubmit = (question) => {
    this.setState({});
  };

  render() {
    const { questions } = this.state;
    return (
      <div className="test">
        <header className="test-header">
          <List questionData={questions} />
        </header>
      </div>
    );
  }
}

export default TestPage;
