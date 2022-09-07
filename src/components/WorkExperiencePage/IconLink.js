import React from "react";
import Bounce from "react-reveal/Bounce";
import Tilt from "react-parallax-tilt";
import style from "../../sass/WorkExperiencePage/IconLink.module.scss";

function IconLink({ link, icon, iconAlt, titleText, revealAnimation }) {
  return (
    <div className={style["container"]}>
      <Bounce
        left={revealAnimation.left}
        right={revealAnimation.right}
        top={revealAnimation.top}
        bottom={revealAnimation.bottom}
      >
        <p className={style["title-text"]}>{titleText}</p>
        <Tilt>
          <a href={link} target="_blank" rel="noreferrer">
            <img src={icon} alt={iconAlt} className={style["icon"]} />
          </a>
        </Tilt>
      </Bounce>
    </div>
  );
}

export default IconLink;
