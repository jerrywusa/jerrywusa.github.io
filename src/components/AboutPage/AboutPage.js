import React, { useEffect, useState } from "react";
import style from "../../sass/AboutPage/AboutPage.module.scss";
import TypingText from "./TypingText";
import Page from "../shared/Page";
import SpotifyPlaylists from "./SpotifyPlaylists";
import BubbleParticles from "../shared/BubbleParticles";
import TitleText from "./TitleText";
import Reveal from "react-reveal/Reveal";
import Bounce from "react-reveal/Bounce";

function AboutPage({ bindScrollSnap, particles, page1, page2, page3 }) {
  const [container] = useState(React.createRef());

  const darkgrey = "#282828";
  const red = "#cc241d";
  const green = "#98971a";
  const yellow = "#d79921";
  const blue = "#458588";
  const purple = "#b16286";
  const aqua = "#689d6a";
  const grey = "#a89984";
  const white = "#ebdbb2";

  useEffect(() => {
    bindScrollSnap(container);
  });

  return (
    <div className={style["container"]} ref={container}>
      <BubbleParticles
        particleColor={particles.particleColor}
        hoverParticleColor={particles.hoverParticleColor}
        onClick={particles.onClick}
        onHover={particles.onHover}
        shape={particles.shape}
      />
      <Page
        backgroundColor={page1.backgroundColor}
        content={
          // <Bounce right>
          <TypingText
            staticText={page1.typingText.staticText}
            sequence={page1.typingText.sequence}
            revealAnimation={page1.typingText.revealAnimation}
          />
          // </Bounce>
        }
      />
      <Page
        backgroundColor={page2.backgroundColor}
        content={
          <>
            <Reveal bottom>
              <TitleText titleText={page2.titleText} />
            </Reveal>
            <div className={style["pingpong-chess-container"]}>
              <img src={page2.pingpongImg1} />
              <img src={page2.chessImg1} />
            </div>
          </>
        }
      />
      <Page
        backgroundColor={page3.backgroundColor}
        content={
          <>
            <Reveal bottom>
              <TitleText titleText={page3.titleText} />
            </Reveal>
            <div className={style["playlist-container"]}>
              <SpotifyPlaylists playlists={page3.playlists} />
            </div>
          </>
        }
      />
    </div>
  );
}

export default AboutPage;
