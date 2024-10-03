import React from "react";
import styled from "styled-components";
const Wrapper = styled.div`
  background-color: rgb(232 231 228);
  display: flex;
  flex-direction: column;
  width: 9rem;
  z-index: 50;
  position: absolute;
  box-sizing: border-box;
  border: 0 solid #e5e7eb;
  top: 65%;
  animation: fadeIn 0.4s ease-in-out forwards;
  opacity: 0;
  transform: translateY(20px);
  text-align: left;

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

  &:hover {
    /* background-color: #e5e7eb;
    transform: translateX(5px); Adds a slight hover movement */
    color: black;
    font-weight: 600;
    transform: translateX(5px);
  }
`;

const CommonHeaderHover = ({ Options, right, width }) => {
  return (
    <>
      <Wrapper
        style={{ right: right ? right : "", width: width ? width : "9rem" }}
      >
        {Options && Options.map((item, index) => <Option>{item}</Option>)}
        {/* <Option>SHIRTS</Option>
        <Option>HOODIES</Option>
        <Option>TANKS</Option>
        <Option>SWEATSHIRTS</Option>
        <Option>KURTAS</Option>
        <Option>BOMBER-JACKETS</Option>
        <Option>CO-ORD SETS</Option> */}
      </Wrapper>
    </>
  );
};

export default CommonHeaderHover;
