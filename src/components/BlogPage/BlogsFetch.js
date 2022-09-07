import React, { useEffect, useState } from "react";
import axios from "axios";
import Blogs from "./Blogs";

// DEPRECIATED, logic merged into BlogPage.js

function BlogsFetch(props) {
    const [blogs, getBlogs] = useState("");

    useEffect(() => {
        getAllBlogs();
    }, []);

    const getAllBlogs = () => {
        axios
            .get(`/api/blog`)
            .then((response) => {
                const allBlogs = response.data;
                getBlogs(allBlogs);
            })
            .catch((error) => console.error(`Error: ${error}`));
    };

    return <Blogs blogs={blogs} />;
}

export default BlogsFetch;
