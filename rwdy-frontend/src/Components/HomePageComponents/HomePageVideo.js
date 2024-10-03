import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 12rem auto 2.5rem;
  overflow: hidden; /* Ensures no overflow beyond the container */
  position: relative;
`;

const Video = styled.video`
  width: 100%;
  height: auto;
  object-fit: contain; /* Shows the whole video without zooming in */
  border-radius: 0.75rem;
`;

const HomePageVideo = () => {
  return (
    <Wrapper>
      <Video
        autoPlay
        loop
        muted
        playsInline
        src="https://assets.therowdy.club/webBannerVideo.mp4"
      ></Video>
    </Wrapper>
  );
};

export default HomePageVideo;
