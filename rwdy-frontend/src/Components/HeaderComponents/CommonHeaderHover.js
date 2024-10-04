import React from "react";
import styled from "styled-components";
const Wrapper = styled.div`
  background-color: rgb(232 231 228);
  display: flex;
  flex-direction: column;
  width: ${(props) => (props.width ? props.width : "10rem")};
  z-index: 50;
  position: absolute;
  box-sizing: border-box;
  border: 0 solid #e5e7eb;
  top: 65%;
  animation: fadeIn 0.4s ease-in-out forwards;
  opacity: 0;
  transform: translateY(20px);
  text-align: left;
  right: ${(props) => (props.right ? props.right : "")};

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(20px); /* Start from below */
    }
    100% {
      opacity: 1;
      transform: translateY(0); /* End at original position */
    }
  }

  @media (max-width: 768px) {
    width: 10rem;
  }
`;

const Option = styled.div`
  display: flex;
  transition: background-color 0.2s ease, transform 0.2s ease;
  font-weight: 300;
  font-size: 0.875rem;
  line-height: 1.25rem;
  padding: 0.75rem 1rem;
  color: inherit;
  text-decoration: inherit;
  cursor: pointer;

  &:hover {
    /* background-color: #e5e7eb;
    transform: translateX(5px); Adds a slight hover movement */
    color: black;
    font-weight: 600;
    transform: translateX(5px);
  }

  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;

const CommonHeaderHover = ({ Options, right, width }) => {
  return (
    <>
      <Wrapper
        // style={{ right: right ? right : "", width: width ? width : "9rem" }}
        right={right}
        width={width}
      >
        {Options && Options.map((item, index) => <Option>{item}</Option>)}
      </Wrapper>
    </>
  );
};

export default CommonHeaderHover;
