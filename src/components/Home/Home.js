import React from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import privateJet from '../../privateJet.jpg';
import Review from '../Review/Review';

const Home = () => {
    const [reviews, setReviews] = useReviews();
    const seeAllReviews = () =>{
        <Link to='/reviews'></Link>
    }
    return (
        <div className='home-container'>
            <div className='hero-section grid grid-cols-2 py-20 px-40'>
                <div className='px-40 hero-details flex flex-col justify-center items-start'>
                    <h3 className='text-4xl text-lime-600 py-5 font-semibold'>Buy a Private jet</h3>
                    <h1 className='text-6xl text-red-600 font-bold'>Falcon-7x</h1>
                    <p className='py-7 text-slate-600 text-left'> Having a private jet is a symbol of being super rich. If u want to use a private jet for your family use or business meeting or any other work, this is the best plane u will ever have in the sky.</p>
                </div>
                <div className='hero-image flex justify-center'>
                    <img className='w-3/4 rounded-3xl' src={privateJet} alt="" />
                </div>
            </div>

            {/* Reviews Section */}
            <div>
                <h1 className='text-6xl'>Customer Reviews({reviews.length})</h1>
                <div className='grid grid-cols-3 gap-4 w-3/4 mx-auto mt-10'>
                    {
                        reviews.map(review => 
                            <Review
                                review={review}
                                key={review.id}
                            ></Review>
                            // return review.index<3;
                        )
                    }
                    <button className='text-4xl mx-auto text-amber-600 ' onClick={seeAllReviews}>See all Reviews</button>

                </div>
            </div>
        </div>
    );
};

export default Home;