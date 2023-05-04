import React from 'react';
import Header from '../Shared/Header/Header';
import FavoriteCard from '../FavoriteCard/FavoriteCard';
import { FaHeart, FaHeartBroken } from 'react-icons/fa';

const Favorites = () => {
    const data = JSON.parse(localStorage.getItem("order")) || []
    console.log(data)
    return (
        <div>
            <Header></Header>
            <h3 className='p-5 font-bold text-center text-purple-600'>Favorites: <span className='text-2xl font-extrabold text-red-600'>{data.length}</span> items</h3>


            {
                data.map(n=><FavoriteCard key={n.chef_id} data={n}></FavoriteCard>)
            }

        </div>
    );
};

export default Favorites;