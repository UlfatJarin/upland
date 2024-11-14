import Link from 'next/link'
import React from 'react'

const Button = ({btntext,className ,children}) => {
  return (
    
    <button className={`btn py-4 px-8 border-2 border-main hover:bg-transparent bg-main text-whitec rounded-full hover:text-main  ${className}`}><Link href='/'>{btntext}</Link></button>
  )
}

export default Button