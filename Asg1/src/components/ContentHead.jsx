import React from 'react'

const ContentHead = () => {
  return (
    <div className='flex justify-between ml-10 mr-10 m-5'>
       <div>
        <h1 className='text-2xl font-bold'>Choose your new site</h1>
        </div>
        <div className='flex justify-between mr-2'>
            <div className='border-b border-black w-1/5 mr-2 flex items-center'>
            <img src="./Ellipse.svg" alt="" />
            <h1 className='font-bold pl-2'>1</h1>
            </div>
            <div className='flex'>
                <img src="./Arrow.svg" alt="" />
            </div>
            <div className='border-b border-gray w-1/5 mr-2 flex items-center justify-center'>
            <h1 className="text-gray-300">2</h1>
            </div>
            <div className='flex'>
                <img src="./Arrow.svg" alt="" />
            </div>
            <div className='border-b border-gray w-1/5 mr-2 flex items-center justify-center'>
            <h1 className="text-gray-300">3</h1>
            </div>
            
        </div>
    </div>
  )
}

export default ContentHead