import Image from 'next/image'
import React from 'react'
import dots from '../assets/dots.png'

const Title = ({title}) => {
  return (
    <div className=''>
        <Image src={dots} className='mx-auto' />
        <h2 className={`font-semibold text-[50px] text-black  text-center z-10 relative`}>{title}
            
        <h2 className={`font-normal text-[40px] text-[#CCCCCC] -z-10 absolute  top-[-10px] left-1/2 -translate-x-1/2`}>{title}</h2>
        </h2>
        
    </div>
  )
}

export default Title