import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Sections/Question.scss";
import "../ResultPage/ResultPage";
import { Typography } from "@material-ui/core";

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect = (key, e) => {
    const { index } = this.state;
    this.props.handleSubmit(index, key);
    if (index < 27) this.setState({ index: index + 1 });
  };

  render() {
    const { questionData } = this.props;
    const { index } = this.state;
    const answer = questionData[index];

    if (index === 27) this.props.handleResult();
    return (
      <div className="list">
        <Typography variant="h4">({index + 1}/27)</Typography>
        <Typography variant="h4" className="question">
          {answer.Q}
        </Typography>
        <hr />
        <br />
        <div className="answer-list">
          <div className="answer-item">
            <label htmlFor="answer1">
              <Typography className="answer">{answer.A1}</Typography>
            </label>
            <button
              className="answer-btn"
              id="answer1"
              onClick={(e) => this.handleSelect(1, e)}
            >
              <strong>➜</strong>
            </button>
          </div>
          <br />
          <div className="answer-item">
            <label htmlFor="answer2">
              <Typography className="answer">{answer.A2}</Typography>
            </label>
            <button
              className="answer-btn"
              id="answer2"
              onClick={(e) => this.handleSelect(2, e)}
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
