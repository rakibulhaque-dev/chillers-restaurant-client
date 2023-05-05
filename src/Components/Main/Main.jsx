import React from 'react'
import Header from '../Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Chef from '../Chef/Chef';
import ViewsSection from '../ViewsSection/ViewsSection';
import SiteViews from '../SiteViews/SiteViews';

function Main() {

    return (
        <div className='container mx-auto'>
            <Header></Header>
            <Outlet></Outlet>
            <ViewsSection></ViewsSection>
            <Chef></Chef>
            <SiteViews></SiteViews>
            <Footer></Footer>
        </div>
    )
}

export default Main;
