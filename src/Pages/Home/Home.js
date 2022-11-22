import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from './Banner';
import MilestoneCard from './MilestoneCard';

const Home = () => {
    const milestones = useLoaderData()
    return (
        <>

            <Banner></Banner>
            <div className='container'>
                <div className="divider text-3xl font-bold text-center my-10">
                    যা যা থাকছে আমাদের কোর্সে
                </div>
                <div className="grid grid-cols-3 gap-4 mb-6">
                    {
                        milestones.map(milestone => <MilestoneCard
                            key={milestone.id}
                            milestone={milestone}
                        >
                        </MilestoneCard>)
                    }

                </div>
            </div>
        </>
    );
};

export default Home;