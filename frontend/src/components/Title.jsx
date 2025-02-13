import React from 'react'

const Title = ({text1,text2}) => {
  return (
    <div className='inline-flex gap-2 items-senter mb-3'>
        <p className='text-gray-500 underline text-2xl'>{text1} <span className='text-gray-700 font-medium'>{text2}</span></p>
        {/* <p className='w-8 h-[1px] sm:h-[2px] bg-gray-700'></p> */}
    </div>
  )
}

export default Title
