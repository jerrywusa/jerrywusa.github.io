import React, { useEffect, useState } from "react";
import Page from "../shared/Page";
import SkillBar from "react-skillbars";
import Zoom from "react-reveal/Zoom";
import style from "../../sass/SkillsPage/SkillsPage.module.scss";

function SkillsPage({ bindScrollSnap, page1 }) {
  const [container] = useState(React.createRef());

  useEffect(() => {
    bindScrollSnap(container);
  });

  return (
    <div className={style["container"]} ref={container}>
      <Page
        backgroundColor={page1.backgroundColor}
        content={
          <div className={style["skillbar-container"]}>
            <Zoom duration={page1.revealAnimation.duration}>
              <SkillBar
                skills={page1.skillBar.skills}
                animationDelay={page1.skillBar.animationDelay}
                animationDuration={page1.skillBar.animationDuration}
              />
            </Zoom>
          </div>
        }
      />
    </div>
  );
}

export default SkillsPage;
