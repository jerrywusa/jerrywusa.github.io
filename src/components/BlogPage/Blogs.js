import React from "react";
import Blog from "./Blog";

function Blogs({ blogs, deleteBlog }) {
    if (blogs.length > 0) {
        return (
            <>
                {blogs.map((blog) => (
                    <div key={blog.id}>
                        <Blog
                            titleText={blog.title_text}
                            descriptionText={blog.description_text}
                            publishDate={blog.publish_date}
                            bodyText={blog.body_text}
                        />

                        <button
                            type="button"
                            onClick={() => deleteBlog(blog.id)}
                        >
                            delete
                        </button>
                    </div>
                ))}
            </>
        );
    } else {
        return <p>no blogs yet</p>;
    }
}

export default Blogs;
