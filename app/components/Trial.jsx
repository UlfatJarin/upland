import React from 'react'
import trail from '../assets/Trail.png'
import aboutbg from '../assets/aboutbg.png'
import Image from 'next/image'

const Trial = () => {
  return (
    <div className='relative'>
        <div className='container my-[160px]'>
          <Image className='mx-auto ' src={trail} />
        </div>
        <Image className='absolute w-full -z-50 top-[-200px] left-0' src={aboutbg}/>
    </div>
  )
}

export default Trial