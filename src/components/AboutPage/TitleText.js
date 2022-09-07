import React from "react";
import style from "../../sass/AboutPage/TitleText.module.scss";

function TitleText({ titleText }) {
  return (
    <div className={style["container"]}>
      {titleText.map(({ text, textColor, isBold, uid }) => (
        <pre
          key={uid}
          style={{
            color: textColor,
            fontWeight: isBold ? "bold" : "",
            fontFamily: "Arial",
          }}
        >
          {text}
        </pre>
      ))}
    </div>
  );
}

export default TitleText;
