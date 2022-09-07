import React from "react";
import ExperienceNode from "./ExperienceNode";
import style from "../../sass/WorkExperiencePage/TimeLine.module.scss";

function TimeLine({ workExperiences }) {
  return (
    <div className={style["container"]}>
      {workExperiences.map(
        ({
          uid,
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
        }) => (
          <ExperienceNode
            key={uid}
            icon={icon}
            iconAlt={iconAlt}
            positionTitle={positionTitle}
            startDate={startDate}
            endDate={endDate}
            companyName={companyName}
            companyLink={companyLink}
            workDescription={workDescription}
            revealAnimation={revealAnimation}
            emphasize={emphasize}
          />
        )
      )}
    </div>
  );
}

export default TimeLine;
