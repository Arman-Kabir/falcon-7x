import React, { useEffect, useState } from 'react';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useReviews();
    
    return (
        <div>
            <h1 className='text-4xl font-semibold my-10 text-amber-600'>What Our Clients Say about Our Product : {reviews.length} Reviews</h1>
            <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-4 w-3/4 mx-auto my-10'>
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