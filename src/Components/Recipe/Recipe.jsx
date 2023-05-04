import React from 'react';
import Header from '../Shared/Header/Header';
import { useLoaderData, useParams } from 'react-router-dom';
import SingleRecipe from '../SingleRecipe/SingleRecipe';
import { FaAddressBook, FaCookie, FaHeart, FaUser } from 'react-icons/fa';

const Recipe = () => {

    const { id } = useParams()
    const data = useLoaderData()
    console.log(data)
    const { chef_id, recipe, chef_img, chef_name, years_of_experience, num_recipes, num_likes } = data

    return (
        <div className='container mx-auto'>
            <Header></Header>
            <div className='container p-4 mx-auto mb-10 font-extrabold text-center text-purple-700 shadow-lg bg-slate-100'>
                <h3>Recipe of <span className='text-red-700'>{chef_name}</span> </h3>
                <p>{years_of_experience} years of Experience</p>
            </div>
            <div className='p-8 mb-6 border rounded-lg shadow-lg bg-slate-100'>

                <div className='container grid-cols-2 gap-3 mx-auto md:grid lg:grid'>
                    <div className='flex items-center justify-center gap-4'>
                        <img className='items-center mb-4 rounded-full w-44 h-44' src={chef_img} alt="" />
                        <p className='flex items-center gap-3 rounded-lg'>
                            <FaUser></FaUser>
                            <small>Chef Name: {chef_name}</small>
                        </p>
                    </div>
                    <div className='p-3 bg-white rounded-lg'>
                        <p className='flex items-center gap-4'> <FaAddressBook></FaAddressBook> <small>Experience: </small>{years_of_experience} Year</p>
                        <p className='flex items-center gap-4'><small>Liked:</small> {num_likes} <FaHeart className='text-red-600'></FaHeart></p>
                        <p className='flex items-center gap-4'><FaCookie className='text-purple-700'></FaCookie> <small>Recipes:</small> {recipe.length} items</p>
                        <p><small className='text-slate-400'><span className='font-bold text-red-300'>About:</span> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, nihil officiis, aut ipsa esse ratione, laudantium veniam eius nemo delectus tenetur. Incidunt, culpa necessitatibus ipsam voluptas ex non eligendi nesciunt.</small></p>
                    </div>
                </div>


            </div>

            <div className='container grid-cols-3 gap-5 mx-auto md:grid lg:grid'>
                {
                    recipe.map(n => <SingleRecipe key={n.recipe_name} data={n} chefData={data}></SingleRecipe>)
                }
            </div>
        </div>
    );
};

export default Recipe;