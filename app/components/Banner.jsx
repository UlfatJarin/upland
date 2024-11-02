import React from 'react'
import Button from './Button'
import phone from '../assets/phone.png'
import plane from '../assets/plane.png'
import like from '../assets/like.png'
import love from '../assets/love.png'
import mail from '../assets/mail.png'
import twitter from '../assets/twitter.png'
import massage from '../assets/massage.png'
import l1 from '../assets/L1.png'
import l2 from '../assets/L2.png'
import l3 from '../assets/L3.png'
import l4 from '../assets/L4.png'
import l5 from '../assets/L5.png'
import l6 from '../assets/L6.png'
import l7 from '../assets/L7.png'
import banner from '../assets/banner.png'
import Image from 'next/image'

const Banner = () => {
  return (
    <div className='relative'>
        
                <Image className='w-full'src={banner} />
        
        <div className='container grid grid-cols-2 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 '>
            <div className='my-[257px] '>
                <p className='p2'>trendy application</p>
                <h1 className='max-w-[567px] h1'>work faster with powerful tools</h1>
                <h5 className='max-w-[497px] h5 mt-7 mb-12'>Laboris culpa ea incididunt dolore ipsum tempor duis do ullamco eiusmod officia magna ad id.</h5>
                <Button btntext='Learn more'/>
            </div>
            <div className='relative'>
                <Image className='phone absolute top-[87px] left-[43px]' src={phone} />
                <Image className='plane absolute top-[337px] left-[35px]' src={plane} />
                <Image className='love absolute top-[246px] left-[110px]' src={love} />
                <Image className='like absolute top-[347px] right-[-19px]' src={like} />
                <Image className='mail absolute top-[614px] right-[-125px]' src={mail} />
                <Image className='twitter absolute top-[479px] right-[-105px]' src={twitter} />
                <Image className='massage absolute top-[278px] right-[-133px]' src={massage} />
                <Image className='l1 -z-20 absolute top-[672px] right-[13px]' src={l1} />
                <Image className='l3 -z-20 absolute top-[471px] right-[35px]' src={l2} />
                <Image className='l2 -z-20 absolute top-[580px] left-[-66px]' src={l3} />
                <Image className='l4 -z-20 absolute top-[560px] left-[11px]' src={l4} />
                <Image className='l5 -z-30 absolute top-[480px] right-[-73px]' src={l5} />
                <Image className='l6 -z-40 absolute top-[280px] left-[-150px]' src={l6} />
                <Image className='l7 -z-40 absolute top-[232px] right-[-216px]' src={l7} />
            </div>

        </div>
    </div>
  )
}

export default Banner