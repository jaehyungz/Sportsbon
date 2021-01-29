import React from "react";
import SectionList from "../../components/SectionList";
import Footer from "../../components/Footer";
import GlobalStyles from "../../components/GlobalStyles";
import Header from "../../components/Header";
import {
  bnjCon1,
  bnjCon2,
  bnjCon3,
  bnj_banner_m,
  bnj_banner,
  bnjCon1_m,
  bnjCon2_m,
  bnjCon3_m,
} from "../../assets/images";

function MainPresenter() {
  const contents = [
    {
      id: 1,
      Banner: null,
      subtitle: bnj_banner,
      buttons: true,
      mimage: bnj_banner_m,
    },
    {
      id: 2,
      Banner: null,
      buttons: false,
      subtitle: bnjCon1,
      mimage: bnjCon1_m,
    },
    {
      id: 3,
      Banner: null,
      buttons: false,
      subtitle: bnjCon2,
      mimage: bnjCon2_m,
    },
    {
      id: 4,
      Banner: null,
      buttons: false,
      subtitle: bnjCon3,
      mimage: bnjCon3_m,
    },
  ];
  return (
    <div>
      <Header />
      <GlobalStyles />
      <SectionList contents={contents} />
      <Footer />
    </div>
  );
}

export default MainPresenter;
