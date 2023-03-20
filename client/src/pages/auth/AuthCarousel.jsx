import React from 'react'

const AuthCarousel = ({img, title, desc}) => {
  return (
    <>
      <div className='flex flex-col items-center justify-center p-8 mb-10 text-center text-white lg:pt-10 lg:mb-4'>
        <img src={img} className='object-cover lg:w-[600px] lg:h-[500px] w-[458px] h-[380px]' alt='' />
        <h3 className='text-4xl font-bold '>{title}</h3>
        <p className='mt-5 text-2xl'>{desc}</p>
      </div>
    </>
  )
}

export default AuthCarousel