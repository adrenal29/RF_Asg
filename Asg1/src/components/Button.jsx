import React from 'react'

const Button = ({text,widthReq=100}) => {
  return (
    <button className={`bg-buttonColor p-4 pt-3 pb-3 text-white text-xs`}  style={{ width: `${widthReq}%` }}>{text}</button>
  )
}

export default Button