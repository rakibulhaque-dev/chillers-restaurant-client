// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';

function Register() {
    const handleRegister = () => {
        event.preventDefault()
    }
    return (
        <div className='container mx-auto text-center'>
            <Header></Header>
            <form onSubmit={handleRegister} className='items-center p-6 text-center bg-slate-100'>
                <h2 className='mb-2 font-bold text-purple-700'>Please Register!!!</h2>
                <label className="flex justify-center mb-3 input-group">
                    <span>Name</span>
                    <input type="text" placeholder="Your Name" className="shadow-lg input input-bordered" required />
                </label>
                <label className="flex justify-center mb-3 input-group">
                    <span>Photo URL</span>
                    <input type="text" placeholder="Your photo URL" className="shadow-lg input input-bordered" required />
                </label>

                <label className="flex justify-center input-group">
                    <span>Email</span>
                    <input type="email" placeholder="Your Email" className="shadow-lg input input-bordered" required />
                </label>
                <label className="flex justify-center mt-3 input-group">
                    <span>Password</span>
                    <input type="password" placeholder="Your password" className="shadow-lg input input-bordered" required />
                </label>

                <div className='form-control'>
                    <button className='px-5 py-3 mt-3 font-bold text-white bg-purple-700 rounded-sm shadow-lg' type="submit">Register</button>
                </div>
                <p className='mt-2'><small>Have an account? <Link className='font-bold text-blue-800' to="/login">Please Login</Link></small> </p>
            </form>
            <Footer></Footer>
        </div>
    )
}

export default Register;
