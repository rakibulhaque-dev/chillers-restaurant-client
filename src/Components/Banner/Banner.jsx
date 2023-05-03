import React from 'react'
import footerImage from '../../assets/images/footer.jpg';
function Banner() {
    return (
        <div className=''>
            <div className="min-h-screen mb-3 shadow-lg hero" style={{ backgroundImage: `url(${footerImage})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="text-center hero-content text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold text-purple-300">Welcome to American Foods</h1>
                        <p className="mb-5">
                        American cuisine consists of the cooking style and traditional dishes prepared in the United States. It has been significantly influenced by Europeans, indigenous Native Americans, Africans, Asians, Pacific Islanders, and many other cultures and traditions.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;
