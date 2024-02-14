import React from 'react'

const Sidebar = () => {
  return (
    <div className='h-screen flex flex-col hidden md:block'>
    <div className='h-1/4 flex justify-center items-center border-b border-gray-300'>
        <img src="./Logo.svg" alt="Logo"/>
    </div>
    <div className='h-1/6 flex justify-center items-center border-b border-gray-300'>
        Cart
    </div>
    <div className='h-1/6 flex justify-center items-center font-bold border-b border-gray-300'>
        Market
    </div>
    <div className='h-1/6 flex justify-center items-center border-b border-gray-300'>
        Setting
    </div>
    <div className='h-1/6 flex justify-center items-center border-b border-gray-300'>
        Logout
    </div>
</div>

  )
}

export default Sidebar