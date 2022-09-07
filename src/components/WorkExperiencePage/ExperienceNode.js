import React from "react";
import Bounce from "react-reveal/Bounce";
import style from "../../sass/WorkExperiencePage/ExperienceNode.module.scss";

function ExperienceNode({
  icon,
  iconAlt,
  positionTitle,
  startDate,
  endDate,
  companyName,
  companyLink,
  workDescription,
  revealAnimation,
  emphasize,
}) {
  return (
    <div className={style["container"]}>
      <Bounce
        left={revealAnimation.positionTitle.left}
        delay={revealAnimation.positionTitle.delay}
      >
        <p className={style["position-title"]}>{positionTitle}</p>
      </Bounce>
      <Bounce
        left={revealAnimation.date.left}
        delay={revealAnimation.date.delay}
      >
        <p className={style["date"]}>{startDate + " — " + endDate}</p>
      </Bounce>
      <Bounce delay={revealAnimation.icon.delay}>
        <div className={style["vertical-line"]} />
        <img className={style["icon"]} src={icon} alt={iconAlt} />
      </Bounce>

      <Bounce
        right={revealAnimation.companyName.right}
        delay={revealAnimation.companyName.delay}
      >
        <a
          className={style["company-name"]}
          href={companyLink}
          target="_blank"
          rel="noreferrer"
        >
          {companyName}
        </a>
      </Bounce>
      <Bounce
        right={revealAnimation.workDescription.right}
        delay={revealAnimation.workDescription.delay}
      >
        <p className={style["work-description"]}>{workDescription}</p>
      </Bounce>
    </div>
  );
}

export default ExperienceNode;
