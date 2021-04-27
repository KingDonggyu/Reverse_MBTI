import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Sections/Question.css";
import "../ResultPage/ResultPage";

class Question extends Component {
  state = {
    index: 0,
  };

  handleSelect = (event) => {
    const { id } = event.target;
    const { index } = this.state;
    this.props.handleSubmit(index, id);
    if (index < 27) this.setState({ index: index + 1 });
  };

  render() {
    const { questionData } = this.props;
    const { index } = this.state;
    const answer = questionData[index];

    if (index === 27) this.props.handleResult();
    return (
      <div className="list">
        <p>({index + 1}/27)</p>
        <h3>{answer.Q}</h3>
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
              <strong>➜</strong>
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
              <strong>➜</strong>
            </button>
          </label>
        </div>
        <Link to="/">
          <button className="replay-btn">
            <strong>다시하기</strong>
          </button>
        </Link>
      </div>
    );
  }
}

export default Question;
