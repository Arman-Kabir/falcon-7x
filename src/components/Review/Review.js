import React from 'react';

const Review = (props) => {
    const { id, name, description, image, rating } = props.review;
    return (
        <div className='p-4 border-2 border-amber-200'>
            <div className='flex items-center justify-between p-4'>
                <img className='w-14 h-14 rounded-full' src={image} alt="" />
                <h1 className=''>{name}</h1>
                <p className=''>Rating:{rating}</p>
            </div>

            
            <p className='text-left'>{description}</p>
            
        </div>
    );
};

export default Review;