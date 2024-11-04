import Image from 'next/image'
import React from 'react'
import dots from '../assets/dots.png'

const Title = ({title}) => {
  return (
    <div className=''>
        <Image src={dots} className='mx-auto' />
        <h2 className={`font-Darker  font-semibold text-[50px] text-blackc  text-center z-10 relative`}>{title}
            
        <h2 className={`font-Codystar uppercase font-normal text-[40px] text-secondary -z-10 absolute  top-[-10px] left-1/2 w-full -translate-x-1/2`}>{title}</h2>
        </h2>
        
    </div>
  )
}

export default Title