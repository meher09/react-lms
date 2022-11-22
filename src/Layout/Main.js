import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer';
import Navigation from '../Pages/Shared/Navigation';

const Main = () => {
    return (
        <>
            <Navigation></Navigation>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default Main;