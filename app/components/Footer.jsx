import React from 'react'
import Footerbg from '../assets/Footerbg.png'
import footermail from '../assets/footermail.png'
import dot from '../assets/dot.png'
import Image from 'next/image'
import Link from 'next/link'
import Navbtn from './Navbtn'
import Button from './Button'

const Footer = () => {
    return (
        <div className='relative'>
            <footer className='container' >
                <div className=' grid grid-cols-3 gap-10 bg-white rounded-[20px] p-5 '>
                    <div className='mx-auto' >
                        <Image src={footermail} />
                    </div>
                    <div className='col-span-2'>
                        <p className='p2'>Newsletter</p>
                        <h2 className='h4 !text-[36px]'>Be aware of new features</h2>
                        <p className='p4 max-w-[453px] mt-4 mb-6'>Culpa non ex tempor qui nulla laborum. Laboris culpa ea ipsum tempor duis do ullamco eiusmod officia magna ad id.</p>
                        <input className='py-[18px] px-[30px] rounded-full w-[453px] border border-[#E6EBFC] mr-5' placeholder='Email'/>
                        <Button btntext='Subscribe' />
                    </div>
                </div>
                
                <ul className='topcenter gap-8 mx-auto mt-[118px] my-12 justify-center  '>
                        <li className='navli'><Link href='/'>Features </Link></li>
                        <Image src={dot} />
                        <li className='navli'><Link href='/'>Download app </Link></li>
                        <Image src={dot} />
                        <li className='navli'><Link href='/'>UI screens </Link></li>
                        <Image src={dot} />
                        <li className='navli'><Link href='/'>Testimonials </Link></li>
                        <Image src={dot} />
                        <li className='navli'><Link href='/'>FAQ </Link></li>
                        <Image src={dot} />
                        <Navbtn btntext='Free trial' />
                </ul>
                

            </footer>
            <div className='container text-center'>
                <p className='p4 !text-sm py-6'><Link href='/'>© All rights reserved. Upland 2020</Link></p>
            </div>
            <Image className='absolute bottom-0 w-full -z-20' src={Footerbg} />

        </div>
    )
}

export default Footer