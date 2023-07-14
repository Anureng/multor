import Image from 'next/image';
import React from 'react'
import { AiFillStar } from 'react-icons/ai';
import { FaStarHalf } from 'react-icons/fa';

const Testimonials = () => {
  return (
    <div className=' space-y-28  h-3/5 lg:p-48 '>
        <div className='flex items-center justify-center flex-col  mt-10'>
        <p className='text-[#00C2C5]'>DON'T JUST TAKE OUR WORD FOR IT</p>
        </div>
        <div className='flex-col lg:flex-row flex justify-center items-center lg:space-x-5'>

        <div className='space-y-4 mb-4'>
            <p className='text-[#00C2C5] flex'>
                <AiFillStar/>  <AiFillStar/>  <AiFillStar/>  <AiFillStar/>   <AiFillStar/>
            </p>
            <p className='text-2xl lg:w-96'>
            Share a real testimonial that hits some of your benefits (but isn't too sales-y).
            </p>
            <div className='flex space-x-5 '>
                <Image src="/Header.jpg" alt='nothing' height={80} width={80} />
                <div className='text-sm '>
                <p>Real Name</p>
                <p>Location</p>
                </div>
            </div> 
        </div>
        


        <div className='space-y-4'>
            <p className='text-[#00C2C5] flex'>
                <AiFillStar/>  <AiFillStar/>  <AiFillStar/>  <AiFillStar/>   <AiFillStar/>
            </p>
            <p className='text-2xl lg:w-96'>
            Share a real testimonial that hits some of your benefits (but isn't too sales-y).
            </p>
            <div className='flex space-x-5 '>
                <Image src="/Header.jpg" alt='nothing' height={80} width={80} />
                <div className='text-sm'>
                <p>Real Name</p>
                <p>Location</p>
                </div>
            </div> 
        </div>
        </div>
    </div>
  )
}

export default Testimonials