import React from 'react'
import foodImage from '../../assets/images/foods.png';
function Banner() {
    return (
        <div className='container mx-auto border rounded-lg shadow-lg'>
            <div className="items-center justify-center gap-4 p-6 sm:flex-row-reverse md:flex lg:flex sm:text-center">
                <div className='mr-5 text-left'>
                    <h1 className="mb-5 text-5xl font-bold text-pink-500">Welcome to American Foods</h1>
                    <p className="mb-5 text-black">
                        American cuisine consists of the cooking style and traditional dishes prepared in the United States. It has been significantly influenced by Europeans, indigenous Native Americans, Africans, Asians, Pacific Islanders, and many other cultures and traditions.</p>
                </div>
                <div>
                    <img className='justify-center w-auto h-auto mx-auto text-center' src={foodImage} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Banner;
