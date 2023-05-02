// eslint-disable-next-line no-unused-vars
import React from 'react'

function Header() {
    return (
        <div className='container items-center justify-around p-5 mx-auto mb-4 shadow-lg md:flex'>
            <h3 className='text-2xl font-extrabold'><span className='text-purple-800'>CHILL</span>ERS <span className='text-purple-800'>REST</span>AURANT</h3>
            <ul className='flex gap-3'>
                <li><a className='font-bold text-purple-600' href="/">Home</a></li>
                <li><a className='font-bold text-purple-600' href="/blog">Blog</a></li>
                <li><a className='font-bold text-purple-600' href="/register">Register</a></li>
                <li><a className='font-bold text-purple-600' href="/login">Login</a></li>
            </ul>            
        </div>
    )
}

export default Header;
