import React from 'react';
import ReactToPrint from 'react-to-print';
import { useRef } from 'react';

const BlogCard = ({blog}) => {
    const ref = useRef()
    const {title, details} = blog;
    return (
        <div className='col-md-6'>
            <div className=''>
               <div ref={ref} className='p-4'>
                    <h2>{title}</h2>
                    <p>{details}</p>
               </div>
                <ReactToPrint trigger={()=> <button className='btn btn-outline-dark ms-4'>Print this blog</button>} content={()=> ref.current} />
            </div>
               
        </div>
    );
};

export default BlogCard;