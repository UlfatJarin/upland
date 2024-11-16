import React from 'react'
import Footerbg from '../assets/Footerbg.png'
import footer from '../assets/footer.png'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='relative'>
        <footer className='container grid grid-cols-3' >
            <div>
                <Image src={footer} />

            </div>
            <div className='col-span-2'>
                

            </div>

        </footer>
        <Image className='absolute bottom-0 w-full' src={Footerbg}/>

    </div>
  )
}

export default Footer