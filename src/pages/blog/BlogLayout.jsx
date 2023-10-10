import React from 'react';
import Blogs from './Blogs';
import { useLoaderData } from 'react-router-dom';

const BlogLayout = () => {
    const blogs = useLoaderData()
    return (
        <div>
            <Blogs blogs ={blogs}></Blogs>,
        </div>
    );
};

export default BlogLayout;