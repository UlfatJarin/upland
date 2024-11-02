import Image from 'next/image'
import React from 'react'
import dots from '../assets/dots.png'

const Title = (title) => {
  return (
    <div>
        <Image src={dots} />
        <h2 className={`font-semibold text-[50px] text-black`}>{title}</h2>
        <h2 className={`font-normal text-[40px] text-[#CCCCCC]`}>{title}</h2>
        
    </div>
  )
}

export default Title