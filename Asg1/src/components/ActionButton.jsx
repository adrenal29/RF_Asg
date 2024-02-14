import React from 'react'

const ActionButton = ({text}) => {
    return (
        <button className={`flex items-center p-6 pt-3 pb-3 text-buttonColor text-xs border border-buttonColor border-1`}>
            {text}
            <img src="./DownloadBefore.svg" alt="" className='ml-2' />
        </button>
      )
}

export default ActionButton