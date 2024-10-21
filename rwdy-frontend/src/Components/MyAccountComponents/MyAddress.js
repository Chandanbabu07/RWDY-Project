import React, { useState } from "react";
import styled from "styled-components";
import CommonAddress from "./CommonAddress";
import AddAddressPopup from "./AddAddressPopup";

const Wrapper = styled.div`
  max-width: 1000px;
  margin: 8rem auto;
  display: flex;
  flex-direction: column;
  justify-content: left;
  gap: 40px;

  @media (max-width: 768px) {
    margin: 5px;
  }
`;
const Block = styled.div`
  display: flex;
  justify-content: space-between;
`;
const MyAddressKeyword = styled.div`
  color: black;
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 900;
  text-align: left;
`;
const BackgroundWrap = styled.div`
  display: flex;
  gap: 15px;
  background-color: rgb(245 245 245);
  border-width: 1px;
  border-radius: 0.75rem;
  height: auto;
  align-items: center;
  justify-content: center;
  min-height: 100px;
  padding: 15px;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const AddNewButton = styled.div`
  display: flex;
  color: rgb(255 255 255);
  font-weight: 500;
  font-size: 0.75rem;
  line-height: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 2rem;
  padding-right: 2rem;
  background-color: rgb(6 6 6);
  align-items: center;
  cursor: pointer;

  &:hover {
    transform: scale(1.03); /* Scaling the button slightly */
    transition: transform 0.15s cubic-bezier(0.4, 0, 0.2, 1); /* Smooth transition */
  }
`;

const DefaultAddress = styled.div``;

const MyAddress = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Wrapper>
        <Block>
          <MyAddressKeyword>My Saved Addresses</MyAddressKeyword>
          <AddNewButton onClick={() => setIsOpen(true)}>ADD NEW</AddNewButton>
        </Block>
        <BackgroundWrap>
          {false && <DefaultAddress>Address Not Added</DefaultAddress>}
          <CommonAddress></CommonAddress>
          <CommonAddress></CommonAddress>
          <CommonAddress></CommonAddress>
          <CommonAddress></CommonAddress>
        </BackgroundWrap>
      </Wrapper>
      <AddAddressPopup isOpen={isOpen} setIsOpen={setIsOpen}></AddAddressPopup>
    </>
  );
};

export default MyAddress;
