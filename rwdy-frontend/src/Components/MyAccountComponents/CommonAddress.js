import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  gap: 15px;
  background-color: rgb(255 255 255);
  padding: 1.25rem;
  border-radius: 0.75rem;
  box-sizing: border-box;
  border: 0 solid #e5e7eb;
  width: 450px;
  height: 230px;

  @media (max-width: 768px) {
    width: 390px;
  }
`;

const RadioButton = styled.input.attrs({ type: "radio" })`
  accent-color: #000;
  color: rgb(17 24 39);
  font-size: 0.875rem;
  line-height: 1.25rem;
  padding: 0.625rem;
  border-color: rgb(209 213 219);
  border-width: 1px;
  width: 1.5rem;
  height: 2.75rem;
  cursor: pointer;
`;

const AddressInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const NameBlock = styled.div`
  text-transform: capitalize;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 900;
  text-align: left;
`;

const AddressBlock = styled.div`
  color: rgb(106 106 106);
  font-size: 0.75rem;
  line-height: 1rem;
  overflow-wrap: break-word;
  text-align: left;
`;

const ButtonWrap = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 10px;
`;

const Button = styled.div`
  color: rgb(68 68 68);
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.25rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 2rem;
  padding-right: 2rem;
  background-color: transparent;
  border: 1px solid rgb(210 210 210);
  /* border-width: 1px; */
  border-radius: 0.375rem;
  align-items: center;
  cursor: pointer;
  display: flex;
  &:hover {
    transform: scale(1.03); /* Scaling the button slightly */
    transition: transform 0.15s cubic-bezier(0.4, 0, 0.2, 1); /* Smooth transition */
  }
`;

const CommonAddress = () => {
  return (
    <>
      <Wrapper>
        <RadioButton></RadioButton>
        <AddressInfoWrap>
          <NameBlock>CHANDAN</NameBlock>
          <AddressBlock>H1201 , Rohan Upavan , Byrathi</AddressBlock>
          <AddressBlock>Bangalore - 560077</AddressBlock>
          <AddressBlock>Karnataka, IN</AddressBlock>
          <AddressBlock>Phone - 8105777579</AddressBlock>

          <ButtonWrap>
            <Button>EDIT</Button>
            <Button>DELETE</Button>
          </ButtonWrap>
        </AddressInfoWrap>
      </Wrapper>
    </>
  );
};

export default CommonAddress;
