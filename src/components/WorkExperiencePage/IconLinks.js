import React from "react";
import IconLink from "./IconLink";
import style from "../../sass/WorkExperiencePage/IconLinks.module.scss";

function IconLinks({ icons }) {
  return (
    <>
      {icons.map(({ link, icon, iconAlt, titleText, uid, revealAnimation }) => (
        <IconLink
          link={link}
          icon={icon}
          iconAlt={iconAlt}
          titleText={titleText}
          key={uid}
          revealAnimation={revealAnimation}
        />
      ))}
    </>
  );
}
export default IconLinks;
