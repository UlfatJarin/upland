import Image from 'next/image'
import React from 'react'
import dots from '../assets/dots.png'

const Title = ({title ,className ,className2 ,classNametitle}) => {
  return (
    <div className={`relative text-center ${className}`}>
        <Image src={dots} className={`mx-auto ${className2}`} />
        <h2 className={`font-Darker  font-semibold text-[50px] text-blackc leading-[100%]  z-10 relative mt-3.5 capitalize ${classNametitle}`}>{title}
            
        <p className={`font-Codystar uppercase font-normal text-[40px] text-secondary -z-10 absolute  top-[-10px] left-1/2 w-full -translate-x-1/2 `}>{title}</p>
        </h2>
        
    </div>
  )
}

export default Title