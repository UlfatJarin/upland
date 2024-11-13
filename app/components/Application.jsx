import React from 'react'
import application from '../assets/application.png'
import Image from 'next/image'


const Application = () => {
  return (
    <div className='container '> 
        <div>
            <Image src={application}/>
        </div>
        <div>

        </div>
    </div>
  )
}

export default Application