import React from 'react';
import MilestoneCard from './MilestoneCard';

const Milestones = () => {
    return (
        <div className='container'>
            <div className="divider text-3xl font-bold text-center my-10">
                যা যা থাকছে আমাদের কোর্সে
            </div>
            <MilestoneCard></MilestoneCard>
        </div>
    );
};

export default Milestones;