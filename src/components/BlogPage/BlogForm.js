import React, { useState } from "react";
import style from "../../sass/BlogPage/BlogForm.module.scss";

function BlogForm({ postBlog, isSubmitting }) {
  const todayDate = new Date().toLocaleDateString("en-CA");

  const [date, setDate] = useState(todayDate);
  const [titleText, setTitleText] = useState("");
  const [descriptionText, setDescriptionText] = useState("");
  const [bodyText, setBodyText] = useState("");

  return (
    <div className={style["container"]}>
      <input
        type="date"
        defaultValue={date}
        onChange={(v) => setDate(v.target.value)}
        className={style["date"]}
        id={isSubmitting && date === "" ? style["red-outline"] : style[""]}
      />
      <input
        type="text"
        placeholder="title text"
        value={titleText}
        onChange={(v) => setTitleText(v.target.value)}
        className={style["title-text"]}
        id={isSubmitting && titleText === "" ? style["red-outline"] : style[""]}
      />
      <input
        type="text"
        placeholder="description text"
        value={descriptionText}
        onChange={(v) => setDescriptionText(v.target.value)}
        className={style["description-text"]}
        id={
          isSubmitting && descriptionText === ""
            ? style["red-outline"]
            : style[""]
        }
      />
      <input
        type="text"
        placeholder="body text"
        value={bodyText}
        onChange={(v) => setBodyText(v.target.value)}
        className={style["body-text"]}
        id={isSubmitting && bodyText === "" ? style["red-outline"] : style[""]}
      />
      <button
        type="button"
        onClick={() =>
          postBlog({
            date: date,
            titleText: titleText,
            descriptionText: descriptionText,
            bodyText: bodyText,
          })
        }
        className={style["submit-button"]}
      >
        publish
      </button>
    </div>
  );
}

export default BlogForm;
