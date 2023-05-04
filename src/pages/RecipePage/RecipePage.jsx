import React from 'react';
import { useLoaderData } from 'react-router-dom';
import RecipeCard from '../../Components/RecipeCard/RecipeCard';
import { HiOutlineThumbUp } from "react-icons/hi";
import LazyLoad from 'react-lazy-load';

const RecipePage = () => {
    const singleChefData = useLoaderData();
    const {photo,name,bio,likes,numberOfRecipe,experience, chefrecipes,id} = singleChefData;
    return (
        <div>
            {/* chef recipe page Banner section  */}
            <div className='text-center py-4'>
                <img className='img-fluid'style={{width:'100px'}} src="https://cdn.pixabay.com/photo/2012/04/11/18/07/chef-29205_960_720.png" alt="chef graphic photo" />
                <h4 className='py-2'>Chef information Page</h4>
            </div>
            {/* chef recipe page Banner section  */}
            {/* chef personal info and his/ her recipes  */}
                <section className='container pb-5 mb-5'>
                        <div className="pb-5">
                            <div className='p-3 row'>
                                <div className='text-center col-md-5'>
                                <LazyLoad height={400}>
                                <img style={{width:'100%', height:'400px'}} className='img-fluid rounded' src={photo} alt={`${name} photo`} />
                                </LazyLoad>
                                </div>
                                <div className='col-md-7'>
                                    <h5 className='pt-3'>{name}</h5>
                                    <p>{bio}</p>
                                    <p className='text-primary'> <HiOutlineThumbUp/> {likes}</p>
                                    <p>{numberOfRecipe}</p>
                                    <p>{experience}</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                                {
                                    chefrecipes.map((chefrecipe, idx) => <RecipeCard
                                    chefrecipe={chefrecipe}
                                    key={idx}
                                    ></RecipeCard>)
                                }
                    </div>
                </section>
            {/* chef personal info and his/ her recipes  */}
        </div>
    );
};

export default RecipePage;