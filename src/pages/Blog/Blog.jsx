import React, { useEffect, useState } from 'react';
import BlogCard from '../BlogCard/BlogCard';
import LoadingSpinner from '../../Components/Spinner/Spinner';

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(()=>{
        setIsLoading(true)
        fetch('https://blog-rakib0157.vercel.app/')
        .then(res => res.json())
        .then(data =>{
            setBlogs(data)
            setIsLoading(false)

        })
    },[])
    return (

        <div>
            <div className='text-center py-4'>
                <img className='img-fluid'style={{width:'500px'}} src="https://cdn.pixabay.com/photo/2021/02/11/11/21/meeting-6004997_960_720.png" alt="" />
            </div>
            {isLoading && <LoadingSpinner />}
            <div className='container py-5'>
                <div className='row'>
                {
                        blogs.map(blog => <BlogCard
                            key={blog.id}
                            blog={blog}
                        ></BlogCard>)
                    }
            </div>
            </div>
        </div>
    );
};

export default Blog;