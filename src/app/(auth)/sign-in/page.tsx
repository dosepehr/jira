import React from 'react';

const page = () => {
    return (
        <div className='bg-white max-w-2xl mx-auto rounded-md p-4'>
            <p className='text-black font-bold text-2xl text-center p-4'>
                Welcome back!
            </p>
            <hr className='mb-4' />
            <form
                className='flex flex-col mx-auto gap-y-4 items-center max-w-sm'
            >
                <input
                    type='text'
                    placeholder='Enter email address'
                    className='input input-bordered w-full  bg-white text-gray-400'
                />
                <input
                    type='text'
                    placeholder='Enter password'
                    className='input input-bordered w-full  bg-white text-gray-400'
                />
                <button className='btn btn-primary text-white w-full'>
                    Login
                </button>
            </form>
        </div>
    );
};

export default page;
