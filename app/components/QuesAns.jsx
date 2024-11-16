import Image from 'next/image'
import React from 'react'
import QA from '../assets/QA.png'
import qabg from '../assets/qabg.png'
import playbtn from '../assets/playbtn.png'
import Title from './Title'

const QuesAns = () => {
  return (
    <div className='container grid grid-cols-2 gap-8 '>
        <div className='w-[552px] h-[503px] relative topcenter'>
            <Image className='w-[400px] h-[400px] mx-auto  rounded-full ' src={QA}/>
            <Image className='absolute top-0 -z-20'src={qabg}/>
            <Image className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20'src={playbtn}/>

        </div>
        <div>
            <Title className='!text-left max-w-[457px] mb-12' className2='!mx-0' title='Frequently Asked Questions'/>
            <h4 className='h4 !text-2xl border-b-2 border-dashed pb-5 border-main'>How to start using Upland Application?</h4>
            <p className='p4 my-7 ml-5 mr-2.5 '>Velit occaecat duis occaecat nostrud. Veniam occaecat id ea Lorem est officia excepteur cupidatat consectetur. Labore do nulla ipsum dolore ipsum. Proident excepteur ex aliqua cupidatat adipisicing in cillum amet eu dolore labore in aliquip.</p>
            <h4 className='h4 !text-2xl border-b-2 border-dashed pb-5'>How can I register?</h4>
            {/* <p className='p4 my-7 '>Velit occaecat duis occaecat nostrud. Veniam occaecat id ea Lorem est officia excepteur cupidatat consectetur. Labore do nulla ipsum dolore ipsum. Proident excepteur ex aliqua cupidatat adipisicing in cillum amet eu dolore labore in aliquip.</p> */}
            <h4 className='h4 !text-2xl border-b-2 border-dashed pb-5'>Can I use free plan permanently?</h4>
            {/* <p className='p4 my-7 '>Velit occaecat duis occaecat nostrud. Veniam occaecat id ea Lorem est officia excepteur cupidatat consectetur. Labore do nulla ipsum dolore ipsum. Proident excepteur ex aliqua cupidatat adipisicing in cillum amet eu dolore labore in aliquip.</p> */}

        </div>

    </div>
  )
}

export default QuesAns