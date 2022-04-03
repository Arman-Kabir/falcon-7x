import React, { useEffect, useState } from 'react';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useReviews();
    
    return (
        <div>
            <h1>Total Reviews : {reviews.length}</h1>
            <div className='grid grid-cols-3 gap-4 w-3/4 mx-auto'>
                {
                    reviews.map(review => <Review
                        key={review.id}
                        review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;