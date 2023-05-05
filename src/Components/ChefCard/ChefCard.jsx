import React from 'react';
import { FaAngleDoubleRight, FaDisease, FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const ChefCard = ({ data }) => {
    const { chef_name, years_of_experience, num_recipes, num_likes, chef_img, chef_id } = data;
    return (
        <div className='container items-center justify-center p-4 mx-auto text-center bg-pink-100 border rounded-md shadow-lg'>
            <h2 className='p-4 mb-5 bg-white rounded-lg'><span className='font-bold'><small>Chef Name:</small></span> {chef_name}</h2>
            <img src={chef_img} className='mx-auto rounded-full w-44 h-44' alt="" />
            <p><span className='font-bold'>Experience:</span> {years_of_experience} Years</p>
            <p className='border'><span className='font-bold'>Recipe:</span> {num_recipes} items</p>
            <p><span className='flex items-center justify-center gap-3 mx-auto text-red-700'><FaHeart></FaHeart> {num_likes}</span> </p>

            <button className='px-5 py-2 mt-5 mb-0 btn-outline btn'>
                <Link className='flex items-center gap-3' to={`/recipe/${chef_id}`}> See Recipe <FaAngleDoubleRight></FaAngleDoubleRight></Link>
            </button>

        </div>
    );
};

export default ChefCard;