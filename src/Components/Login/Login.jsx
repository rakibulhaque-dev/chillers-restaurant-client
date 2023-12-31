import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { AuthContext } from '../../provider/AuthProvider';
import { BsFillXSquareFill } from "react-icons/bs";

const Login = () => {
    const { signIn, signInGitHub, signInGoogle } = useContext(AuthContext)
    
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location) 

    const from = location.state?.from?.pathname || '/';

    const [user, setUser] = useState(null)
    const [error, setError] = useState('')
    const mainError = error.slice(22, 36)

    
    const loginWithEmail = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                setUser(loggedUser)
                form.reset()
                navigate(from, {replace: true})
            })
            .catch(error => {
                setError(error.message)
                console.log(error.message)
            })
    };


    return (
        <div className='container mx-auto text-center'>
            <Header data={user}></Header>
            <form onSubmit={loginWithEmail} className='items-center p-6 text-center bg-slate-100'>
                <h2 className='mb-2 font-bold text-purple-700'>Please Login!!!</h2>
                <label className="flex justify-center input-group">
                    <span>Email</span>
                    <input type="email" name='email' placeholder="Your Email" className="shadow-lg input input-bordered" required />
                </label>
                <label className="flex justify-center mt-3 input-group">
                    <span>Password</span>
                    <input type="password" name='password' placeholder="Your password" className="shadow-lg input input-bordered" required />
                </label>
                <div>
                    {
                        error &&
                        <div>
                            <div className='flex items-center justify-center gap-3 p-2 mt-3 bg-red-100 shadow-lg'>
                                <BsFillXSquareFill className='text-red-600'></BsFillXSquareFill>
                                <p className='text-red-600'>Sorry, {mainError}!!!</p>
                                <Link className='text-blue-600 hover:text-black hover:font-bold hover:animate-pulse' to="/register"><small>Please, create an Account...</small></Link>
                            </div>
                        </div>
                    }

                </div>
                <div className='form-control'>
                    <button className='px-5 py-3 mt-3 font-bold text-white bg-purple-700 rounded-sm shadow-lg' type="submit" value="login">Login</button>
                </div>
                <p className='mt-2'><small>Don't have any account? <Link className='font-bold text-blue-800' to="/register">Please Register</Link></small> </p>
                <div className='justify-center gap-3 md:flex lg:flex'>
                    <button onClick={signInGitHub} className='px-4 border border-purple-800'><span className='flex items-center gap-2 text-purple-700'><FaGithub /> GitHub Sign-in</span></button>
                    <button onClick={signInGoogle} className='px-4 border border-purple-800'><span className='flex items-center gap-2 text-purple-700'><FaGoogle />Google Sign-in</span></button>
                </div>
            </form>
            <Footer></Footer>
        </div>
    );
}

export default Login;
