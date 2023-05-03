import React, { Children, useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { AuthContext } from '../../provider/AuthProvider';


const Login = () => {
    const { signIn ,signInGitHub, signInGoogle} = useContext(AuthContext)
    
    const [user, setUser] = useState(null)
    
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
  

    const loginWithEmail = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password)

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                setUser(loggedUser)
                form.reset()
                navigate(from, { replace: true })
            }) 
            .catch(error => {
                console.log(error)
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
