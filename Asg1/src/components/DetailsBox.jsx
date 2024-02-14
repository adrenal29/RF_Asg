import React from 'react'

const DetailsBox = ({text,content}) => {
  return (
    <div>
        <div className='p-5 border-b border-gray-500'>
                    <h1 className='text-xl font-bold'>{text}</h1>
                    <p className='mt-5'>{content}</p>
        </div>
    </div>
  )
}

export default DetailsBox