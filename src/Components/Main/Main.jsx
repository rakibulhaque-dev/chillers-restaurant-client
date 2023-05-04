import React from 'react'
import Header from '../Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Chef from '../Chef/Chef';

function Main() {

    return (
        <div className='container mx-auto'>
            <Header></Header>
            <Outlet></Outlet>
            <Chef></Chef>
            <Footer></Footer>
        </div>
    )
}

export default Main;
