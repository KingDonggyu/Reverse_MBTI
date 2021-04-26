import React from "react";
import { Link } from "react-router-dom";
import "./Sections/ResultPage.css";
import logo from "../LandingPage/Sections/logo.jpg";

const ResultPage = ({ match }) => {
  const mbti = match.params.MBTI;
  return (
    <div className="Result">
      <header className="Result-header">
        <h2>
          당신의 <span>거꾸로 MBTI</span> 결과는
        </h2>
        <h1>
          <img src={logo} id="Result-logo-left" alt="logo" width="250px" />
          {mbti}
          <img src={logo} id="Result-logo-right" alt="logo" width="250px" />
        </h1>
        <br />
        자신의 MBTI와 일치한지 확인해 보세요!
        <small>
          아직 검사 해 보지 않았다면?{" "}
          <a
            href="https://www.16personalities.com/ko"
            className="mbti-link"
            target="blank"
          >
            MBTI 검사하러 가기
          </a>
        </small>
        <Link to="/">
          <button className="Result-btn">
            <strong>메인화면 ➜</strong>
          </button>
        </Link>
      </header>
    </div>
  );
};

export default ResultPage;
