import React from 'react'

const P = ({children,point ,className}) => {
  return (
    <div className={`flex gap-5 ${className}`}>
        {children}
        <p className={`p4 max-w-[417px]`}>{point}</p>
    </div>
  )
}

export default P