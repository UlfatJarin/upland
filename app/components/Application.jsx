import React from 'react'
import application from '../assets/application.png'
import { FaRegCheckCircle } from "react-icons/fa";
import Image from 'next/image'
import Title from './Title'
import P from '../layers/P'



const Application = () => {
  return (
    <div className='container flex gap-[60px]  mt-7 mb-[90px]'> 
        <div>
            <Image src={application}/>
        </div>
        <div className='max-w-[457px]'>
            <Title className='!text-left max-w-[457px]' className2='!mx-0' title='The most popular application 2021'/>
            <h5 className='h5 !text-textcolor my-7'>Culpa non ex tempor qui nulla laborum. Laboris culpa ea incididunt dolore ipsum.</h5>
            <div className='flex flex-col gap-5' >
              <P  point='Elit mollit aliqua quis ad sint nulla Lorem commodo reprehenderit.'><FaRegCheckCircle className='text-main' /></P>
              <P  point='Tempor consectetur aliqua aute veniam occaecat eu do esse adipisicing ut. '><FaRegCheckCircle className='text-main' /></P>
              <P  point='Culpa non ex tempor qui nulla laborum. Laboris culpa ea incididunt dolore ipsum tempor duis do ullamco eiusmod officia magna ad id.'><FaRegCheckCircle className='text-main' /></P>
              
            </div>
        </div>
    </div>
  )
}

export default Application