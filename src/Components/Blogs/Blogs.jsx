import PropTypes from 'prop-types';

import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({handleBookmarks, handleReadTime}) => {

    const [blogs, setBlogs] = useState([]);

    useEffect( () => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])

    return (
        <div className="w-2/3 mb-10">
            <h2 className="text-2xl font-bold my-4">Blogs: {blogs.length}</h2>
            {
                blogs.map(blog => <Blog key={blog.id} blog={blog} handleBookmarks={handleBookmarks} handleReadTime={handleReadTime}></Blog>)
            }
            
        </div>
    );
};

Blogs.propTypes = {
    handleBookmarks: PropTypes.func,
    handleReadTime: PropTypes.func
}

export default Blogs;