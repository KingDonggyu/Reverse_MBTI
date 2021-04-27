import React, { Component } from "react";
import "./Sections/TestPage.scss";
import Question from "./Question";

class TestPage extends Component {
  state = {
    result: {
      E: 0,
      I: 0,
      S: 0,
      N: 0,
      T: 0,
      F: 0,
      J: 0,
      P: 0,
    },
    questions: [
      {
        //E, I
        id: 0,
        Q: "어색할 때 어떻게 행동하나요?",
        A1: "어색할 때 말을 걺",
        A2: "어색할 때 침묵함",
      },
      {
        //E, I
        id: 1,
        Q: "고등학교 때 유명했나요?",
        A1: "네",
        A2: "아니요",
      },
      {
        //E, I
        id: 2,
        Q: "당신은 어떤 사람에 가까운가요?",
        A1: "친구랑 엄청 놀고 집에 가서는 지쳐서 쉬는 사람",
        A2: "엄청 놀고 집에 가서도 또 노는(놀 수 있는) 사람",
      },
      {
        //E, I
        id: 3,
        Q: "문제가 닥쳤을 때! 당신의 행동과 가까운 것은 무엇입니까?",
        A1: "말이 많아진다.",
        A2: "생각이 많아진다.",
      },
      {
        //E, I
        id: 4,
        Q: "다음 문항 중 당신에게 더 가까운 것은 무엇입니까?",
        A1: "인싸",
        A2: "아싸",
      },
      {
        //T, F
        id: 5,
        Q: "이해와 공감에 대해 어떻게 생각하나요?",
        A1: "이해가 안 가는데 어떻게 공감을 해",
        A2: "이해가 안 돼도 일단 공감은 함",
      },
      {
        //T, F
        id: 6,
        Q: "수학(논리적인 계산)을 잘 하는 편인가요?",
        A1: "네",
        A2: "아니요",
      },
      {
        //T, F
        id: 7,
        Q: "다음 문항 중 당신에게 더 가까운 것은 무엇입니까?",
        A1: "주관 뚜렷",
        A2: "남 눈치 봄",
      },
      {
        //T, F
        id: 8,
        Q: "'나 시험 떨어졌어...'",
        A1: "무슨 시험? 몇 점 나왔는데?",
        A2: "많이 속상하겠다ㅠㅠ 다음엔 꼭 붙을거야!",
      },
      {
        //T, F
        id: 9,
        Q: "'요즘 무슨 일 있어? 이거 먹고 힘내!'",
        A1: "그래 고마워 (내가 힘들어 보이나...?)",
        A2: "헐...정말? 고마워 진짜 감동이야",
      },
      {
        //T, F
        id: 10,
        Q: "'나 우울해서 머리 잘랐어!'",
        A1: "얼마나 잘랐어? 보여줘",
        A2: "헐... 무슨 일 있었어? 지금은 괜찮아?",
      },
      {
        //T, F
        id: 11,
        Q: "'너 아픈거 같은데? 병원 가봐!'",
        A1: "응 그래야 할 것 같아 (진짜 감)",
        A2: "(내가 너무 징징거렸나... 귀찮은 건가ㅠ)",
      },
      {
        //T, F
        id: 12,
        Q: "'너는 나랑 잘 안맞는 것 같아'",
        A1: "왜? 그 이유는 뭔데? (정말 궁금함)",
        A2: "그렇구나 (내심 상처 받음)",
      },
      {
        //T, F
        id: 13,
        Q: "'너가 너무 좋아! (잘 알지도 못하는 사람이)'",
        A1: "왜? 내가 뭘 했는데?",
        A2: "정말? 고마워~",
      },
      {
        //T, F
        id: 14,
        Q: "'나... 이런 일이 있어서 슬퍼'",
        A1: "그래? 그럼 우리 같이 해결해보자",
        A2: "정말 속상했겠다...",
      },
      {
        //T, F
        id: 15,
        Q: "당신은 어떤 사람에 가까운가요?",
        A1: "기분이 자주 왔다갔다 한다.",
        A2: "기분이 대체적으로 평단",
      },
      {
        //T, F
        id: 16,
        Q: "당신은 어떤 사람에 가까운가요?",
        A1: "이기적인건 나쁜거라 생각",
        A2: "이기적인게 나쁜거라 생각X",
      },
      {
        //S, N
        id: 17,
        Q: "과거와 미래 중 어떤 것을 더 중요시 하나요?",
        A1: "현실적이고 과거의 데이터를 중요시 함",
        A2: "미래 지향적이고 상상을 중요시 함",
      },
      {
        //S, N
        id: 18,
        Q: "운동(스포츠)를 좋아하나요?",
        A1: "네",
        A2: "아니요",
      },
      {
        //S, N
        id: 19,
        Q: "다음 문항 중 당신에게 더 가까운 것은 무엇입니까?",
        A1: "이타적",
        A2: "이기적",
      },
      {
        //S, N
        id: 20,
        Q: "문제가 닥쳤을 때! 당신의 행동과 가까운 것은 무엇입니까?",
        A1: "그냥 그런가보다",
        A2: "어떻게 그럴 수 있지",
      },
      {
        //S, N
        id: 21,
        Q: "당신은 어떤 사람에 가까운가요?",
        A1:
          "직접 해보기 전에는 안 믿는 사람 (단골멘트: 안해봤는데 그걸 어떻게 알아)",
        A2:
          "해보기 전에 감으로 대충 아는 사람 (단골멘트: 그런건 딱 보면 느낌이 오지 않나?)",
      },
      {
        //J, P
        id: 22,
        Q: "계획과 행동에 대해 어떻게 생각하나요?",
        A1: "일단 계획부터 세워야 틀이 잡힘",
        A2: "일단 해봐야 틀이 잡힘",
      },
      {
        //J, P
        id: 23,
        Q: "지금 방이 깨끗한가요?",
        A1: "네",
        A2: "아니요",
      },
      {
        //J, P
        id: 24,
        Q: "문제가 닥쳤을 때! 당신의 행동과 가까운 것은 무엇입니까?",
        A1: "한다면 함",
        A2: "뭐부터 하지",
      },
      {
        //J, P
        id: 25,
        Q: "다음 문항 중 당신에게 더 가까운 것은 무엇입니까?",
        A1: "계획적임",
        A2: "게으름",
      },
      {
        //J, P
        id: 26,
        Q: "당신은 어떤 사람에 가까운가요?",
        A1: "행동력이 좋아서 잘 미루지 않는 사람",
        A2: "쉽게 미루고 일 마무리를 잘 못하는 사람",
      },
    ],
  };

