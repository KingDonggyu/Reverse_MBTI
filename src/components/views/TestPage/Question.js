import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Sections/Question.scss";
import "../ResultPage/ResultPage";
import { Typography } from "@material-ui/core";

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
        <p>
          <Typography variant="h4">({index + 1}/27)</Typography>
        </p>
        <Typography variant="h4" className="question">
          {answer.Q}
        </Typography>
        <hr />
        <br />
        <div className="answer-list">
          <div className="answer-item">
            <label for="answer1">
              <Typography className="answer">{answer.A1}</Typography>
            </label>
            <button
              className="answer-btn"
              id="answer1"
              name="answer1"
              onClick={this.handleSelect}
            >
              <strong>➜</strong>
            </button>
          </div>
          <br />
          <div className="answer-item">
            <label for="answer2">
              <Typography className="answer">{answer.A2}</Typography>
            </label>
            <button
              className="answer-btn"
              id="answer2"
              name="answer1"
              onClick={this.handleSelect}
            >
              <strong>➜</strong>
            </button>
          </div>
        </div>
        <Link to="/Reverse_MBTI">
          <button className="replay-btn">
            <Typography>다시하기</Typography>
          </button>
        </Link>
      </div>
    );
  }
}

export default Question;
