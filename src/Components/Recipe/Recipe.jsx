import React from 'react';
import Header from '../Shared/Header/Header';

const Recipe = () => {
    return (
        <div>
            <Header></Header>
            <div className='container p-4 mx-auto mb-16 font-extrabold text-center text-purple-700 shadow-lg bg-slate-100'>
                <h3>Recipe of <span className='text-red-700'>Alison B</span> </h3>
            </div>

            <ul className='text-center'>
                <li>Alu</li>
                <li>Morich</li>
                <li>Peyaj</li>
                <li>Pizza</li>
                <li>Burger</li>
                <li>Coke</li>
                <li>Kacchi</li>
            </ul>
        </div>
    );
};

export default Recipe;