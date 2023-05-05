import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import ChefCard from '../ChefCard/ChefCard';

const Chef = () => {
    const { chef } = useContext(AuthContext)
    return (
        <div className='container mx-auto'>
            <div className='p-4 text-center rounded-lg shadow-lg'>
                <h1 className='text-3xl font-extrabold text-purple-800'>We have <span className='text-red-600'>{chef.length}</span> international Chef!</h1>
            </div>
            <div className='grid-cols-3 gap-10 mt-9 md:justify-between lg:justify-between md:grid lg:grid'>
                {
                    chef.map(p => <ChefCard
                        key={p.chef_id}
                        data={p}
                    ></ChefCard>)
                }
            </div>
        </div>
    );
};

export default Chef;