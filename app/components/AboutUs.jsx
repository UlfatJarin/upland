import React from 'react'
import Title from './Title'
import Image from 'next/image';
import about from '../assets/about.png'

const AboutUs = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };

  return (
    <div className='container'>
        <Title className='!text-left' className2='!mx-0' title='they say about us'/>
        <div>
            {/* <Slider {...settings}>
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </Slider> */}
            <div className='px-10 py-8 max-w-[480px] rounded-[20px]'>
                <Image src={about} />
                <p className='p4 mt-4 mb-8'>“Velit occaecat duis occaecat nostrud. Veniam occaecat id ea Lorem est officia excepteur cupidatat consectetur. Labore do nulla ipsum dolore ipsum. Proident excepteur ex aliqua cupidatat.”</p>
                <div className='topcenter'>
                    <Image className='w-[60px] h-[60px] rounded-full ' />
                    <h4 className='p4 !text-blackc'>Brooklyn Simmons</h4>
                </div>

            </div>
        </div>        
    </div>
  )
}

export default AboutUs