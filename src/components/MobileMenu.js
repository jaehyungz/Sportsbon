import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { closeIcon } from "../assets/images";

const Container = styled.div`
  display: none;
  @media only screen and (max-width: 500px) {
    position: fixed;
    overflow: hidden;
    top: 0;
    right: ${({ right }) => `${right}px`};
    width: 250px;
    height: 100vh;
    background: #fff;
    padding-top: 50px;
    display: inline-block;
    transition: all ease 0.5s;
  }
`;

const Close = styled.button`
  @media only screen and (max-width: 500px) {
    width: 18px;
    height: 18px;
    background: url(${closeIcon});
    background-size: contain;
    background-repeat: no-repeat;
    float: right;
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
  }
`;

const Mlist = styled.ul`
  @media only screen and (max-width: 500px) {
    display: inline-block;
    width: 100%;
  }
`;

const Mitem = styled.li`
  @media only screen and (max-width: 500px) {
    width: 100%;
    height: 35px;
    line-height: 35px;
    font-size: 20px;
    padding-left: 30px;
    margin: 15px 0;
    cursor: pointer;
  }
`;

const Mask = styled.div`
  @media only screen and (max-width: 500px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: #000;
    opacity: 0.5;
  }
`;

function MobileMenu({ visible, closeMMenu, Depth1_move, Depth2_move }) {
  const [right, setRight] = useState(visible ? 0 : -250);

  useEffect(() => {
    if (visible) {
      setRight(0);
    } else {
      setRight(-250);
    }
  }, [visible]);

  return (
    <div>
      {visible && <Mask onClick={closeMMenu} />}
      <Container right={right}>
        <Close onClick={closeMMenu} />
        <Mlist>
          <Mitem onClick={Depth1_move}>스포츠본</Mitem>
          <Mitem onClick={Depth2_move}>배놀자</Mitem>
        </Mlist>
      </Container>
    </div>
  );
}
export default MobileMenu;
