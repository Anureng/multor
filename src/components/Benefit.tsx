import Image from 'next/image'
import React from 'react'

const Benefit = () => {
  return (
    <div className=' flex lg:flex-row flex-col items-center justify-around'>
        {/* All Benefits */}
        <div className='space-y-12'>
        {/* Benefit 1 */}

        <div className='Benefit 1 lg:w-96 flex space-x-5 items-center '>
            <Image src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/13b0f11a-multor-benefit1-icon.svg" 
            alt='nothing' width={50} height={50}
            />
            <div className='space-y-3'>
                <p className='text-lg  font-bol '>Benefit 1</p>
                <p>Highlight the benefits of signing up for an appointment, online class, or video consultation.</p>
            </div>
        </div>
        {/* Benefit 2 */}

        <div className='lg:w-96 flex space-x-5 items-center '>
        <Image src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/8ab92ea8-multor-benefit2-icon.svg" 
            alt='nothing' width={50} height={50}
            />
            <div className='space-y-3'>
                <p className='text-lg font-bol '>Benefit 2</p>
                <p>For example, fitness instructors might describe how their routines make people healthier *and* happier.</p>
            </div>
        </div>
        {/* Benefit 3 */}

        <div className='lg:w-96 flex space-x-5 items-center '>
        <Image src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/c32dd90d-multor-benefit3-icon.svg" 
            alt='nothing' width={50} height={50}
            />
            <div className='space-y-3'>
                <p className='text-lg font-bol '>Benefit 3</p>
                <p>For example, fitness instructors might describe how their routines make people healthier *and* happier.</p>
            </div>
        </div>
        </div>

        {/* Appointment  */}
        <div className='bg-[#152F2E] lg:w-96 flex flex-col items-center justify-center space-y-6 p-4 lg:-translate-y-28  overflow-visible'>
            <div className='flex flex-col items-center justify-center w-60 space-y-3'>
            <p className='text-white text-2xl font-bold '>Schedule an Appointment</p>
            <p className='text-white '>Here, let visitors know what will happen when they complete your form.</p>
            </div>
            {/* first name  */}
            <input type="text" placeholder='First Name*' className='px-1 py-2 rounded-lg outline-none bg-white ' />
            {/* last name  */}
            <input type="text"  placeholder='Last Name*' className='px-1 py-2 rounded-lg outline-none bg-white '/>
            {/* email  */}
            <input type="text" placeholder='Email*' className='px-1 py-2 rounded-lg outline-none bg-white '/>
            {/* phone number  */}
            <input type="text" placeholder='Phone Number*' className='px-1 py-2 rounded-lg outline-none bg-white '/>
            {/* Appointment  */}
            <input type="text" placeholder='Appointment*' className='px-1 py-2 rounded-lg outline-none bg-white '/> <br />
            <button className='bg-[#00C2C5] mb-3 text-white px-12 rounded-lg py-2 flex items-center justify-center'>SCHEDULE NOW</button>
        </div>
    </div>
  )
}

export default Benefit