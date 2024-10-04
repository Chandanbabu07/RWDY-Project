import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  margin: 12rem auto 2.5rem;
  max-width: 1280px;

  overflow: hidden; /* Ensures no overflow beyond the container */
  position: relative;

  @media (min-width: 768px) {
    max-width: 795px;
  }

  @media (max-width: 768px) {
    margin: 8rem auto 2.5rem;
  }
  @media (min-width: 1024px) {
    max-width: 1000px;
  }

  @media (min-width: 1280px) {
    max-width: 1130px;
  }
  @media (min-width: 1320px) {
    max-width: 1220px;
  }
`;

const Video = styled.video`
  width: 100%;
  height: auto;
  object-fit: contain; /* Shows the whole video without zooming in */
  border-radius: 0.75rem;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const HomePageVideo = () => {
  const [videoSrc, setVideoSrc] = useState("");

  useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia("(max-width: 768px)").matches) {
        // Mobile screen
        setVideoSrc("https://assets.therowdy.club/mobileBannerVideo.mp4");
      } else {
        // Desktop screen
        setVideoSrc("https://assets.therowdy.club/webBannerVideo.mp4");
      }
    };

    handleResize(); // Set the initial video source
    window.addEventListener("resize", handleResize); // Listen for window resize

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup the listener
    };
  }, []);

  return (
    <Wrapper>
      <Video autoPlay loop muted playsInline src={videoSrc}></Video>
    </Wrapper>
  );
};

export default HomePageVideo;
