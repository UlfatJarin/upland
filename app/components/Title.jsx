import Image from 'next/image'
import React from 'react'
import dots from '../assets/dots.png'

const Title = ({title ,className ,className2}) => {
  return (
    <div className={`relative text-center ${className}`}>
        <Image src={dots} className='mx-auto' />
        <h2 className={`font-Darker  font-semibold text-[50px] text-blackc   z-10 relative mt-3.5 capitalize`}>{title}
            
        <p className={`font-Codystar uppercase font-normal text-[40px] text-secondary -z-10 absolute  top-[-10px] left-1/2 w-full -translate-x-1/2 ${className2}`}>{title}</p>
        </h2>
        
    </div>
  )
}

export default Title