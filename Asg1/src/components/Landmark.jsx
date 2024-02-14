import React from 'react'

const Landmark = ({ type, distance }) => {
    return (
        <div className='flex justify-between items-center border-b border-black-400 mb-10'>
            <div className='flex items-center flex-wrap'>
                <img src="./Air.svg" alt="" />
                <h1 className='text-xl ml-2'>{type}</h1>
            </div>
            <div className='flex flex-col flex-wrap'>
                <h1 className='text-xl'>{distance} Km</h1>
                <h1 className='text-sm text-gray-300 self-end'>Airport 1</h1>
            </div>
        </div>
    )
}

export default Landmark