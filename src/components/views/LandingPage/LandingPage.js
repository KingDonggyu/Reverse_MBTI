import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "./Sections/logo.jpg";
import "./Sections/LandingPage.scss";
import { Typography } from "@material-ui/core";

class LandingPage extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" width="250px" />
          <Typography variant="h2">
            <span>거꾸로</span> MBTI
          </Typography>
          <br />
          <Typography variant="h5" className="App-explan">
            SNS에서 주로 볼 수 있는 'MBTI별 반응·특징'을 통해 MBTI를 확인합니다.
          </Typography>
          <br />
          <Link to="/Reverse_MBTI/test">
            <button className="App-btn">
              <Typography variant="h5">검사 실시 ➜</Typography>
            </button>
          </Link>
        </header>
        <footer>
          <Typography className="App-small">
            *전문 기관 외의 성격유형검사는 정확한 검사가 아니므로 재미로만
            봐주시기 바랍니다.*
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
  }
}

export default LandingPage;
