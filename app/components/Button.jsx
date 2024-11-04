import Link from 'next/link'
import React from 'react'

const Button = ({btntext,className}) => {
  return (
    
    <button className={`py-4 px-8 border-2 border-main hover:bg-transparent bg-main text-white rounded-full hover:text-main ${className}`}><Link href='/'>{btntext}</Link></button>
  )
}

export default Button