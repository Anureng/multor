import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div className='flex flex-col lg:flex-row items-center justify-center lg:space-x-48 lg:p-20 mt-10 mb-10 '>
        <div>
            <Image src="/Header.jpg" alt='Nothing' width={500} height={500}/>
        </div>
        <div className='lg:w-96 flex flex-col space-y-6 mt-4'>
            <p className='text-[#13C7C9]'>ABOUT</p>
            <p className='text-4xl font-semibold'>Some more information about your business</p>
            <p>Share a little about yourself as a business owner, or maybe describe what makes your service unique. Give visitors one more reason to care about your offer and want to work with you.</p>
        </div>
    </div>
  )
}

export default About