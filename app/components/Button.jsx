import Link from 'next/link'
import React from 'react'

const Button = ({btntext,className}) => {
  return (
    
    <button className={`py-4 px-8 border-2 border-[#FF6231] hover:bg-transparent bg-[#FF6231]  text-white rounded-full hover:text-[#FF6231] ${className}`}><Link href='/'>{btntext}</Link></button>
  )
}

export default Button