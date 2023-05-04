import React, { useState } from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RecipeCard = ({chefrecipe}) => {
    const { recipe1name, recpelogo, ratings, cookmethod, ingradients } = chefrecipe;
    const [btnCount, setBtnCount] = useState(0)
    const handleClik =()=>{
        let newCount = btnCount + 1
        setBtnCount(newCount);
    }
    const toasti = ()=> toast('The recipe is your favorite')
    return (
        <div className='p-3 mb-2 col-md-4'>
                <ToastContainer></ToastContainer>
            <div>
                <img style={{height: '300px', width:'100%'}} className='img-fluid rounded' src={recpelogo} alt="" />
            </div>
            <div>
            <h4 className='pt-3'>Recipe Name: {recipe1name}</h4>
                <h5 className='py-2'>Ingradients for making: </h5>
                {
                    ingradients.map((ingra, idx) => <span key={idx} className=''> * {ingra}</span>)
                }
                <h6 className='pt-3'>Cooking Method</h6>
            <p>{cookmethod}</p>
            <p> <Rating
            placeholderRating={ratings}
            readonly
            emptySymbol={<FaRegStar></FaRegStar>}
            placeholderSymbol={<FaStar></FaStar>}
            fullSymbol={<FaStar></FaStar>}/></p>
            {/* <Rating></Rating> */}
             <button disabled={btnCount > 0 && 'disabled'} onClick={()=>{{ handleClik()}; {toasti()}}} className='btn btn-dark '>Favorite</button>
            </div>
        </div>
    );
};

export default RecipeCard;