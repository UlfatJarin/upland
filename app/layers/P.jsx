import React from 'react'

const P = ({children,point}) => {
  return (
    <div className='flex gap-5'>
        {children}
        <p className='p3 !font-normal max-w-[417px]'>{point}</p>
    </div>
  )
}

export default P