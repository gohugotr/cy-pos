import React from 'react'

const StatisticCart = ({ img, title, amount }) => {
  //Dosya uzantısını siler ==> .split('.').slice(0, -1).join('.');
  const imgAlt = img
    .replace(/^.*[\\/]/, '')
    .split('.')
    .slice(0, -1)
    .join('.')

  return (
    <>
      <div className='p-8 bg-gray-800 rounded-lg cart-item'>
        <div className='flex gap-x-4'>
          <img
            className='object-cover w-16 h-16 p-3 bg-white rounded-full'
            src={img}
            alt={imgAlt}
          />
          <div className='text-white'>
            <h3 className='mb-2 text-lg font-medium text-gray-400'>{title}</h3>
            <p className='text-xl font-semibold text-gray-200'>{amount}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default StatisticCart
