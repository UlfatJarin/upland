import Link from 'next/link'
import React from 'react'

const Navber = () => {
  return (
    <div>
        <ul className='flex justify-center items-center gap-4 py-4 bg-sky-600'>
            <li><Link href='/'>Home </Link></li>
            <li><Link href='/about'>About </Link></li>
            <li><Link href='/'>Service </Link></li>
            <li><Link href='/'>Blog </Link></li>
        </ul>
    </div>
  )
}

export default Navber