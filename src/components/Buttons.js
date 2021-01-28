import React from "react";
import styled from "styled-components";
import Appbutton from "../assets/images/btn_apple.png";
import Googlebutton from "../assets/images/btn_google.png";
import { btnApple_m, btnGoogle_m } from "../assets/images";
const Container = styled.form`
  display: inline-block;
  position: absolute;
  top: 510px;
  left: 19%;
  @media only screen and (max-width: 500px) {
    width: 278px;
    height: 48px;
    top: 245px;
    left: 50%;
    text-align: center;
    margin-left: -139px;
  }
`;

const Appstore = styled.button`
  width: 200px;
  height: 60px;
  outline: none;
  border: 0;
  background-size: cover;
  background-color: transparent;
  margin-right: 20px;
  cursor: pointer;
  background: url(${Appbutton});
  @media only screen and (max-width: 500px) {
    margin-right: 10px;
    width: 134px;
    height: 48px;
    background: url(${btnApple_m});
  }
`;

const GooglePlay = styled.button`
  width: 200px;
  height: 60px;
  outline: none;
  border: 0;
  background-size: cover;
  background-color: transparent;
  cursor: pointer;
  background: url(${Googlebutton});
  @media only screen and (max-width: 500px) {
    width: 134px;
    height: 48px;
    background: url(${btnGoogle_m});
  }
`;

function Buttons() {
  const Preparations = (e) => {
    e.preventDefault();
    alert("준비중입니다.");
  };
  return (
    <Container>
      <Appstore onClick={Preparations}></Appstore>
      <GooglePlay onClick={Preparations}></GooglePlay>
    </Container>
  );
}

export default Buttons;
