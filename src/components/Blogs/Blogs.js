import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1 className='text-4xl font-semibold text-lime-900 my-5'>This is Our Blogs Page</h1>
            <div className=' w-10/12 mx-auto grid gap-10 md:grid-cols-2'>
                <div className='context-api border-2 border-lime-600 p-4 bg-lime-100'>
                    <h2 className='text-3xl text-lime-600'>Context Api</h2>
                    <p className='text-left text-slate-600 text-lg'>Context Api makes the state variable global of react applicatons so we can use the variable from anywhere of the app. In a react app, data is passed top-down (from parent to child component) via props through every level of the tree. But, this usage becomes complicated in large applications .  Context Api provides a way to share values like these between components without havinng to pass a prop through every level of the tree. It makes the variable global so the value can be accessed from any component of the application </p>
                </div>
                <div className=' border-2 border-lime-600 p-4 bg-lime-100'>
                    <h2 className='text-3xl text-lime-600'>Semantic Tag</h2>
                    <p className=' text-left text-slate-600 text-lg'>Semantic tags accurately specifies its meaning and purpose to both the developer and browser. When we use div tag for writing nav,header,footer or other elements we don't tell specifically about what this element do to the browser.So, 'div' is non-semantic tag. Instead , if we use "nav,header,footer" etc, then we clearly specify what this element is about.So, these are semantic tags.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;