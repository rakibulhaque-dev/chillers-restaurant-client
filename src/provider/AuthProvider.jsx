import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
import { useLocation, useNavigate } from 'react-router-dom';

export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [chef, setChef] = useState([])
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
   
    const githubProvider = new GithubAuthProvider();
    const googleProvider = new GoogleAuthProvider();

    // const navigate = useNavigate();
    // const location = useLocation();
    // const from = location.state?.from?.pathname || '/';
   
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signInGitHub = (event) => {
        setLoading(true)
        event.preventDefault();
        signInWithPopup(auth, githubProvider)
        .then(result=>{
            const user = result.user;
            console.log(user);
            setUser(user)
        })
        .catch(error=>{
            console.log("error", error.message)
        })
    }
    const signInGoogle = (event) => {
        event.preventDefault();
        setLoading(true)
        signInWithPopup(auth, googleProvider)
        .then(result=>{
            const user = result.user;
            // console.log(user)
            setUser(user)
        })
        .catch(error=>{
            console.log("errr", error.message)
        })
    }
    const logOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false)
        })
        return () => {
            return unsubscribe();
        }
    }, [])

    useEffect(() => {
        fetch('http://localhost:5000/chef')
            .then(res => res.json())
            .then(data => setChef(data))
            .catch(error => console.error(error))
    }, [])
    const authInfo = {
        user,
        chef,
        loading,
        createUser,
        signIn,
        logOut,
        signInGitHub,
        signInGoogle
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;