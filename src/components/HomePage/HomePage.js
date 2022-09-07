import React from "react";
import Tile from "./Tile";
import style from "../../sass/HomePage/HomePage.module.scss";

// future idea: opaque bright blob that follows mouse and leaves a trace
function HomePage({ tileRipple, timeoutDuration, tiles, particles }) {
  return (
    <div className={style["container"]}>
      {tiles.map(
        ({
          title,
          description,
          position,
          pathName,
          revealAnimation,
          opacity,
          uid,
        }) => (
          <Tile
            tileRipple={tileRipple}
            timeoutDuration={timeoutDuration}
            title={title}
            description={description}
            position={position}
            pathName={pathName}
            revealAnimation={revealAnimation}
            opacity={opacity}
            key={uid}
          />
        )
      )}
    </div>
  );
}
export default HomePage;
