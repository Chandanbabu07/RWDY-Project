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
`;
const CommonButton = ({ value, right, top, left }) => {
  return (
    <>
      <Wrapper right={right} top={top} left={left}>
        {value}
      </Wrapper>
    </>
  );
};

export default CommonButton;
