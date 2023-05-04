import React from 'react';
import { FaHeart, FaRegHeart, FaDollarSign } from 'react-icons/fa';

const SingleRecipe = ({ data }) => {
    const { recipe_name, price, img, ingredients, num_likes } = data;

    const handleFavorite = (name) => {
        console.log("added fvrt", name)
    }
    return (
        <div className='container p-6 mx-auto mb-5 border rounded-md shadow-lg'>
            <img className='rounded-lg' src={img} alt="" />
            <p>Name: <small className='font-bold text-purple-600'>{recipe_name}</small></p>
            <p className='flex items-center gap-3'>Price: <small className='font-bold text-red-500'>{price}</small><FaDollarSign></FaDollarSign></p>
            <p>Ingredients: <small>{ingredients}</small></p>
            <p className='flex items-center gap-3'>Likes: <small>{num_likes}</small> <FaHeart className='text-red-600'></FaHeart> </p>

            <button onClick={()=>handleFavorite(recipe_name)} className='flex gap-4 mt-2 btn btn-outline'><FaRegHeart></FaRegHeart> <small>Add Favorite</small></button>
        </div>
    );
};

export default SingleRecipe;