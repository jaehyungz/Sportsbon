import React, { Component, useEffect, useState } from "react";
import styled from "styled-components";
import { Logoimg, Logoimg_s, MMenu, closeIcon } from "../assets/images";
import MobileMenu from "./MobileMenu";

const Headerbox = styled.header`
  width: 100%;
  height: 107px;
  background-color: transparent;
  background-color ${(props) => props.color};
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  position: fixed;
  top: 0;
  left: 0;
  z-index:10;
  transition-timing-function: ease-in;
  transition: all 0.3s;
  transform: translate3d(0,0,0);
  @media only screen and (max-width: 500px) {
    height:68px;
    padding:0 20px;
  }

`;

const Container = styled.div`
  width: 1210px;
  margin: 0 auto;
  height: 107px;
  @media only screen and (max-width: 1210px) {
    width: 80%;
  }

  @media only screen and (max-width: 500px) {
    width: unset;
    margin: unset;
    height: unset;
  }
`;

const Logo = styled.span`
  display: inline-block;
  width: 190px;
  height: 42px;
  margin: 29px 0 29.5px 5px;
  cursor: pointer;
  background: url(${Logoimg});
  background: url(${(props) => props.src});

  @media only screen and (max-width: 500px) {
    width: 139px;
    height: 31px;
    background-size: cover;
    margin: 19px 0 18px 0;
  }
`;

const List = styled.ul`
  display: inline-block;
  float: right;
  margin: 36px 0 35.5px;
  @media only screen and (max-width: 500px) {
    display: none;
  }
`;

const Item = styled.li`
  float: left;
  cursor: pointer;
  height: 29px;
  line-height: 29px;
  font-size: 20px;
  margin-left: 70px;
  text-align: center;
  font-weight:400;
  color ${(props) => props.color};
  
`;
const Button = styled.button`
  @media only screen and (max-width: 500px) {
    background: url(${MMenu});
    display: inline-block;
    width: 20px;
    height: 16px;
    float: right;
    margin: 27px 0 25px 0;
    cursor: pointer;
  }
`;

function Header() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    const test = document.body;
    console.log(test);

    document.addEventListener("scroll", () => {
      if (window.scrollY > 107) {
        handleShow(true);
      } else handleShow(false);
    });
  }, []);

  const [showmenu, setShowmenu] = useState(false);

  const openMMenu = () => {
    setShowmenu(true);
  };
  const closeMMenu = () => {
    setShowmenu(false);
  };
  const Depth1_move = () => {
    window.scrollTo(0, 0);
    setShowmenu(false);
  };
  const Depth2_move = () => {
    const header = document.querySelector("header");
    const headerHeight = header.offsetHeight;
    const depth2 = document.querySelector(".depth2");
    const depthY = depth2.offsetTop - headerHeight;
    setShowmenu(false);

    window.scroll({ left: 0, top: depthY, behavior: "smooth" });
  };

  return (
    <div>
      <Headerbox color={show ? "#fff" : "transparent"}>
        <Container>
          <Logo src={show ? Logoimg_s : Logoimg} onClick={Depth1_move}></Logo>
          <List>
            <Item onClick={Depth1_move} color={show ? "#000" : "#fff"}>
              스포츠본
            </Item>
            <Item onClick={Depth2_move} color={show ? "#000" : "#fff"}>
              배놀자
            </Item>
          </List>
          <Button onClick={openMMenu} />
        </Container>
        <MobileMenu
          visible={showmenu}
          closeMMenu={closeMMenu}
          Depth1_move={Depth1_move}
          Depth2_move={Depth2_move}
        />
      </Headerbox>
    </div>
  );
}

export default Header;
