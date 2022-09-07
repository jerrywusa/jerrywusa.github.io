import React, { useEffect, useState } from "react";
import style from "../../sass/BlogPage/BlogPage.module.scss";
import Page from "../shared/Page";
import Blogs from "./Blogs";
import BlogForm from "./BlogForm";
import axios from "axios";

function BlogPage({ bindScrollSnap, page1 }) {
  const [container] = useState(React.createRef());
  useEffect(() => {
    bindScrollSnap(container);
  });

  const [blogs, getBlogs] = useState("");

  // blogCount may not acutally equal the number of blogs
  // It is used to rerender the blogs in the useEffect
  const [blogCount, setBlogCount] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  useEffect(() => {
    getAllBlogs();
  }, [blogCount]);

  const getAllBlogs = () => {
    axios
      .get(`/api/blog`)
      .then((response) => {
        const allBlogs = response.data;
        getBlogs(allBlogs);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  const postBlog = ({ date, titleText, descriptionText, bodyText }) => {
    setIsSubmitting(true);
    const blog = {
      publish_date: date,
      title_text: titleText,
      description_text: descriptionText,
      body_text: bodyText,
    };
    axios
      .post("/api/blog", blog)
      .then((response) => {
        setBlogCount(blogCount + 1);
        setIsSubmitting(false);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  const deleteBlog = (blogId) => {
    axios
      .delete(`/api/blog/${blogId}`)
      .then((response) => {
        setBlogCount(blogCount - 1);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  return (
    <div className={style["container"]} ref={container}>
      <Page
        content={
          <>
            <Blogs blogs={blogs} deleteBlog={deleteBlog} />
            <BlogForm postBlog={postBlog} isSubmitting={isSubmitting} />
          </>
        }
        backgroundColor={page1.backgroundColor}
      />
    </div>
  );
}

export default BlogPage;
