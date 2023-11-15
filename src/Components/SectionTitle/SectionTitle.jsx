import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='md:w-4/12 my-8 mx-auto text-center'>
            <p className='text-yellow-500 text-center'>---{subHeading}---</p>
            <h3 className='text-center text-3xl uppercase mb-2 border-y-4 py-4'>{heading}</h3>
        </div>
    );
};

export default SectionTitle;