import React from 'react';
import { HiOutlineThumbUp } from "react-icons/hi";
import { Link } from 'react-router-dom';
const ChefCard = ({chef}) => {
    // console.log(chef)
    const {photo,name,experience,likes,numberOfRecipe,id} = chef
    return (
        <div className='col-md-4'>
            <div className='border rounded p-4'>
            <img style={{height:'230px', width:'100%'}} className='img-fluid rounded' src={photo} alt="Chef Photo" />

                <h4 className='mt-3'>{name}</h4>
                <p>{experience}</p>
                <p>{numberOfRecipe} of recipes.</p>
                <p className='text-primary fw-semibold'><HiOutlineThumbUp/> {likes}</p>

                 <Link className='btn btn-dark' to={`/recipes/${id}`}>View Recipes</Link>
            </div>
        </div>
    );
};

export default ChefCard;