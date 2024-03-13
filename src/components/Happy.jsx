import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Quotes, Stars } from './Icons';
const Happy = () => {
  return (
    <div className='pt-3 pb-5 overflow-x-hidden px-3'>
      <div className="container">
        <h2 className='text-center font-Libre fs-36 lh-42 text-black mb-3 '>Check out our <span className='fst-italic text-green fw-medium'>happy clients</span></h2>
        </div>
            <div className='row pb-5'>
                <div className='col-lg-4 col-md-6 d-flex justify-content-lg-end justify-content-center pe-0'>
                    <div className='pt-4'>
                        <div className="slidercard1">
                            <Quotes/>
                            <p className=' font-poppins text-darkblack opacity-70 fst-italic mt-3 mb-3 lh-24'>Evergreen provided high quality service in a timely manner for me. David was a pleasure to deal with, his honesty and customer service is unparalleled. If you want the job done right, use Evergreen!</p>
                            <h4 className='font-Libre text-black fs-16 lh-25 mb-0'>E. B.</h4>
                            <Stars/>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4 col-md-6 d-flex justify-content-center'>
                    <div className='pt-4'>
                        <div className="slidercard1">
                            <Quotes/>
                            <p className=' font-poppins text-darkblack opacity-70 fst-italic mt-3 mb-3 lh-24'>It is quite clear that Dave truly cares about his clients and about the work he does for them. If you hire his service, your lawn care goals and ambitions will become is own, and he will ensure you are not just satisfied but thrilled.</p>
                            <h4 className='font-Libre text-black fs-16 lh-25 mb-0'>S. K.</h4>
                            <Stars/>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4 d-flex justify-content-center justify-content-lg-start ps-0'>
                    <div className='pt-4'>
                        <div className="slidercard1">
                            <Quotes/>
                            <p className=' font-poppins text-darkblack opacity-70 fst-italic mt-3 mb-3 lh-24'>Evergreen Landscapes does amazing work and they are very well priced. I definitely will use them for all my landscaping needs.</p>
                            <h4 className='font-Libre text-black fs-16 lh-25 mb-0'>Y. C.</h4>
                            <Stars/>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Happy
