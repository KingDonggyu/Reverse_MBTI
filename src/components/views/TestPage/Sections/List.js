import React, { Component } from "react";
import "./List.css";

const ListBody = (props) => {
  const questionData = props.questionData;
  return (
    <ul>
      <li>{questionData.A1}</li>
      <li>{questionData.A2}</li>
      <li>{questionData.A3}</li>
      <li>{questionData.A4}</li>
      <li>{questionData.A5}</li>
      <li>{questionData.A6}</li>
    </ul>
  );
};

const List = (props) => {
  const { questionData } = props;

  return (
    <div>
      <h3>{questionData.Q}</h3>
      <ListBody questionData={questionData} />
      <button className="Test-btn">다음 ➜</button>
    </div>
  );
};

export default List;
