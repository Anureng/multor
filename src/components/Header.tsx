import React from 'react'

const Header = () => {
    const styling = {
        backgroundImage: `url('/Header.jpg')`,
        backgroundRepeat:"no-repeat" ,
        backgroundSize:  'cover', 
    }
  return (
    <div style={styling} className='h-screen  flex flex-col justify-center lg:px-20'>
        <div className=' lg:w-3/5  p-1 text-xs space-y-10 lg:space-y-20 lg:px-10 '>
            <p className='lg:text-4xl text-xl font-bold'>MULTOR</p>
            <h1 className='text-4xl lg:text-7xl font-bold '>Describe the value of booking an appointment</h1>
            <p className='text-xl lg:text-xl font-light'>No need to get clever. Tell people exactly what you're offering, then use this space to communicate your key value proposition.</p>
        </div>
    </div>
  )
}

export default Header