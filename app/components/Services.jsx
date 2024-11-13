import React from 'react'
import Title from './Title'
import service1 from '../assets/service1.png'
import service2 from '../assets/service2.png'
import service3 from '../assets/service3.png'
import SCard from '../layers/SCard'

const Services = () => {
  return (
    <div className='container my-[130px]'>
        <Title title='See what you will get with us'/>
        <div  className=' grid grid-cols-3 gap-8 mt-12'>
            <SCard src={service1} title='Development courses' descrption='Culpa non ex tempor qui nulla laborum. Laboris culpa ea incididunt dolore ipsum tempor duis do ullamco eiusmod officia magna ad id.'/>
            <SCard src={service2} title='Money saving services' descrption='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.'/>
            <SCard src={service3} title='Usability interface' descrption='Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Culpa non ex tempor qui nulla laborum.'/>
        </div>

    </div>
  )
}

export default Services