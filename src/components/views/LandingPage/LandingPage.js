import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "./Sections/logo.jpg";
import "./Sections/LandingPage.css";

class LandingPage extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" width="250px" />
          <h1>
            <span>거꾸로</span> MBTI
          </h1>
          <p>
            <strong>
              SNS에서 주로 볼 수 있는 'MBTI별 반응·특징'을 통해 MBTI를
              확인합니다.
            </strong>
            <br />
            <small>
              *전문 기관 외의 성격유형검사는 정확한 검사가 아니므로 재미로만
              봐주시기 바랍니다.*
              <a
                href="https://www.16personalities.com/ko"
                className="mbti-link"
                target="blank"
              >
                MBTI 검사하러 가기
              </a>
            </small>
          </p>
          <Link to="/test">
            <button className="App-btn">
              <strong>검사 실시 ➜</strong>
            </button>
          </Link>
        </header>
      </div>
    );
  }
}

export default LandingPage;
