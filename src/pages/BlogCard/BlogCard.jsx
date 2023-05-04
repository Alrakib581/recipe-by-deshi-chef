import React from 'react';

const BlogCard = ({blog}) => {
    const {title, details} = blog;
    return (
        <div className='col-md-6'>
            <div className='p-4'>
                <h2>{title}</h2>
                <p>{details}</p>
            </div>
        </div>
    );
};

export default BlogCard;