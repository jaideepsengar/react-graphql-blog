import React from 'react';

const Blog = (props) => (
    <div key={props.blog.id}>
        <p>{`${props.blog.title} by ${props.blog.author}`}</p>
    </div>
);
export default Blog;