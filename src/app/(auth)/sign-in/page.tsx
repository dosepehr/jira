import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <div className='bg-white max-w-2xl mx-auto rounded-md p-4'>
            <p className='text-black font-bold text-2xl text-center p-4'>
                Welcome back!
            </p>
            <hr className='mb-4' />
            <form className='flex flex-col mx-auto gap-y-4 items-center max-w-sm'>
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
            <div className='flex flex-col items-center gap-y-2 mt-4'>
                <p className='text-gray-600'>don&apos;t have an account?</p>
                <Link className='text-primary font-semibold' href={'/sign-up'}>
                    register
                </Link>
            </div>
        </div>
    );
};

export default page;
