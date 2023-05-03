import React from 'react'
import { Link } from 'react-router-dom';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import { FaGoogle, FaGithub } from 'react-icons/fa';


function Login() {

    const handleSubmit = (e) => {
        e.preventDefault();

    };

    return (
        <div className='container mx-auto text-center'>
            <Header></Header>
            <form onSubmit={handleSubmit} className='items-center p-6 text-center bg-slate-100'>
                <h2 className='mb-2 font-bold text-purple-700'>Please Login!!!</h2>
                <label className="flex justify-center input-group">
                    <span>Email</span>
                    <input type="email" placeholder="Your Email" className="shadow-lg input input-bordered" required />
                </label>
                    <label className="flex justify-center mt-3 input-group">
                        <span>Password</span>
                        <input type="password" placeholder="Your password" className="shadow-lg input input-bordered" required />
                    </label>

                <div className='form-control'>
                    <button className='px-5 py-3 mt-3 font-bold text-white bg-purple-700 rounded-sm shadow-lg' type="submit">Login</button>
                </div>
                <p className='mt-2'><small>Don't have any account? <Link className='font-bold text-blue-800' to="/register">Please Register</Link></small> </p>
                <div className='justify-center gap-3 md:flex lg:flex'>
                    <button className='px-4 border border-purple-800'><span className='flex items-center gap-2 text-purple-700'><FaGithub/> GitHub Sign-in</span></button>
                    <button className='px-4 border border-purple-800'><span className='flex items-center gap-2 text-purple-700'><FaGoogle/>Google Sign-in</span></button>
                </div>
            </form>
            <Footer></Footer>
        </div>
    );
}

export default Login;
