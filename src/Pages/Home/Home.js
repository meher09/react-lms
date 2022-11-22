import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from './Banner';
import Milestones from './Milestones';

const Home = () => {
    const milestons = useLoaderData()

    return (
        <>
            <Banner></Banner>
            <Milestones></Milestones>
        </>
    );
};

export default Home;