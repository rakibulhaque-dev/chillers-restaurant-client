import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import { AuthContext } from '../../provider/AuthProvider';

const Register=()=> {
    const [error, setError] = useState('')
    const {createUser} = useContext(AuthContext)
    const handleRegister = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email, password)
        const photoURL = form.photo.value;
        if(password !== confirm){
            setError('Password did not matched!')
            return;
        } else if(password.length < 6){
            setError('Your password must 6 characters')
            return
        }

        createUser(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
            form.reset()
        })
        .catch(error =>{
            setError(error.message)
        })
    }
    return (
        <div className='container mx-auto text-center'>
            <Header></Header>
            <form onSubmit={handleRegister} className='items-center p-6 text-center bg-slate-100'>
                <h2 className='mb-2 font-bold text-purple-700'>Please Register!!!</h2>
                <label className="flex justify-center mb-3 input-group">
                    <span>Name</span>
                    <input type="text" name='name' placeholder="Your Name" className="shadow-lg input input-bordered" required />
                </label>
                <label className="flex justify-center mb-3 input-group">
                    <span>Photo URL</span>
                    <input type="text" name='photo' placeholder="Your photo URL" className="shadow-lg input input-bordered" />
                </label>

                <label className="flex justify-center input-group">
                    <span>Email</span>
                    <input type="email" name='email' placeholder="Your Email" className="shadow-lg input input-bordered" required />
                </label>
                <label className="flex justify-center mt-3 input-group">
                    <span>Password</span>
                    <input type="password" name="password" placeholder="Your password" className="shadow-lg input input-bordered" required />
                </label>
                <label className="flex justify-center mt-3 input-group">
                    <span>Confirm Password</span>
                    <input type="password" name="confirm" placeholder="Confirm password" className="shadow-lg input input-bordered" required />
                </label>
                <p className='p-4 text-red-600'>{error}</p>

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