  handleSubmit = (questionNum, answer) => {
    /*
    E/I : 0~4
    S/N : 17~21
    T/F : 5~16
    J/P : 22~26
    */
    const { result } = this.state;

    if (questionNum <= 4) {
      if (answer === "answer1")
        this.setState({ result: { ...result, E: result.E + 1 } });
      else this.setState({ result: { ...result, I: result.I + 1 } });
    } else if (questionNum <= 16) {
      if (answer === "answer1")
        this.setState({ result: { ...result, T: result.T + 1 } });
      else this.setState({ result: { ...result, F: result.F + 1 } });
    } else if (questionNum <= 21) {
      if (answer === "answer1")
        this.setState({ result: { ...result, S: result.S + 1 } });
      else this.setState({ result: { ...result, N: result.N + 1 } });
    } else {
      if (answer === "answer1")
        this.setState({ result: { ...result, J: result.J + 1 } });
      else this.setState({ result: { ...result, P: result.P + 1 } });
    }
  };

  handleResult = () => {
    const { result } = this.state;
    let MBTIresult = "";

    if (result.E > result.I) MBTIresult += "E";
    else MBTIresult += "I";
    if (result.S > result.N) MBTIresult += "S";
    else MBTIresult += "N";
    if (result.T > result.F) MBTIresult += "T";
    else MBTIresult += "F";
    if (result.J > result.P) MBTIresult += "J";
    else MBTIresult += "P";

    window.location.href = `/result/${MBTIresult}`;
  };

  render() {
    const { questions } = this.state;
    return (
      <div className="test">
        <header className="test-header">
          <Question
            questionData={questions}
            handleSubmit={this.handleSubmit}
            handleResult={this.handleResult}
          />
        </header>
      </div>
    );
  }
}

export default TestPage;
