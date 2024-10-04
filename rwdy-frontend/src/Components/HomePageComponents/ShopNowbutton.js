import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: rgb(6 6 6);
  padding: 12px 20px;
  width: auto;
  font-size: 1.25rem;
  line-height: 1.75rem;
  color: rgb(255 255 255);
  font-weight: 600;
  border-radius: 0.375rem;
  position: absolute;
  right: ${(props) => props.right};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  cursor: pointer;

  @media (min-width: 768px) {
    padding: 10px 20px;
    font-size: 1rem;
    right: 62px;
    top: 466px;
  }

  @media (max-width: 768px) {
    right: 10px;
    top: 780px;
  }

  @media (min-width: 1024px) {
    right: 57px;
    top: 544px;
  }

  @media (min-width: 1280px) {
    right: 73px;
    top: 595px;
  }

  @media (min-width: 1320px) {
    right: 93px;
    top: 630px;
  }

  @media (min-width: 1500px) {
    right: 100px;
    top: 680px;
    padding: 16px 22px;
    font-size: 1.3rem;
  }

  /* @media (min-width: 1500px) {
    right: 112px;
    top: 743px;
  } */
`;
const ShopNowbutton = ({ value, right, top, left }) => {
  return (
    <>
      <Wrapper right={right} top={top} left={left}>
        {value}
      </Wrapper>
    </>
  );
};

export default ShopNowbutton;
