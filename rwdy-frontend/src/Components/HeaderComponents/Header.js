import React, { useState } from "react";
import styled from "styled-components";
import CommonHeaderHover from "./CommonHeaderHover";

const Wrapper = styled.div`
  background-color: rgb(255 255 255);
  width: 100%;
  z-index: 50;
  position: fixed;
  opacity: 1;
  top: 0;
`;

const InsideWrap = styled.div`
  padding: 3rem 1.5rem;
  display: flex;
  justify-content: space-between;
  position: relative;
`;

const Wrap1 = styled.div`
  /* padding: 3rem 1.5rem;*/
  display: flex;
  gap: 2.5rem;
  align-items: center;
  /* display: block; */

  @media (max-width: 768px) {
    display: none;
  }
`;

const Wrap2 = styled.div`
  /* padding: 3rem 1.5rem;*/
  display: flex;
  gap: 2.5rem;
  align-items: center;
  width: 12rem;

  @media (max-width: 768px) {
    width: 9rem;
  }
`;

const MobWrap = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;

const Option = styled.div`
  /* padding: 3rem 1.5rem; */
  position: relative;
  cursor: pointer;
`;

const MobOptionsWrap = styled.div`
  position: absolute;
  background-color: rgb(229 231 235);
  width: 100%;
  height: auto;
  z-index: 3;
  top: 95px;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 1rem;
  animation: scrollDown 0.5s ease-in-out forwards;

  @keyframes scrollDown {
    0% {
      opacity: 0;
      transform: translateY(-100%);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const MobOptions = styled.div`
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 300;
`;

const StyledHr = styled.hr`
  height: 1px; /* Equivalent to h-px */
  margin: 2px 0; /* Equivalent to my-3 */
  background-color: #cccccc; /* Equivalent to bg-[#cccccc] */
  border: none; /* Equivalent to border-0 */
