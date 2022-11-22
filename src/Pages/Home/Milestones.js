import React from 'react';
import MilestoneCard from './MilestoneCard';

const Milestones = () => {

    return (
        <div className='container'>
            <div className="divider text-3xl font-bold text-center my-10">
                যা যা থাকছে আমাদের কোর্সে
            </div>
            <div class="grid grid-cols-3 gap-4">
                <MilestoneCard></MilestoneCard>
                <MilestoneCard></MilestoneCard>
                <MilestoneCard></MilestoneCard>
            </div>



        </div>
    );
};

export default Milestones;