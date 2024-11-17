import Link from 'next/link'
import React from 'react'

const Downloadbtn = ({href, text1,text2,children,className}) => {
  return (
        <Link href={href}> 
    <div className={`btn py-4 px-8 border-2 border-main  bg-main text-whitec rounded-full topcenter gap-2.5 max-w-[195px]  ${className}`}>
        <div>
        {children}
        </div>
        <p className='btn !text-[10px] '>{text1}<br/><span className='!text-[14px] uppercase'>{text2}</span></p>
             
       
    </div>
        </Link>
  )
}

export default Downloadbtn