`;

const OptionWrap = styled.div``;

const Header = () => {
  const [showTopwareOptions, setShowTopwareOptions] = useState(false);
  const [showBottomwareOptions, setShowBottomwareOptions] = useState(false);
  const [showLogoOptions, setShowLogoOptions] = useState(false);
  const [showOptionsDropDown, setShowOptionsDropDown] = useState(false);

  const TopwareOptions = [
    "TEES",
    "SHIRTS",
    "HOODIES",
    "TANKS",
    "SWEATSHIRTS",
    "KURTAS",
    "BOMBER-JACKETS",
    "CO-ORD SETS",
  ];
  const BottomwareOptions = ["JEANS", "TROUSERS"];

  const LogoOptions = [
    "About RWDY",
    "Community Market",
    "Leaderboard",
    "Spotted in RWDY",
    "RWDY IRL",
    "Recruit",
  ];

  const handleTopwareOptions = () => {
    setShowBottomwareOptions(false);
    setShowLogoOptions(false);

    setShowTopwareOptions(!showTopwareOptions);
  };

  const handleBottomwareOptions = () => {
    setShowTopwareOptions(false);
    setShowLogoOptions(false);

    setShowBottomwareOptions(!showBottomwareOptions);
  };

  const handleLogoOptions = () => {
    setShowBottomwareOptions(false);
    setShowTopwareOptions(false);
    setShowLogoOptions(!showLogoOptions);
  };

  const handleHamburger = () => {
    setShowOptionsDropDown(!showOptionsDropDown);
  };

  return (
    <>
      <Wrapper>
        <InsideWrap>
          <Wrap1>
            <OptionWrap onClick={() => handleTopwareOptions()}>
              <Option>TOP WEAR</Option>
              {showTopwareOptions && (
                <CommonHeaderHover Options={TopwareOptions}></CommonHeaderHover>
              )}
            </OptionWrap>
            <OptionWrap onClick={() => handleBottomwareOptions()}>
              <Option>BOTTOM WEAR</Option>
              {showBottomwareOptions && (
                <CommonHeaderHover
                  Options={BottomwareOptions}
                ></CommonHeaderHover>
              )}
            </OptionWrap>
          </Wrap1>
          <MobWrap onClick={() => handleHamburger()}>
            {showOptionsDropDown ? (
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 1024 1024"
                fill-rule="evenodd"
                height="25"
                width="25"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M799.855 166.312c.023.007.043.018.084.059l57.69 57.69c.041.041.052.06.059.084a.118.118 0 0 1 0 .069c-.007.023-.018.042-.059.083L569.926 512l287.703 287.703c.041.04.052.06.059.083a.118.118 0 0 1 0 .07c-.007.022-.018.042-.059.083l-57.69 57.69c-.041.041-.06.052-.084.059a.118.118 0 0 1-.069 0c-.023-.007-.042-.018-.083-.059L512 569.926 224.297 857.629c-.04.041-.06.052-.083.059a.118.118 0 0 1-.07 0c-.022-.007-.042-.018-.083-.059l-57.69-57.69c-.041-.041-.052-.06-.059-.084a.118.118 0 0 1 0-.069c.007-.023.018-.042.059-.083L454.073 512 166.371 224.297c-.041-.04-.052-.06-.059-.083a.118.118 0 0 1 0-.07c.007-.022.018-.042.059-.083l57.69-57.69c.041-.041.06-.052.084-.059a.118.118 0 0 1 .069 0c.023.007.042.018.083.059L512 454.073l287.703-287.702c.04-.041.06-.052.083-.059a.118.118 0 0 1 .07 0Z"></path>
              </svg>
            ) : (
              <svg
                stroke="currentColor"
                fill="none"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                height="25"
                width="25"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </MobWrap>
          <Wrap2>
            <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              // xlink:href="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 421.4 85.3"
              enable-background="new 0 0 421.4 85.3"
              spacing="preserve"
              data-sentry-element="svg"
              data-sentry-component="RWDYLogoIcon"
              data-sentry-source-file="RWDYLogoIcon.tsx"
              style={{ maxWidth: "100%", width: "100%" }}
            >
              <path
                fill="#000"
                d="M421.4,0.3c-0.2-0.4-0.8-0.3-1.2-0.3c-5,0-10.1,0-15.2,0c-3.9,0-7.8,0-11.7,0c-0.7,0-1.2,0.2-1.7,0.8    c-1.4,1.7-2.8,3.3-4.2,4.9c-4.1,4.7-8.2,9.4-12.2,14.1c-3.2,3.7-6.4,7.4-9.6,11.2c-0.6,0.6-0.6,0.6-1.2,0    c-3.9-4.8-7.9-9.6-11.8-14.4c-4.3-5.2-8.5-10.4-12.8-15.6c-0.5-0.6-1-0.9-1.9-0.9c-9,0-17.9,0-26.8,0c-0.2,0-0.5,0-0.8,0    c-0.5,0.1-0.5,0.3-0.3,0.6c0.1,0.1,0.2,0.2,0.2,0.3c0.7,0.9,1.5,1.8,2.2,2.6c-2.6-0.9-5.2-1.6-8-2.2c-2.2-0.5-4.5-0.8-6.7-1    c-2.1-0.2-4.3-0.4-6.4-0.4c-15.1,0-30.1,0-45.2,0c0,0,0,0-0.1,0c-6.2,0-12.4,0-18.5,0c-0.2,0-0.5,0-0.8,0c-0.6,0-1,0.2-1.3,0.8    c-0.8,1.5-1.6,3-2.4,4.5c-2.3,4.4-4.7,8.9-7,13.3c-3.2,6-6.4,12-9.5,18c-2.5,4.8-5,9.5-7.5,14.3c-0.1,0.3-0.2,0.6-0.5,0.7    c-0.2,0-0.2-0.2-0.2-0.3c-1-3.1-2.1-6.2-3.1-9.3c-1.6-4.7-3.2-9.4-4.8-14.1c-2.2-6.5-4.5-13.1-6.7-19.6c-0.8-2.5-1.7-4.9-2.5-7.4    C181,0.3,180.6,0,180,0.1c-0.2,0-0.4,0-0.6,0c-8.8,0-17.5,0-26.3,0c-0.2,0-0.5,0-0.8,0c-0.5,0-0.7,0.2-0.9,0.7    c-0.2,0.8-0.5,1.5-0.8,2.3c-1.6,4.7-3.3,9.4-4.9,14.1c-1.9,5.5-3.9,11.1-5.8,16.6c-0.9,2.5-1.8,5-2.7,7.6c-0.9,2.5-1.8,5.1-2.7,7.7    c-0.3,0.9-0.6,1.8-1,2.8c-0.3-0.2-0.4-0.5-0.5-0.7c-1.5-3-3.1-5.9-4.6-8.9c-2.1-4.1-4.2-8.2-6.4-12.3c-3.6-7-7.2-13.9-10.9-20.8    c-1.4-2.7-2.9-5.5-4.3-8.2c-0.3-0.6-0.8-0.9-1.5-0.9c-0.1,0-0.2,0-0.4,0c-8.6,0-17.3,0-25.9,0c-0.3,0-0.6,0-0.9,0    c-0.9,0.1-0.9,0.2-0.5,0.9c0.1,0.3,0.3,0.5,0.4,0.8C73.7,0.6,69.2,0,64.5,0c-21,0-42,0-63,0C0,0,0,0,0,1.5c0,13.6,0,27.3,0,41    c0,13.7,0,27.5,0,41.2c0,1.5,0,1.5,1.5,1.5c8.2,0,16.4,0,24.6,0c0.2,0,0.4,0,0.6,0c0.5,0,0.7-0.3,0.7-0.7c0-0.4,0-0.8,0-1.2    c0-8.1,0-16.2,0-24.3c0-1.1,0-1.1,1.2-1.1c0.1,0,0.1,0,0.2,0c5,0,10.1,0,15.1,0c0.7,0,1.1,0.2,1.6,0.7c3.4,4,6.8,7.9,10.1,11.8    c4,4.7,8,9.3,12,14c0.5,0.6,1.1,0.9,1.9,0.8c10.1,0,20.3,0,30.4,0c0.3,0,0.6,0,0.8,0c0.4,0,0.5-0.2,0.3-0.5    c-0.1-0.1-0.2-0.2-0.3-0.4c-0.9-1-1.7-2-2.6-3c-4.9-5.7-9.8-11.4-14.8-17.1c-2-2.3-4-4.7-6-7c-0.6-0.7-0.5-0.8,0.3-1    c3.3-0.8,6.5-2,9.5-3.6c3.6-2,6.7-4.7,9.1-8.2c0.9-1.2,1.5-2.5,2.1-3.9c1.4,2.7,2.9,5.5,4.3,8.2c5.3,10.2,10.7,20.4,16,30.6    c0.9,1.8,1.9,3.5,2.8,5.3c0.2,0.5,0.5,0.7,1,0.7c0.5,0,1.1,0.1,1.6,0.1c8.1,0,16.1,0,24.2,0c0.5,0,1.1-0.1,1.6-0.1    c0.6,0,0.9-0.2,1.1-0.8c0.9-2.9,1.9-5.8,2.9-8.8c1.4-4.2,2.8-8.3,4.1-12.5c1.4-4.2,2.8-8.4,4.2-12.7c1.1-3.5,2.3-7,3.5-10.5    c0.1-0.2,0.1-0.5,0.4-0.6c0.1,0.4,0.3,0.9,0.4,1.3c1.1,3.5,2.3,7,3.4,10.6c1.7,5.1,3.3,10.2,5,15.2c1.6,5,3.3,10.1,4.9,15.2    c0.3,0.9,0.6,1.8,0.9,2.7c0.2,0.5,0.5,0.8,1,0.8c0.8,0,1.6,0.1,2.4,0.1c8,0,16,0,24,0c1.1,0,1.8-0.3,2.3-1.4    c3.2-6.3,6.6-12.5,9.9-18.8c3.5-6.7,7.1-13.5,10.6-20.2c4.4-8.4,8.9-16.8,13.3-25.1c0,7.6,0,15.3,0,22.9c0,13.7,0,27.4,0,41    c0,1.6,0,1.6,1.7,1.6c7.6,0.1,15.3,0,22.9,0c7.5,0,15,0.2,22.4-0.1c2.9-0.1,5.8-0.2,8.8-0.6c3.3-0.4,6.5-1.1,9.7-2    c3.9-1.1,7.6-2.7,11.1-4.7c4.7-2.6,8.8-5.9,12.2-10.1c3.2-3.9,5.6-8.3,7.1-13.1c1.2-3.9,1.7-7.8,1.8-11.9c0-1.1,0-2.2-0.1-3.3    c0.5,0.6,0.9,1.1,1.4,1.7c2.1,2.6,4.3,5.2,6.4,7.8c0.4,0.5,0.5,0.9,0.5,1.5c-0.1,0.5-0.1,1-0.1,1.6c0,5.2,0,10.3,0,15.5l0,0    c0,5.4,0,10.7,0,16c0,1.6,0,1.6,1.7,1.6c9.1,0,18.3,0,27.4,0c1.8,0,1.8,0,1.8-1.8c0-11.1,0-22.1,0-33.2c0-0.7,0.2-1.2,0.6-1.8    c2.7-3.2,5.4-6.5,8.1-9.8c4.3-5.2,8.5-10.3,12.8-15.5c6.1-7.3,12.2-14.7,18.2-22C421,1,421.5,0.7,421.4,0.3z M73.7,31.9    c-0.3,1.9-1.3,3.4-3,4.4c-0.9,0.5-1.8,0.9-2.8,1c-1.5,0.2-3,0.4-4.5,0.5c-6.1,0.3-12.2,0-17.2,0.1c-6.4,0-11.7,0-17,0    c-0.2,0-0.4,0-0.6,0c-1,0-1-0.1-1-1c0-0.2,0-0.4,0-0.6c0-5.1,0-10.1,0-15.2c0-0.2,0-0.3,0-0.5c0-0.7,0.1-0.8,0.8-0.8    c0.2,0,0.4,0,0.6,0c5.3,0,10.5,0,15.8,0c5.5,0,10.9-0.3,16.4-0.1c2,0.1,4.1,0.1,6.1,0.4c3.4,0.5,6.1,2.7,6.5,6.5    C73.9,28.4,74,30.1,73.7,31.9z M313.7,46.3c-0.4,2.7-1.2,5.3-2.8,7.5c-1.4,2-3.2,3.5-5.2,4.7c-3.8,2.3-8,3.4-12.5,3.6    c-6.3,0.2-12.6,0.1-18.9,0.1c-0.2,0-0.4,0-0.6,0c-0.3,0-0.5-0.2-0.5-0.5c0-0.4,0-0.8,0-1.1c0-6,0-11.9,0-17.9l0,0c0-6,0-12.1,0-18.1    c0-1.5,0-1.5,1.4-1.5c5.6,0,11.2-0.1,16.8,0c5.9,0.1,11.3,1.9,15.8,5.8c3.6,3,6,6.8,6.6,11.6C314,42.5,314,44.4,313.7,46.3z"
                data-sentry-element="path"
                data-sentry-source-file="RWDYLogoIcon.tsx"
              ></path>
            </svg>
          </Wrap2>
          <MobWrap>
            <OptionWrap onClick={() => handleLogoOptions()}>
              <Option>
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 59 49"
                  x="0px"
                  y="0px"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  data-sentry-element="svg"
                  data-sentry-component="RWDYCrownIcon"
                  data-sentry-source-file="RWDYCrownIcon.tsx"
                >
                  <g
                    data-sentry-element="g"
                    data-sentry-source-file="RWDYCrownIcon.tsx"
                  >
                    <g
                      data-sentry-element="g"
                      data-sentry-source-file="RWDYCrownIcon.tsx"
                    >
                      <path
                        fill="#000"
                        d="M57.1,10.3c0.2-0.6,0.4-1.2,0.3-1.8c0,0.1-0.1,0.1-0.1,0.2l0-0.2L40.2,23.2c-0.3-0.8-0.5-1.5-0.8-2.3      c-0.1-0.2-0.1-0.5-0.4-0.5c-0.3,0-0.1,0.4-0.4,0.6c-0.5-1.1-0.9-2.3-1.3-3.4c-0.3-0.8-0.4-1.9-1.1-2.4c-0.7-0.5-0.9-1-1.1-1.7      c-0.1-0.7-0.3-1.3-0.4-2c-0.2-1.2-0.7-2.3-1.5-3.1c-0.9-1-1.5-2.1-1.9-3.4c-0.4-1.1-0.7-2.3-1.1-3.4c-0.1-0.2-0.2-0.5-0.4-0.6      c0-0.1,0-0.2-0.1-0.4c-0.2,0.1-0.3,0.4-0.3,0.6c-0.1,0.4-0.2,0.8-0.3,1.1c-0.1,0.2,0,0.5-0.4,0.5c0,0-0.1,0.1-0.1,0.2      c-0.1,0.5-0.2,1-0.4,1.4c-0.7,1.3-0.7,2.8-1.1,4.3l-0.6,1.9c-0.1-0.1,0-0.2-0.1-0.3c-0.2,0.1-0.1,0.2-0.2,0.4      c-0.2,0.7-0.3,1.5-0.7,2.2c-0.1,0.1-0.1,0.3-0.3,0.3l-0.9,2.8c0,0,0-0.8-0.1-0.8c0,0.1-1.2,4.6-1.2,4.6l-0.9,1.9l0-0.1      c0,0.1-0.1,0.1-0.1,0.2c-0.2,0.3-0.2,0.8-0.2,1.3c0,0.2,0.1,0.2,0.3,0.2c0.1,0,0.2-0.1,0.3-0.1l0,0.1l1.2,1.2c0,0.1,0,0.1,0.1,0.2      c0,0,0,0,0-0.1l11.6,12.5l-13-11.1c0,0,0.1,0,0.1,0.1c-1.9-1.8-3.5-3.7-5.4-5.5c0,0-2.6-1.8-3.1-2c-0.3-0.2-0.6-0.3-0.8-0.4      L13,18.3v0c0,0,0,0,0,0L1.9,8.8C1.8,8.6,1.7,8.4,1.6,8.2c0.8,3.9,2.9,7.5,3.4,11.5c-0.2,0.1-0.2-0.3-0.4-0.1      c0.1,0.6,0.3,1.1,0.6,1.6c-0.2,0-0.3-0.3-0.5-0.2c0.1,0.3,0.1,0.6,0.2,0.9c0.6,1.8,1.4,3.5,2.1,5.2c1.2,3,2.6,5.9,2.8,9.1      c0.2,0.1,0.3-0.1,0.4-0.1c0.1-0.1,0.2-0.1,0.3-0.2l0,0l18.3,10.5c0,0,0,0,0,0c-0.2,0.2-0.4,0.4-0.6,0.5c-0.4,0.3-0.9,0.7-1.4,1      c0.1,0,0.2,0,0.2-0.1c0.7-0.4,1.5-0.7,2.2-1c0.5,0.4,0.9,0.8,1.6,1.1c0.2,0.1,0.5,0.2,0.7,0.4c0,0,0.1,0,0.1,0.1      c0.4,0.2,0.7,0.5,1.1,0.7c-0.5-0.5-1-0.9-1.1-1.7c0.2-0.1,0.3,0.3,0.5,0.2c0.2-0.4-0.3-0.9-0.1-1.2c0.1-0.2,0.1-0.3,0.1-0.5      l2.2-1.2c0.6-0.1,1.1-0.4,1.7-0.8c0.2-0.2,0.4-0.3,0.7-0.4c0,0-0.1,0-0.1,0c0.2-0.1,0.4-0.2,0.6-0.2c0.2,0,0.4-0.1,0.6-0.2      c0.1,0,0.2-0.2,0.4-0.2c0.3-0.3,0.6-0.4,0.7-0.5c0.1-0.2,0.3-0.3,0.4-0.4L49.9,36l0,0c0,0,0,0,0,0c0.2-0.4,0.9-0.8,0.7-1.2      c-0.4-0.6,0-0.9,0.2-1.3c0.3-0.8,0.6-1.5,1-2.5c-0.5,0.4-0.7,0.4-0.7,0.3l2-7.3c0.6-1.4,1.2-2.8,1.5-4.3c0.2-0.9,0.2-1.5,0.3-2.1      l1.1-4.2C56.4,12.2,56.8,11.2,57.1,10.3z M17.4,21.7c1.5,1.3,3,2.6,4.3,4l-5.9-5C16.4,20.9,16.9,21.3,17.4,21.7z"
                        data-sentry-element="path"
                        data-sentry-source-file="RWDYCrownIcon.tsx"
                      ></path>
                      <path
                        fill="#000"
                        d="M36.6,13.9c0.2,1.9,1.3,3.9,2.1,6C38.8,18.9,37.3,14.6,36.6,13.9z"
                        data-sentry-element="path"
                        data-sentry-source-file="RWDYCrownIcon.tsx"
                      ></path>
                      <path
                        fill="#000"
                        d="M36.6,43.7C36.6,43.6,36.6,43.6,36.6,43.7C36.6,43.6,36.6,43.6,36.6,43.7z"
                        data-sentry-element="path"
                        data-sentry-source-file="RWDYCrownIcon.tsx"
                      ></path>
                    </g>
                  </g>
                </svg>
              </Option>
              {showLogoOptions && (
                <CommonHeaderHover
                  Options={LogoOptions}
                  right="20px"
                  width="14rem"
                ></CommonHeaderHover>
              )}
            </OptionWrap>
          </MobWrap>
          <Wrap1>
            <Option>CART</Option>
            <Option>LOGIN</Option>
            <OptionWrap onClick={() => handleLogoOptions()}>
              <Option>
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 59 49"
                  x="0px"
                  y="0px"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  data-sentry-element="svg"
                  data-sentry-component="RWDYCrownIcon"
                  data-sentry-source-file="RWDYCrownIcon.tsx"
                >
                  <g
                    data-sentry-element="g"
                    data-sentry-source-file="RWDYCrownIcon.tsx"
                  >
                    <g
                      data-sentry-element="g"
                      data-sentry-source-file="RWDYCrownIcon.tsx"
                    >
                      <path
                        fill="#000"
                        d="M57.1,10.3c0.2-0.6,0.4-1.2,0.3-1.8c0,0.1-0.1,0.1-0.1,0.2l0-0.2L40.2,23.2c-0.3-0.8-0.5-1.5-0.8-2.3      c-0.1-0.2-0.1-0.5-0.4-0.5c-0.3,0-0.1,0.4-0.4,0.6c-0.5-1.1-0.9-2.3-1.3-3.4c-0.3-0.8-0.4-1.9-1.1-2.4c-0.7-0.5-0.9-1-1.1-1.7      c-0.1-0.7-0.3-1.3-0.4-2c-0.2-1.2-0.7-2.3-1.5-3.1c-0.9-1-1.5-2.1-1.9-3.4c-0.4-1.1-0.7-2.3-1.1-3.4c-0.1-0.2-0.2-0.5-0.4-0.6      c0-0.1,0-0.2-0.1-0.4c-0.2,0.1-0.3,0.4-0.3,0.6c-0.1,0.4-0.2,0.8-0.3,1.1c-0.1,0.2,0,0.5-0.4,0.5c0,0-0.1,0.1-0.1,0.2      c-0.1,0.5-0.2,1-0.4,1.4c-0.7,1.3-0.7,2.8-1.1,4.3l-0.6,1.9c-0.1-0.1,0-0.2-0.1-0.3c-0.2,0.1-0.1,0.2-0.2,0.4      c-0.2,0.7-0.3,1.5-0.7,2.2c-0.1,0.1-0.1,0.3-0.3,0.3l-0.9,2.8c0,0,0-0.8-0.1-0.8c0,0.1-1.2,4.6-1.2,4.6l-0.9,1.9l0-0.1      c0,0.1-0.1,0.1-0.1,0.2c-0.2,0.3-0.2,0.8-0.2,1.3c0,0.2,0.1,0.2,0.3,0.2c0.1,0,0.2-0.1,0.3-0.1l0,0.1l1.2,1.2c0,0.1,0,0.1,0.1,0.2      c0,0,0,0,0-0.1l11.6,12.5l-13-11.1c0,0,0.1,0,0.1,0.1c-1.9-1.8-3.5-3.7-5.4-5.5c0,0-2.6-1.8-3.1-2c-0.3-0.2-0.6-0.3-0.8-0.4      L13,18.3v0c0,0,0,0,0,0L1.9,8.8C1.8,8.6,1.7,8.4,1.6,8.2c0.8,3.9,2.9,7.5,3.4,11.5c-0.2,0.1-0.2-0.3-0.4-0.1      c0.1,0.6,0.3,1.1,0.6,1.6c-0.2,0-0.3-0.3-0.5-0.2c0.1,0.3,0.1,0.6,0.2,0.9c0.6,1.8,1.4,3.5,2.1,5.2c1.2,3,2.6,5.9,2.8,9.1      c0.2,0.1,0.3-0.1,0.4-0.1c0.1-0.1,0.2-0.1,0.3-0.2l0,0l18.3,10.5c0,0,0,0,0,0c-0.2,0.2-0.4,0.4-0.6,0.5c-0.4,0.3-0.9,0.7-1.4,1      c0.1,0,0.2,0,0.2-0.1c0.7-0.4,1.5-0.7,2.2-1c0.5,0.4,0.9,0.8,1.6,1.1c0.2,0.1,0.5,0.2,0.7,0.4c0,0,0.1,0,0.1,0.1      c0.4,0.2,0.7,0.5,1.1,0.7c-0.5-0.5-1-0.9-1.1-1.7c0.2-0.1,0.3,0.3,0.5,0.2c0.2-0.4-0.3-0.9-0.1-1.2c0.1-0.2,0.1-0.3,0.1-0.5      l2.2-1.2c0.6-0.1,1.1-0.4,1.7-0.8c0.2-0.2,0.4-0.3,0.7-0.4c0,0-0.1,0-0.1,0c0.2-0.1,0.4-0.2,0.6-0.2c0.2,0,0.4-0.1,0.6-0.2      c0.1,0,0.2-0.2,0.4-0.2c0.3-0.3,0.6-0.4,0.7-0.5c0.1-0.2,0.3-0.3,0.4-0.4L49.9,36l0,0c0,0,0,0,0,0c0.2-0.4,0.9-0.8,0.7-1.2      c-0.4-0.6,0-0.9,0.2-1.3c0.3-0.8,0.6-1.5,1-2.5c-0.5,0.4-0.7,0.4-0.7,0.3l2-7.3c0.6-1.4,1.2-2.8,1.5-4.3c0.2-0.9,0.2-1.5,0.3-2.1      l1.1-4.2C56.4,12.2,56.8,11.2,57.1,10.3z M17.4,21.7c1.5,1.3,3,2.6,4.3,4l-5.9-5C16.4,20.9,16.9,21.3,17.4,21.7z"
                        data-sentry-element="path"
                        data-sentry-source-file="RWDYCrownIcon.tsx"
                      ></path>
                      <path
                        fill="#000"
                        d="M36.6,13.9c0.2,1.9,1.3,3.9,2.1,6C38.8,18.9,37.3,14.6,36.6,13.9z"
                        data-sentry-element="path"
                        data-sentry-source-file="RWDYCrownIcon.tsx"
                      ></path>
                      <path
                        fill="#000"
                        d="M36.6,43.7C36.6,43.6,36.6,43.6,36.6,43.7C36.6,43.6,36.6,43.6,36.6,43.7z"
                        data-sentry-element="path"
                        data-sentry-source-file="RWDYCrownIcon.tsx"
                      ></path>
                    </g>
                  </g>
                </svg>
              </Option>
              {showLogoOptions && (
                <CommonHeaderHover
                  Options={LogoOptions}
                  right="20px"
                  width="14rem"
                ></CommonHeaderHover>
              )}
            </OptionWrap>
          </Wrap1>
        </InsideWrap>
        {showOptionsDropDown && (
          <MobOptionsWrap>
            <MobOptions>TOP WARE</MobOptions>
            <MobOptions>BOTTOM WARE</MobOptions>
            <StyledHr></StyledHr>
            <MobOptions>LOGIN</MobOptions>
          </MobOptionsWrap>
        )}
      </Wrapper>
    </>
  );
};

export default Header;
