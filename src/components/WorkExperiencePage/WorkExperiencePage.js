import React, { useEffect, useState } from "react";
import Page from "../shared/Page";
import TimeLine from "./TimeLine";
import IconLinks from "./IconLinks";
import Bounce from "react-reveal/Bounce";
import style from "../../sass/WorkExperiencePage/WorkExperiencePage.module.scss";
import WebParticles from "../shared/WebParticles";

// consider refactoring work timeline to https://www.npmjs.com/package/react-vertical-timeline-component
function WorkExperiencePage({ bindScrollSnap, page1, page2, page3 }) {
  const [container] = useState(React.createRef());

  useEffect(() => {
    bindScrollSnap(container);
  });

  return (
    <div className={style["container"]} ref={container}>
      <WebParticles />
      <Page
        content={
          <Bounce right={page1.revealAnimation.right}>
            <p className={style["title-text"]}>{page1.title}</p>
          </Bounce>
        }
        backgroundColor={page1.backgroundColor}
      />
      <Page
        content={<TimeLine workExperiences={page2.workExperiences} />}
        backgroundColor={page2.backgroundColor}
      />
      <Page
        content={
          <div className={style["icon-container"]}>
            <IconLinks icons={page3.icons} />
          </div>
        }
        backgroundColor={page3.backgroundColor}
      />
    </div>
  );
}

export default WorkExperiencePage;
