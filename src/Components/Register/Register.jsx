import React from 'react'
import { Link } from 'react-router-dom';

function Register() {
    const handleRegister = () =>{
        event.preventDefault()
    }
    return (
        <div className='container mx-auto text-center'>
            <form onSubmit={handleRegister} className='items-center p-6 text-center bg-slate-100'>
            <h2 className='mb-2 font-bold text-purple-700'>Please Register!!!</h2>
                <label className="flex justify-center mb-3 input-group">
                    <span>Name</span>
                    <input type="text" placeholder="Your Name" className="shadow-lg input input-bordered" />
                </label>
                <label className="flex justify-center input-group">
                    <span>Email</span>
                    <input type="email" placeholder="Your Email" className="shadow-lg input input-bordered" />
                </label>
                <label className="flex justify-center mt-3 input-group">
                    <span>Password</span>
                    <input type="password" placeholder="Your password" className="shadow-lg input input-bordered" />
                </label>
               
                <button className='px-5 py-3 mt-3 font-bold text-white bg-purple-700 rounded-sm shadow-lg' type="submit">Register</button>
            <p className='mt-2'>Have an account? <Link className='font-bold text-blue-800' to="/login">Please Login</Link> </p>
            </form>
        </div>
    )
}

export default Register;
