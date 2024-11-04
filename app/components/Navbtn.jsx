import Link from 'next/link'
import React from 'react'

const Navbtn = ({btntext,className}) => {
  return (
    <button className={`py-1 px-5 border-2 border-main rounded-full text-main ${className}`}><Link href='/'>{btntext}</Link></button>
  )
}

export default Navbtn