import React, { useState } from "react";
import styled from "styled-components";
import { closeIcon } from "../assets/images";

const Container = styled.div`
  width: 700px;
  height: 600px;
  background: #fff;
  border-radius: 20px;
  border: 1px solid #707070;
  display: inline-block;
  position: fixed;
  left: 50%;
  top: 50%;
  z-index: 100;
  margin: -300px 0 0 -350px;
  @media only screen and (max-width: 500px) {
    width: 310px;
    height: 430px;
    margin: -215px 0 0 -155px;
  }
`;

const Modalhd = styled.div`
  width: 100%;
  height: 90.5px;
  border-bottom: 1px solid #dcdcdc;
  text-align: center;
  @media only screen and (max-width: 500px) {
    height: 67px;
  }
`;

const Title = styled.h1`
  text-align: center;
  font-size: 30px;
  font-weight: 800;
  height: 45px;
  line-height: 35px;
  color: #555;
  margin-top: 24px;
  display: inline-block;
  @media only screen and (max-width: 500px) {
    font-size: 20px;
    height: 29px;
    line-height: 29px;
    margin-top: 19px;
  }
`;

const Close = styled.span`
  position: absolute;
  top: 33px;
  right: 30px;
  width: 28px;
  height: 28px;
  background: url(${closeIcon});
  background-size: contain;
  cursor: pointer;
  @media only screen and (max-width: 500px) {
    width: 14px;
    height: 14px;
    top: 27px;
    right: 23px;
  }
`;

const Form = styled.form`
  padding: 41.5px 30px 0 30px;
  text-align: center;
  display: inline-block;
  @media only screen and (max-width: 500px) {
    padding: 30.5px 22px 0 22px;
  }
`;

const Input = styled.input`
  width: 100%;
  float: left;
  height: 45px;
  line-height: 45px;
  font-weight: 400;
  margin-bottom: 10px;
  font-size: 20px;
  padding-left: 20px;
  color: #bbb;
  border: 1px solid #dcdcdc;
  background-color: #fff;
  @media only screen and (max-width: 500px) {
    height: 35px;
    line-height: 35px;
    font-size: 13px;
    padding-left: 11px;
  }
`;

const Textarea = styled.textarea`
  resize: none;
  float: left;
  width: 100%;
  height: 163px;
  background-color: #fff;
  font-size: 20px;
  padding-left: 20px;
  padding-top: 8px;
  color: #bbb;
  border: 1px solid #dcdcdc;
  @media only screen and (max-width: 500px) {
    height: 126px;
    padding-top: 6px;
    padding-left: 11px;
    font-size: 13px;
  }
`;
const Complete = styled.button`
  width: 200px;
  height: 60px;
  line-height: 60px;
  border-radius: 50px;
  background-image: linear-gradient(to bottom, #f24647, #fe6018);
  font-weight: 400;
  color: #fff;
  font-size: 20px;
  outline: none;
  border: 0;
  margin-top: 34px;
  cursor: pointer;
  @media only screen and (max-width: 500px) {
    margin-top: 15px;
    width: 106px;
    height: 38px;
    line-height: 38px;
    font-size: 12px;
  }
`;
const Mask = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: #000;
  opacity: 0.5;
  z-index: 10;
`;

function Modal({ state, closeModal }) {
  const [inputs, setInputs] = useState({
    name: "",
    phonenumber: "",
    email: "",
    contents: "",
  });
  const { name, phonenumber, email, contents } = inputs;

  const inputHandler = (event) => {
    const { value, name } = event.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onClickComplete = (e) => {
    e.preventDefault();

    setInputs({
      ...inputs,
    });

    window.Email.send({
      Host: "smtp.gmail.com",
      Username: "kid@lawdians.com",
      Password: "ja2hyung!",
      From: `${email}`,
      To: "lawdians@lawdians.com",
      Subject: "스포츠본 문의사항",
      Body: `이름 : ${name} 핸드폰번호 : ${phonenumber} 이메일주소 : ${email} 문의내용 : ${contents}`,
    }).then((message) => {
      alert(message);
      closeModal(e);
    });
  };

  return state ? (
    <div className="test">
      <Mask onClick={(e) => closeModal(e)} />
      <Container>
        <Modalhd>
          <Title>문의하기</Title>
          <Close onClick={(e) => closeModal(e)} />
        </Modalhd>
        <Form method="post">
          <Input
            name="name"
            placeholder="이름"
            type="text"
            onChange={inputHandler}
            value={name}
          />
          <Input
            name="phonenumber"
            placeholder="핸드폰번호"
            type="number"
            onChange={inputHandler}
            value={phonenumber}
          />
          <Input
            name="email"
            placeholder="이메일"
            type="text"
            onChange={inputHandler}
            value={email}
          />
          <Textarea
            name="contents"
            placeholder="문의내용"
            resize="none"
            onChange={inputHandler}
            value={contents}
            style={{ fontFamily: "Noto Sans", fontWeight: "400" }}
          />
          <Complete onClick={onClickComplete}>완료</Complete>
        </Form>
      </Container>
    </div>
  ) : null;
}
export default Modal;
