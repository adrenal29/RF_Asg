import React from 'react'
import ActionButton from './ActionButton'
import Button from './Button'

const Option = ({actionName,btnText,done,active,statusHead,statusSubHead,btnTextSuccess,step,handleStatusChange,dateComp}) => {
  return (
    <div className={` p-5 ${active?"opactity:100":"opacity-30"}`}>
        <div className='flex '>
          <div className='relative'>
            <img src="./Check.svg" alt="Image loading" />
            {done && <img src="./CheckTick.svg" alt="" className='absolute top-0 left-0'/>}
          </div>
          <div className='flex justify-between w-full '>
            <div className='flex flex-col  ml-5'>
            <h1 className='text-xl' >{actionName}</h1>
            {done &&(<h1 className='text-sm text-blue-300 mt-2'>{statusSubHead}</h1>)}
            {done && <h1 className='text-2xl font-bold text-buttonColor'>{statusHead}</h1>}
            </div>
            <div>
            {done && <h1 className='text-lg ml-auto mr-10'>{dateComp}</h1>}
            </div>
          </div>
        </div>
        <div className='mt-5 md:w-1/3 w-full flex  ml-auto'>
                <div className="min-w-[100px]" onClick={()=>handleStatusChange(step)}>
                <ActionButton text={done ? btnTextSuccess : btnText} />
                 </div>
        </div>
    </div>
  )
}

export default Option