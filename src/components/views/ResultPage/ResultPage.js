import React from "react";
import { Link } from "react-router-dom";
import "./Sections/ResultPage.scss";
import { Typography } from "@material-ui/core";

const ResultPage = ({ match }) => {
  const mbti = match.params.MBTI;

  return (
    <div className="Result">
      <header className="Result-header">
        <Typography variant="h3">
          당신의 <span>거꾸로 MBTI</span> 결과는
        </Typography>
        <Typography variant="h1" className="Result-text">
          {mbti}
        </Typography>
        <br />
        <Typography variant="h5">
          자신의 MBTI와 일치한지 확인해 보세요!
        </Typography>
        <Link to="/Reverse_MBTI">
          <button className="Result-btn">
            <Typography variant="h5">메인화면 ➜</Typography>
          </button>
        </Link>
      </header>
      <footer>
        <Typography>
          나의 MBTI를 모른다면? {">>"}
          <a
            href="https://www.16personalities.com/ko"
            className="mbti-link"
            target="blank"
          >
            MBTI 검사하러 가기
          </a>
        </Typography>
      </footer>
    </div>
  );
};

export default ResultPage;
