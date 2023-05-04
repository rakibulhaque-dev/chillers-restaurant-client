import React from 'react';
import Header from '../Shared/Header/Header';
import { useLoaderData, useParams } from 'react-router-dom';
import SingleRecipe from '../SingleRecipe/SingleRecipe';

const Recipe = () => {

    const { id } = useParams()
    const data = useLoaderData()
    console.log(data)
    const { chef_id, recipe, chef_name, years_of_experience, num_recipes, num_likes } = data

    return (
        <div>
            <Header></Header>
            <div className='container p-4 mx-auto mb-10 font-extrabold text-center text-purple-700 shadow-lg bg-slate-100'>
                <h3>Recipe of <span className='text-red-700'>{chef_name}</span> </h3>
                <p>{years_of_experience} years of Experience</p>
            </div>

            <div className='container grid-cols-3 gap-5 mx-auto md:grid lg:grid'>
                {
                    recipe.map(n => <SingleRecipe key={n.recipe_name} data={n}></SingleRecipe>)
                }
            </div>
        </div>
    );
};

export default Recipe;