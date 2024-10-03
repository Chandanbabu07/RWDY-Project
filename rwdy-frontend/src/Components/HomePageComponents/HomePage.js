import React from "react";
import HomePageVideo from "./HomePageVideo";
import CommonButton from "./CommonButton";
import styled from "styled-components";

const Text = styled.img`
  width: 500px;
  margin-left: 800px;
  margin-top: 82px;
`;

const HomePage = () => {
  return (
    <>
      <HomePageVideo></HomePageVideo>
      <CommonButton right=" 63px" top="651px" value="SHOP NOW"></CommonButton>
      <CommonButton left="80px" value="RWDY ESSENTIAL 1.0"></CommonButton>
      <Text src="https://rwdy.in/_next/image?url=%2Freclaim_supremacy_lg.png&w=1920&q=75"></Text>
    </>
  );
};

export default HomePage;
