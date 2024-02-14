import React from 'react'

const DetailsBox = ({text,content}) => {
  return (
    <div>
        <div className='p-5 border-b border-gray-500'>
                    <h1 className='text-xl font-bold'>{text}</h1>
                    <p className='mt-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae, modi et quisquam nulla quibusdam assumenda dolorum dolores ea asperiores earum exercitationem, atque vitae! Aliquam quis, ab in ipsam tenetur officia?</p>
        </div>
    </div>
  )
}

export default DetailsBox