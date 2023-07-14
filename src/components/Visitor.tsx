import Image from 'next/image'
import React from 'react'

const Visitor = () => {
  return (
    <div>
        <div className='bg-[#E8FBFB] flex flex-col  items-center justify-center lg:w-full p-2 h-2/5 space-y-10 '>
            <h1 className='lg:text-5xl text-3xl font-bold lg:w-96 mt-6'>Show visitors what theyre signing up for</h1>
            <p className='lg:w-2/5 text-lg'>Include a video or photo from one of your sessions to help people understand your service (or just to hype em up).</p>
            <Image src="/Header.jpg" className='lg:translate-y-28 ' alt='nothing' height={700} width={800}/>
        </div>
    </div>
  )
}

export default Visitor