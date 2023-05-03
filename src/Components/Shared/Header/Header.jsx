// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react'
import { AuthContext } from '../../../provider/AuthProvider';
import { FaUser } from 'react-icons/fa';

const Header = () => {
    const { user , logOut} = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
        .then(result =>{})
        .catch(error => console.error(error))
    }
    return (
        <div className='container items-center justify-around p-5 mx-auto mb-4 shadow-lg md:flex'>
            <h3 className='text-2xl font-extrabold'><span className='text-purple-800'>CHILL</span>ERS <span className='text-purple-800'>REST</span>AURANT</h3>
            <ul className='flex gap-3'>
                <li><a className='font-bold text-purple-600' href="/">Home</a></li>
                <li><a className='font-bold text-purple-600' href="/blog">Blog</a></li>
                <li><a className='font-bold text-purple-600' href="/favorites">Favorites</a></li>
                <li><a className='font-bold text-purple-600' href="/register">Register</a></li>
                <li><a className='font-bold text-purple-600' href="/login">Login</a></li>
                <li><a className='font-bold text-purple-600' href="/chef">Chef</a></li>
                {/* <FaUser /> */}
            </ul>
           { user &&
            <span>Welcome {user?.displayName} <button className='px-2 py-1 text-white bg-purple-500 rounded-sm hover:bg-purple-900' onClick={handleLogOut}>Log Out</button></span>
           }
        </div>
    )
}

export default Header;
