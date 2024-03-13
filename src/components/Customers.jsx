import React from 'react'
import { Award, Peace, Puzzle } from './Icons'
import ellipse1 from '../assets/images/customerellipse1.webp'
import ellipse2 from '../assets/images/customerellipse2.webp'
const Customers = () => {
  return (
    <div className='customers-bg py-5 bg-whitegreen position-relative'>
      <div className="container py-4">
<h2 className='pt-1 text-black fs-36 lh-42 font-Libre text-center fw-normal mb-1 pb-4'>
Why <span className='fst-italic text-green fw-medium'>customers choose</span> <span className='d-block'>Evergreen Landscapes LLC</span>
</h2>
<div className="row pb-1 pt-3 max-w-836 mx-auto">
<div className="col-lg-4 col-md-6 d-flex  justify-content-center d-lg-block mb-4 mb-lg-0">
<div className="card1">
  <div className="whitecircle d-flex justify-content-center align-items-center mb-3">
    <span><Puzzle/></span>
  </div>
  <h4 className='font-Libre fs-20 text-baseblack fw-medium lh-20 pt-1'>Creative Solutions</h4>
  <p className='font-poppins fs-16 lh-24 text-black fw-normal opacity-50 mb-0 pt-1'>Landscape Design & Build</p>
</div>
</div>
<div className="col-lg-4 col-md-6 d-flex justify-content-center d-lg-block mb-4 mb-lg-0">
<div className="card1">
  <div className="whitecircle d-flex justify-content-center align-items-center mb-3">
    <Award/>
  </div>
  <h4 className='font-Libre fs-20 text-baseblack fw-medium lh-20 pt-1'>Customer Service</h4>
  <p className='font-poppins fs-16 lh-24 text-black fw-normal opacity-50 mb-0 '>Our team is on call to deliver excellence to our clients</p>
</div>
</div>
<div className="col-lg-4 d-flex justify-content-center d-lg-block">
<div className="card1">
  <div className="whitecircle d-flex justify-content-center align-items-center  mb-3">
 <span><Peace/></span>
  </div>
  <h4 className='font-Libre fs-20 text-baseblack fw-medium lh-20 pt-1 '>Peace of mind</h4>
  <p className='font-poppins fs-16 lh-24 text-black fw-normal opacity-50 mb-0 pt-1'>Proven Proactive Approach</p>
</div>
</div>
    </div>
      </div>
      <img src={ellipse1} alt="ellipse" className=' position-absolute bottom-0 start-0' />
      <img src={ellipse2} alt="ellipse" className='position-absolute top-0 end-0' />
    </div>
  )
}

export default Customers
