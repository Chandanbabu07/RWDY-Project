import React from "react";
import HomePageVideo from "./HomePageVideo";
import CommonButton from "./CommonButton";
import styled from "styled-components";
import ShopNowbutton from "./ShopNowbutton";

const Text = styled.img`
  width: 500px;
  margin-left: 800px;
  margin-top: 82px;

  @media (max-width: 768px) {
    width: 250px;
    margin-left: 150px;
  }

  @media (min-width: 768px) {
    width: 300px;
    margin-left: 600px;
  }

  @media (min-width: 1024px) {
    width: 400px;
    margin-left: 680px;
  }
`;

const HomePage = () => {
  return (
    <>
      <HomePageVideo></HomePageVideo>
      <ShopNowbutton right=" 63px" top="651px" value="SHOP NOW"></ShopNowbutton>
      <CommonButton left="80px" value="RWDY ESSENTIAL 1.0"></CommonButton>
      <Text src="https://rwdy.in/_next/image?url=%2Freclaim_supremacy_lg.png&w=1920&q=75"></Text>
    </>
  );
};

export default HomePage;
