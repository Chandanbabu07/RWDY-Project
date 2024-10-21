import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 18rem;
  background-color: rgb(255 255 255);
  border-width: 1px;
  z-index: 10;
  top: 95px;
  right: 100px;
  position: absolute;
  border: 1px solid #e5e7eb;
  box-sizing: border-box;
  box-shadow: 1px 1px 5px #e5e7eb;
`;

const ProfileDeatail = styled.div``;

const Details = styled.div`
  background-color: #000;
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const NameBlock = styled.div`
  color: #ffffff;
  text-transform: uppercase;
  font-weight: 800;
  text-align: left;
  font-size: 13px;
`;
const EmailBlock = styled.div`
  color: #ffffff;
  text-transform: lowercase;
  text-align: left;
  font-size: 13px;
`;
const PointsLogo = styled.img`
  width: 30px;
  height: 30px;
`;

const Points = styled.div`
  color: rgb(239 220 191);
  font-weight: 500;
  font-size: 0.75rem;
  line-height: 1rem;
`;

const AuthDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 30px;
`;
const DetailBlock = styled.div`
  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: 600;
  cursor: pointer;
  text-align: left;

  &:hover {
    font-weight: 800;
  }
`;

const MyAccountDropdown = () => {
  const { logout } = useAuth0();

  const handleMyProfile = () => {
    window.location.href = "/profile ";
  };

  const handleMyAddress = () => {
    window.location.href = "/address ";
  };

  return (
    <>
      <Wrapper>
        <ProfileDeatail>
          <Details>
            <Wrap>
              <NameBlock>Chandan</NameBlock>
              <EmailBlock>chandanbabu705@gmail.com</EmailBlock>
            </Wrap>
            <Wrap>
              <PointsLogo src="https://rwdy.in/_next/image?url=%2Frwdy_community_coin.png&w=64&q=75"></PointsLogo>
              <Points>0</Points>
            </Wrap>
          </Details>

          <AuthDetails>
            <DetailBlock onClick={() => handleMyProfile()}>
              My Profile
            </DetailBlock>
            <DetailBlock>My Orders</DetailBlock>
            <DetailBlock onClick={() => handleMyAddress()}>
              My Address
            </DetailBlock>
            <DetailBlock>Wishlist</DetailBlock>
            <DetailBlock
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              Logout
            </DetailBlock>
          </AuthDetails>
        </ProfileDeatail>
      </Wrapper>
    </>
  );
};

export default MyAccountDropdown;
