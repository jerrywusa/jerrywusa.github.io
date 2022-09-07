import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { customRipple } from "use-ripple-hook";
import style from "../../sass/HomePage/Tile.module.scss";
import Bounce from "react-reveal/Bounce";

function Tile({
  tileRipple,
  timeoutDuration,
  title,
  description,
  position,
  pathName,
  revealAnimation,
  opacity,
}) {
  const navigate = useNavigate();
  const [isHover, setHover] = useState(false);

  const whiteRipple = customRipple(tileRipple);
  const [ripple, event] = whiteRipple();

  return (
    <div
      className={style["container"]}
      onClick={() => {
        setTimeout(() => {
          navigate(pathName);
        }, timeoutDuration);
      }}
      ref={ripple}
      onMouseDown={event}
      style={{
        opacity: opacity,
      }}
    >
      <Bounce
        left={revealAnimation.left}
        right={revealAnimation.right}
        top={revealAnimation.top}
        bottom={revealAnimation.bottom}
        delay={revealAnimation.delay}
      >
        <div
          className={style["tile"]}
          id={style["tile--" + position]}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <p className={style["title-text"]}>{title}</p>
          <p className={style["description-text"]}>
            {isHover ? description : ""}
          </p>
        </div>
      </Bounce>
    </div>
  );
}

export default Tile;
