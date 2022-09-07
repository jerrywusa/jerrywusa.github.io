import React from "react";
import style from "../../sass/shared/Page.module.scss";
function Page({ backgroundColor, content }) {
  return (
    <div
      className={style["page"]}
      style={{
        backgroundColor: backgroundColor,
      }}
    >
      <div className={style["content"]}>{content}</div>
    </div>
  );
}

export default Page;
