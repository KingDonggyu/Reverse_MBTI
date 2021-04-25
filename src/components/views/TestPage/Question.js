import React, { Component } from "react";
import "./Sections/Question.css";
import "../ResultPage/ResultPage";

class Question extends Component {
  state = {
    index: 0,
  };

  handleSelect = (event) => {
    const { id } = event.target;
    alert(id);
    this.props.handleSubmit(id);
    if (this.state.index < 24) {
      this.setState({ index: this.state.index + 1 });
    } else window.location.href = "/result";
  };

  render() {
    const { questionData } = this.props;
    const answer = questionData[this.state.index];

    return (
      <div className="list">
        <h3>
          {answer.id + 1}. {answer.Q}
        </h3>
        <hr />
        <br />
        <div className="answer-list">
          <label>
            {answer.A1}
            <button
              className="answer-btn"
              id="answer1"
              onClick={this.handleSelect}
            >
              선택 ➜
            </button>
          </label>
          <br />
          <label>
            {answer.A2}
            <button
              className="answer-btn"
              id="answer2"
              onClick={this.handleSelect}
            >
              선택 ➜
            </button>
          </label>
        </div>
      </div>
    );
  }
}

export default Question;
