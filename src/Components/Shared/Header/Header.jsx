import React, { useContext, useState } from 'react'
import { AuthContext } from '../../../provider/AuthProvider';
import { FaUser, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const { user, logOut } = useContext(AuthContext)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleLogOut = () => {
    logOut()
      .then(result => { })
      .catch(error => console.error(error))
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className='container items-center justify-between p-5 mx-auto mb-4 shadow-lg md:flex'>
      <div className='flex items-center justify-between'>
        <h3 className='text-2xl font-extrabold'><span className='text-purple-800'>CHILL</span>ERS <span className='text-purple-800'>REST</span>AURANT</h3>
        <div className='md:hidden'>
          {isMenuOpen ? (
            <FaTimes onClick={toggleMenu} className='text-2xl cursor-pointer' />
          ) : (
            <FaBars onClick={toggleMenu} className='text-2xl cursor-pointer' />
          )}
        </div>
      </div>
      <ul className={`md:flex ${isMenuOpen ? 'flex flex-col mt-4' : 'hidden'} md:mt-0 md:flex-row`}>
        <li><a className='block mt-4 font-bold text-purple-600 md:inline-block md:mt-0 md:ml-6' href="/">Home</a></li>
        <li><a className='block mt-4 font-bold text-purple-600 md:inline-block md:mt-0 md:ml-6' href="/blog">Blog</a></li>
        <li><a className='block mt-4 font-bold text-purple-600 md:inline-block md:mt-0 md:ml-6' href="/favorites">Favorites</a></li>
        <li><a className='block mt-4 font-bold text-purple-600 md:inline-block md:mt-0 md:ml-6' href="/register">Register</a></li>
        <li><a className='block mt-4 font-bold text-purple-600 md:inline-block md:mt-0 md:ml-6' href="/login">Login</a></li>
        <li><a className='block mt-4 font-bold text-purple-600 md:inline-block md:mt-0 md:ml-6' href="/chef">Chef</a></li>
        {/* <FaUser /> */}
      </ul>
      {/* {user &&
                <span className='text-xs'>Welcome {user?.displayName} </span>
            } */}
      <div className='flex items-center justify-center gap-4'>
        {
          user?.photoURL ? <img className='w-8 h-8 rounded-full' src={user.photoURL} alt="" />
            : <FaUser></FaUser>}
        {
          user?.displayName ? <span>{user.displayName}</span> : ""
        }
        <small>
          {user &&
            <button className='px-2 py-1 text-white bg-purple-500 rounded-sm hover:bg-purple-900' onClick={handleLogOut}>Log Out</button>
          }
        </small>
      </div>
    </div>
  )
}

export default Header;
