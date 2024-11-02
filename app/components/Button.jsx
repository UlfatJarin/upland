import Link from 'next/link'
import React from 'react'

const Button = ({btntext,className}) => {
  return (
    <button className={`py-1 px-5 border-2 border-[#FF6231] rounded-full text-[#FF6231] ${className}`}><Link href='/'>{btntext}</Link></button>
  )
}

export default Button