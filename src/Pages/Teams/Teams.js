import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TeamCard from './TeamCard';

const Teams = () => {
    const teams = useLoaderData()
    return (
        <div className='container'>
            <div className="flex justify-between">
                {
                    teams.map(team => <TeamCard key={teams.id} team={team}></TeamCard>)
                }
            </div>



        </div>
    );
};

export default Teams;