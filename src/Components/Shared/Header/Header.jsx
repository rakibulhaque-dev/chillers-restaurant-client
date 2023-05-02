// eslint-disable-next-line no-unused-vars
import React from 'react'

function Header() {
    return (
        <div>
            <ul className='flex gap-3'>
                <li><a href="/">Home</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/register">Register</a></li>
                <li><a href="/login">Login</a></li>
            </ul>            
        </div>
    )
}

export default Header;
