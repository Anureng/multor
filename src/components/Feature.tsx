import Image from 'next/image'
import React from 'react'

const Feature = () => {
  return (
    <div className='flex-col lg:flex-row flex  justify-center items-center mt-4 space-y-3 lg:space-x-6 lg:p-20 '>
        <div className='lg:w-80 space-y-6'>
            <Image src="/Header.jpg" alt="Nothing" height={350} width={350}/> 
            <p>FEATURE 1</p>
            <p className='font-light text-sm'>Talk about some of the details of your offer with a focus on the value people get back.</p>
        </div>
        <div className='lg: w-80  space-y-6'>
        <Image src="/Header.jpg" alt="Nothing" height={350} width={350}/> 
            <p>FEATURE 2</p>
            <p className='font-light text-sm'>Talk about some of the details of your offer with a focus on the value people get back.</p>
        </div>
        <div className=' lg:w-80  space-y-6'>
        <Image src="/Header.jpg" alt="Nothing" height={350} width={350}/> 
            <p>FEATURE 3</p>
            <p className='font-light text-sm'>Talk about some of the details of your offer with a focus on the value people get back.</p>
        </div>
    </div>
  )
}

export default Feature