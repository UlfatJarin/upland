import React from 'react'
import Title from './Title'
import Image from 'next/image'
import presentation from '../assets/presentation.png'

const UIpresentation = () => {
  return (
    <div className='relative'>
        <Image src={presentation}/>
        <div className='container absolute top-[355px] left-1/2 -translate-x-1/2 '>
            <Title classNametitle='!text-whitec' title='watch our UI presentation'/>
            
        </div>
    </div>
  )
}

export default UIpresentation