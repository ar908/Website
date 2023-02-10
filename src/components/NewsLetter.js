import React from 'react';

const Newsletter = () => {
  return (
    <div className='bg-[#2699fb] px-4'>
      <div className='max-w-[1240px] mx-auto md:flex justify-between py-[50px]'>
        <div className=' my-2'>
          <h1 className='text-[20px] md:text-[40px] font-bold text-white'>
            Want to learn latest I.T skills ?
          </h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className='my-2'>
          <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
            <input
              className='p-3 flex w-full rounded-md text-black'
              type='email'
              placeholder='Enter Email'
            />
            <button className='bg-[black] text-white rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3'>
              Notify Me
            </button>
            <br/>
          </div>
          <p className='text-white'>
            We care bout the protection of your data. Read our <br/>
            <span className='text-black'>Privacy Policy.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;