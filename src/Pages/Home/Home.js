import React from 'react';
import Footer from '../Shared/Footer';
import Navigation from '../Shared/Navigation';
import Banner from './Banner';

const Home = () => {
    return (
        <>
            <Navigation></Navigation>
            <Banner></Banner>
            <Footer></Footer>
        </>
    );
};

export default Home;