import React from 'react'
import Button from './Button'

const Navbar = () => {
  return (
    <div className='flex justify-between m-10 mt-5 mb-5'>
        <div>
        <Button text="Complete Profile" width={100}/>
        </div>
        <div className="notify">
            <img src="./BellBottom.svg" alt=""  className='ml-0.5'/>
            <img src="./Bell.svg" alt="None" />
        </div>
    </div>
  )
}

export default Navbar