import React from 'react';

const Review = (props) => {
    const { id, name, description, image, rating } = props.review;
    return (
        <div className='p-4 border-2 border-lime-600 bg-lime-100'>
            <div className='flex items-center justify-between p-4'>
                <img className='w-14 h-14 rounded-full' src={image} alt="" />
                <h1 className='text-lg font-extrabold text-purple-900'>{name}</h1>
                <p className='font-bold text-teal-900'>Rating:{rating}</p>
            </div>

            
            <p className='text-left text-lg text-slate-600'>{description}</p>
            
        </div>
    );
};

export default Review;