import React from 'react'

const ActionButton = ({text,done}) => {
    return (
        <button className={`flex items-center p-6 pt-3 pb-3 text-buttonColor text-xs border border-buttonColor border-1`} style={{backgroundColor:done?'white':'#4375FB',color:done?'#4375FB':'white'}}>
            {text}
            {done && <img src="./DownloadBefore.svg" alt="" className='ml-2' />}
        </button>
      )
}

export default ActionButton