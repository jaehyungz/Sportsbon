import React, { useState } from "react";
import styled from "styled-components";
import Quseicon from "../assets/images/inquiry_icon.png";
import Modal from "./Modal";
const Footerbox = styled.div`
  width: 100%;
  height: 298px;
  background-color: #0f0f0f;

  @media only screen and (max-width: 500px) {
    height: 245px;
  }
`;

const Container = styled.div`
  width: 1210px;
  margin: 0 auto;
  height: 298px;
  @media only screen and (max-width: 1210px) {
    width: 80%;
    position: relative;
  }

  @media only screen and (max-width: 500px) {
    width: unset;
    padding: 0 20px;
    height: 245px;
  }
`;

const Info = styled.p`
  float: left;
  height: 144px;
  display: inline-block;
  line-height: 30px;
  color: #bbb;
  font-size: 16px;
  margin-top: 78px;
  margin-left: 5px;
  font-weight: 400;
  @media only screen and (max-width: 1210px) {
    font-size: 1.8vw;
  }
  @media only screen and (max-width: 500px) {
    clear: both;
    height: 95px;
    line-height: 20px;
    font-size: 10px;
    margin-left: 0;
    margin-top: 18px;
  }
`;

const Info2 = styled.div`
  float: right;
  margin-top: 115px;
  @media only screen and (max-width: 500px) {
    clear: both;
    margin-top: 0;
    float: left;
  }
`;

const Questbutton = styled.button`
  float: right;
  width: 200px;
  height: 60px;
  line-height: 60px;
  border-radius: 50px;
  background-image: linear-gradient(to bottom, #f24647, #fe6018);
  border: 0;
  font-size: 20px;
  outline: none;
  color: #fff;
  cursor: pointer;
  font-weight: 400;
  &:before {
    content: "";
    display: inline-block;
    width: 28px;
    height: 28px;
    background: url(${Quseicon});
    background-repeat: no-repeat;
    background-size: contain;
    vertical-align: middle;
    margin-right: 11px;
  }
  @media only screen and (max-width: 1210px) {
    position: absolute;
    top: 10px;
    left: 0;
  }
  @media only screen and (max-width: 500px) {
    display: none;
  }
`;

const Copyright = styled.p`
  float: right;
  color: #bbb;
  font-size: 16px;
  height: 24px;
  line-height: 30px;
  clear: both;
  display: inline-block;
  margin-top: 23px;
  font-weight: 400;
  @media only screen and (max-width: 1210px) {
    font-size: 1.8vw;
    position: absolute;
    left: 5px;
    bottom: 40px;
  }
  @media only screen and (max-width: 500px) {
    clear: both;
    float: left;
    font-size: 10px;
    height: 15px;
    line-height: 15px;
    margin-top: 10px;
    position: unset;
  }
`;
const MQuestbutton = styled.button`
  display: none;
  @media only screen and (max-width: 500px) {
    display: inline-block;
    background-image: linear-gradient(to bottom, #f24647, #fe6018);
    width: 106px;
    height: 38px;
    line-height: 38px;
    border-radius: 50px;
    border: 0;
    font-size: 12px;
    outline: none;
    color: #fff;
    cursor: pointer;
    margin: 29px 0 0 0;
    float: left;
  }
`;

function Footer() {
  const [modalState, setmodalState] = useState(false);
  const openModal = () => {
    setmodalState(true);
  };
  const closeModal = () => {
    setmodalState(false);
  };
  const onClickComplete = () => {
    setmodalState(false);
  };
  const test = () => {
    window.open("https://forms.gle/SBNqqyJnDkJcPfBu5");
  };

  return (
    <div>
      <Footerbox>
        <Container>
          <MQuestbutton onClick={test}>문의하기</MQuestbutton>
          <Info>
            스포츠본 주식회사 | 대표 : 박성건
            <br />
            본사 주소 : 서울특별시 서대문구 이화여대길 52, 이화여대 산학협력관
            1278호
            <br />
            고객센터 : 02)363-5523 | cs@sportsbon.com
            <br />
            고객센터 운영시간 : 평일 오전 10시 ~ 오후 6시
            <br />
            사업자등록번호 : 460-08-00875 | 통신판매업신고 :
            제2018-서울서대문-0627호
          </Info>
          <Info2>
            <Questbutton onClick={test}>문의하기</Questbutton>
            <Copyright>Copyright(c) Sportsbon All Right Reserved.</Copyright>
          </Info2>
        </Container>
      </Footerbox>
      <Modal
        state={modalState}
        closeModal={closeModal}
        onClickComplete={onClickComplete}
      />
    </div>
  );
}

export default Footer;
