// eslint-disable-next-line no-unused-vars
import React from 'react'
import Header from '../Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';

function Main() {
    return (
        <div className='bg-slate-400'>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    )
}

export default Main;
