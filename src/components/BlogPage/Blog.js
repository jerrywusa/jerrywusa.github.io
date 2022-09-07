import React from "react";
import style from "../../sass/BlogPage/Blog.module.scss";

function Blog({ titleText, descriptionText, publishDate, bodyText }) {
  return (
    <div className={style["container"]}>
      <p>{titleText}</p>
      <p>{publishDate}</p>
      <p>{descriptionText}</p>
      <p>{bodyText}</p>
    </div>
  );
}

export default Blog;
