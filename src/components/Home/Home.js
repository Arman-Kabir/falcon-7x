import React from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import privateJet from '../../images/privateJet.jpg';
import Review from '../Review/Review';

const Home = () => {
    const [reviews, setReviews] = useReviews();
    const seeAllReviews = () => {
        <Link to='/reviews'></Link>
    }
    const reviewsThree = reviews.slice(0, 3);
    return (
        <div className='home-container bg-indigo-100'>
            <div className='hero-section grid grid-cols-1 py-5 md:grid-cols-2  md:py-20 w-10/12 mx-auto'>
                <div className='hero-details text-center mb-5 md:flex flex-col justify-center items-start'>
                    <h3 className='text-4xl text-lime-600 font-semibold my-5'>Buy a Private jet</h3>
                    <h1 className='text-6xl text-red-600 font-bold'>Falcon-7x</h1>
                    <p className='text-slate-600 text-left my-5'> Having a private jet is a symbol of being super rich. If u want to use a private jet for your family use or business meeting or any other work, this is the best plane u will ever have in the sky.</p>
                </div>
                <div className='hero-image flex justify-center'>
                    <img className='w-3/4 rounded-3xl' src={privateJet} alt="" />
                </div>
            </div>

            {/* Reviews Section */}
            <div>
                <h1 className='text-6xl'>Customer Reviews({reviews.length})</h1>
                <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-4 w-3/4 mx-auto mt-10'>
                    {
                        reviewsThree.map(review =>
                            <Review
                                review={review}
                                key={review.id}
                            ></Review>
                            // return review.index<3;
                        )
                    }
                    {/* <button className='text-4xl mx-auto text-amber-600 ' onClick={seeAllReviews}>See all Reviews</button> */}

                    <div></div>
                    <button className='text-4xl mx-auto text-amber-600'><Link className='' to='/reviews'>See all Reviews</Link></button>


                </div>
            </div>
        </div>
    );
};

export default Home;