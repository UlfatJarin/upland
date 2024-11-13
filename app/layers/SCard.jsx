import Image from 'next/image'
import React from 'react'

const SCard = ({src ,title, descrption}) => {
  return (
    <div className='p-8'>
        <div className='h-[325px] w-[294px] object-cover mb-9'>
          <Image src={src}/>
        </div>
        <h4 className='h4 mb-4'>{title}</h4>
        <p className='p3 max-w-[280px]'>{descrption}</p>
    </div>
  )
}

export default SCard