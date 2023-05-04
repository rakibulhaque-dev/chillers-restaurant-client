import React from 'react';
import { FaDollarSign } from 'react-icons/fa';

const FavoriteCard = ({ data }) => {
    const { chef_id, img, chef_name, price, recipe_name } = data;
    return (
        <div className='container mx-auto'>
            <div className='flex items-center justify-between p-3 mb-5 border rounded-lg shadow-lg'>
                <div className='flex items-center gap-3 mb-5'>
                    <img className='w-16 rounded-lg h-14' src={img} alt="" />
                    <div>
                        <p>{recipe_name}</p>
                        <p><small>{chef_name}</small></p>
                        <p><small className='flex items-center gap-2 text-yellow-500'><FaDollarSign></FaDollarSign> {price}</small></p>
                    </div>
                </div>
                <div>
                    <button className='btn btn-outline'>Delete</button>
                </div>
            </div>

        </div>
    );
};

export default FavoriteCard;