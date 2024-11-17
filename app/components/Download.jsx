import React from 'react'
import Title from './Title'
import Button from './Button'
import { FaGooglePlay } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import Downloadbtn from '../layers/Downloadbtn';
import P from '../layers/P';
import { GoDotFill } from "react-icons/go";

const Download = () => {
  return (
    <div className='container grid grid-cols-2 my-[160px]'>
        <div className='max-w-[457px]'>
            <Title className='!text-left' className2='!mx-0' title='easy download and ready to use'/>
            <p className='p4 mt-[30px] mb-[50px]'>Velit occaecat duis occaecat nostrud. Veniam occaecat id ea Lorem est officia excepteur cupidatat consectetur. Labore do nulla ipsum dolore ipsum. Proident excepteur ex aliqua cupidatat adipisicing.</p>
            <div className='flex gap-5'>
                <Downloadbtn href='//play.google.com/store/apps/details?id=com.rovio.baba&hl=en' text1='Download on the' text2='Google play' ><FaGooglePlay className='w-[24px] h-[24px] ' /> </Downloadbtn>
                <Downloadbtn href='//www.apple.com/shop/gift-cards' text1='Download on the' text2='app store' ><FaApple  className='w-[24px] h-[24px] ' /> </Downloadbtn>
            </div>
        </div>
        <div className='grid grid-cols-2 gap-[52px]'>
        <div className='max-w-[241px]'>
            <p className='p2 mb-3 '>basic</p>
            <p className='price'>$12<sup>.99</sup></p>
            <p className='p3 pb-3  border-b-2 border-dashed border-textcolor'>/per month</p>
            <div className='mt-[30px] flex flex-col gap-1'>
                <P className='items-center' point='Proident excepteur'><GoDotFill className='text-main text-[8px]' /></P>
                <P className='items-center' point='Veniam occaecat id ea'><GoDotFill className='text-main text-[8px]'/></P>
                <P className='items-center' point='Labore do nulla ipsum'><GoDotFill className='text-main text-[8px]'/></P>
                <P className='items-center' point='Culpa non ex tempor qui'><GoDotFill className='text-main text-[8px]' /></P>
            </div>
        </div>
        <div className='max-w-[259px]'>
            <p className='p2 mb-3 '> popular</p>
            <p className='price'>$99<sup>.99</sup></p>
            <p className='p3 pb-3 border-b border-b-2 border-dashed border-textcolor'>/per year</p>
            <div className='mt-[30px] flex flex-col gap-1'>
                <P className='items-center' point='Velit occaecat duis'><GoDotFill className='text-main text-[8px]' /></P>
                <P className='items-center' point='Culpa non ex tempor qui'><GoDotFill className='text-main text-[8px]'/></P>
                <P className='items-center' point=' Excepteur cupidatat consectetur'><GoDotFill className='text-main text-[8px]'/></P>
                <P className='items-center' point='Proident excepteur'><GoDotFill className='text-main text-[8px]' /></P>
            </div>
        </div>
        </div>


    </div>
  )
}

export default Download