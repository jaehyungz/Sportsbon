import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import Buttons from "./Buttons";
import { sportbon_Banner, sportbon_Banner_m } from "../assets/images";

import useResizeHandler from "../hooks/useResizeHandler";

const Container = styled.div`
  width: 100%;
  height: 1000px;
  background-size: 100% 100%;
  position: relative;
  @media only screen and (max-width: 500px) {
    height: 700px;
  }
`;
const Banner = styled.div`
  width: 100%;
  height: 1000px;
  @media only screen and (max-width: 500px) {
    height: 700px;
  }
`;
const BannerImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const Depth1 = styled.div``;
const Depth2 = styled.div``;

const SubTitle = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

function Section({ content }) {
  //const { checkDevice } = useDefalutSize();
  const { platform } = useResizeHandler();

  return (
    <Container>
      {/* {content.subtitle ? <SubTitle src={content.subtitle} /> : null} */}
      {platform === "desktop" ? (
        <SubTitle src={content.subtitle} />
      ) : (
        <SubTitle src={content.mimage} />
      )}

      {/* {checkDevice === "devicepc" ? (
        <SubTitle src={content.subtitle} />
      ) : (
        <SubTitle src={content.mimage} />
      )} */}

      {content.buttons ? <Buttons /> : null}
    </Container>
  );
}

function SectionList({ contents }) {
  const depth1 = useRef();
  const depth2 = useRef();

  useEffect(() => {}, []);

  const { platform } = useResizeHandler();

  return (
    <>
      <Depth1 ref={depth1} className="depth1">
        <Container>
          <Banner>
            {platform === "desktop" ? (
              <BannerImg src={sportbon_Banner} />
            ) : (
              <BannerImg src={sportbon_Banner_m} />
            )}
          </Banner>
        </Container>
      </Depth1>
      <Depth2 ref={depth2} className="depth2">
        {contents.map((content) => (
          <Section content={content} key={content.id} />
        ))}
      </Depth2>
    </>
  );
}

export default SectionList;
