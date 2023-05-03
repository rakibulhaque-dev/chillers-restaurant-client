import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const ChefCard = ({data}) => {
    const {chef_name, years_of_experience, num_recipes, num_likes, chef_img} = data;
    return (
        <div className='p-4'>
            <img src={chef_img} className='w-20 h-20 rounded-full' alt="" />
            <h2><span className='font-bold'>Chef Name:</span> {chef_name}</h2>
            <p><span className='font-bold'>Experience:</span> {years_of_experience} Years</p>
            <p><span className='font-bold'>Recipe:</span> {num_recipes} items</p>
            <p className='flex items-center gap-3'><span className='text-red-700'><FaHeart></FaHeart></span> {num_likes}</p>
        
            <button className='px-5 py-2 text-white bg-purple-700 hover:bg-purple-950'><Link>See Recipe</Link></button>
            
        </div>
    );
};

export default ChefCard;