import React from 'react'

const FeatureBox = ({text,icon}) => {
  return (
    <div className='flex items-center justify-center bg-gray-200 p-1  border-radius-lg mr-5 mt-5 min-w-[80px]'>
        <img src={`./${icon}.svg`}alt="" className='' />
        <h1 className='text-xs'>{text}</h1>
    </div>
  )
}

export default FeatureBox