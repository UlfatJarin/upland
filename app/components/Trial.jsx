import React from 'react'
import trail from '../assets/Trail.png'
import aboutbg from '../assets/aboutbg.png'
import Image from 'next/image'

const Trial = () => {
  return (
    <div className='relative'>
        <Image className='aboslute -z-50' src={aboutbg}/>
        <div className='container my-[160px]'>
        
        <Image className='mx-auto' src={trail} />
    </div>

    </div>
  )
}

export default Trial