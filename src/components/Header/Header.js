import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <nav className='flex justify-center text-lg py-5 bg-indigo-100'>
            <CustomLink className=' p-2.5 mr-3' to='/'>Home</CustomLink>
            <CustomLink className=' p-2.5 mr-3' to='/reviews'>Reviews</CustomLink>
            <CustomLink className=' p-2.5 mr-3' to='/dashboard'>Dashboard</CustomLink>
            <CustomLink className=' p-2.5 mr-3' to='/blogs'>Blogs</CustomLink>
            <CustomLink className=' p-2.5 mr-3' to='/about'>About</CustomLink>
            
        </nav>
    );
};

export default Header;