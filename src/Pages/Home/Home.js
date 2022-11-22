import React from 'react';
import Footer from '../Shared/Footer';
import Navigation from '../Shared/Navigation';
import Banner from './Banner';
import Milestones from './Milestones';

const Home = () => {
    return (
        <>
            <Navigation></Navigation>
            <Banner></Banner>
            <Milestones></Milestones>
            <Footer></Footer>
        </>
    );
};

export default Home;