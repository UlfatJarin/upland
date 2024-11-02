import React from 'react'
import Title from './Title'
import service1 from '../assets/service1.png'
import service2 from '../assets/service2.png'
import service3 from '../assets/service3.png'
import Antcard from './Card'


const Services = () => {
  return (
    <div className='container my-[130px]'>
        <Title title='See what you will get with us'/>
        <div>
            <Antcard src={service1} title='Development courses' description='Culpa non ex tempor qui nulla laborum. Laboris culpa ea incididunt dolore ipsum tempor duis do ullamco eiusmod officia magna ad id.'/>
            <Antcard src={service2} title='Money saving services' description='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.'/>
            <Antcard src={service3} title='Usability interface' description='Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Culpa non ex tempor qui nulla laborum.'/>
        </div>

    </div>
  )
}

export default Services