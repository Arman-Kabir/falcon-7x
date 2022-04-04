import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h1 className='text-3xl text-red-600 font-bold py-10 bg-red-200'>Things u r searching is not available...
                <button className='text-4xl border-2 border-yellow-600'>
                    <Link to='/'>Go to Home</Link>
                </button></h1>

        </div>
    );
};

export default NotFound;