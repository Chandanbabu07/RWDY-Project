import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 800px;
  margin: 8rem auto;
  display: flex;
  flex-direction: column;
  justify-content: left;
  gap: 40px;
`;
const Block = styled.div``;
const MyProfileKeyword = styled.div`
  color: black;
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 900;
  text-align: left;
  margin-left: 120px;

  @media (max-width: 768px) {
    margin-left: 40px;
  }
`;
const BackgroundWrap = styled.div`
  /* background-color: rgb(245 245 245); */
  border-width: 1px;
  border-radius: 0.75rem;
  height: 430px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProfileDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4rem;
  gap: 4rem;
  height: 300px;
  width: 50%;
  border-radius: 0.75rem;
  background: linear-gradient(to right, #383733, #676767);
`;
// const ProfileWallet = styled.div`
//   background-color: rgb(245 245 245);
//   width: 80%;
// `;

const DetailsWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
`;

const EditButton = styled.div`
  color: rgb(255 255 255);
  font-weight: 300;
  font-size: 0.75rem;
  line-height: 1rem;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  background-color: transparent;
  border-width: 1px;
  border-radius: 3px;
  white-space: nowrap;
  align-items: center;
  cursor: pointer;
  display: flex;
  box-sizing: border-box;
  border: 1px solid #e5e7eb;
  width: 140px;

  &:hover {
    transform: scale(1.03); /* Scaling the button slightly */
    transition: transform 0.15s cubic-bezier(0.4, 0, 0.2, 1); /* Smooth transition */
  }
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: flex-start;
`;

const ProfileImg = styled.img`
  width: 65px;
  height: 65px;
`;

const CurrentProfile = styled.div`
  color: rgb(212 187 147);
  text-transform: capitalize;
  font-size: 1.5rem;
  line-height: 2rem;
`;

const CurrentEmail = styled.div`
  color: #ffffff;
  overflow-wrap: break-word;
`;

const MyProfile = () => {
  return (
    <>
      <Wrapper>
        <Block>
          <MyProfileKeyword>MY PROFILE</MyProfileKeyword>
        </Block>
        <Block>
          <BackgroundWrap>
            <ProfileDetails>
              <DetailsWrap>
                <Details>
                  <ProfileImg src="https://rwdy.in/avatar.svg"></ProfileImg>
                  <CurrentProfile>Chandan</CurrentProfile>
                  <CurrentEmail>chandanbabu705@gmail.com</CurrentEmail>
                </Details>
                <EditButton>Edit Profile</EditButton>
              </DetailsWrap>
            </ProfileDetails>
            {/* <ProfileWallet></ProfileWallet> */}
          </BackgroundWrap>
        </Block>
      </Wrapper>
    </>
  );
};

export default MyProfile;
