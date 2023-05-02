// eslint-disable-next-line no-unused-vars
import React from 'react'
import footerImage from '../../assets/images/footer.jpg';
function Banner() {
    return (
        <div>
            <div className="min-h-screen mb-3 shadow-lg hero" style={{ backgroundImage: `url(${footerImage})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="text-center hero-content text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;
