import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '../assets/logo.png'
import dot from '../assets/dot.png'
import Button from './Button'
import { FiSmartphone } from "react-icons/fi";

const Navber = () => {
    return (
        <div className=' bg-slate-400 absolute top-[60px] left-1/2 -translate-x-1/2'>
            <nav className='w-[1780px] mx-auto  '>
                <div className='midbetween items-center'>
                    <div className='topcenter gap-[222px]'>
                    <Image src={logo} />
                    <ul className='topcenter gap-8    '>
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
                        <Button btntext='Free trial' />
                    </ul>
                    </div>
                    <div className='topcenter'>
                    <FiSmartphone className='text-[#FF6231] w-6 h-6' />
                    <p className='navli !font-medium'>+1 742 65 84 122</p>
                    </div>

                </div>
            </nav>
        </div>
    )
}

export default Navber