import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <div className='text-center'>
                <img className='img-fluid' src="https://cdn.pixabay.com/photo/2021/02/26/16/29/error-404-6052476_960_720.png" alt="" />
            <div>
                <Link className='text-danger' to='/'>Go To Home page</Link>
            </div>

            </div>
        </div>
    );
};

export default ErrorPage;