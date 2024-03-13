import React from 'react'
import sliderimg1 from '../assets/images/sliderimg1.webp'
import sliderimg2 from '../assets/images/sliderimg2.webp'
import sliderimg3 from '../assets/images/sliderimg3.webp'
import sliderimg4 from '../assets/images/sliderimg4.webp'
import sliderimg5 from '../assets/images/sliderimg5.webp'
import sliderimg6 from '../assets/images/sliderimg6.webp'
import sliderimg7 from '../assets/images/sliderimg7.webp'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
const Gallery = () => {
    var slider1 = {
      dots: false,
      infinite: true,
      autoplay:true,
      speed: 3000,
      slidesToShow: 1,
      autoplaySpeed:0,
      centerMode: true,
      variableWidth: true,
      pauseOnHover:false,
      cssEase:"linear",
      centerPadding:16,
      };
      var slider2 = {
        dots: false,
        infinite: true,
        autoplay:true,
        speed: 3000,
        slidesToShow: 1,
        autoplaySpeed:0,
        centerMode: true,
        variableWidth: true,
        rtl:true,
        pauseOnHover:false,
        cssEase:"linear",
        centerPadding:16,
        };
  return (
    <div className='py-5 overflow-x-hidden'>
      <div className="container pt-3">
<h2 className='text-center font-Libre fs-36 lh-42 fw-normal text-black pb-5 mb-0'>Gallery</h2>
      </div>
      <Slider {...slider1} className='mb-3'>
          <div className='mx-2'><img src={sliderimg1} alt="img1" className='br-16 sliderimg1'/></div>
          <div className='mx-2'><img src={sliderimg2} alt="img1" className='sliderimg2 br-16'/></div>
          <div className='mx-2'><img src={sliderimg3} alt="img1" className='sliderimg3 br-16'/></div>
          <div className='mx-2'><img src={sliderimg4} alt="img1" className='sliderimg4 br-16'/></div>
      </Slider>
      <Slider {...slider2} className='mb-3 pb-5' dir="rtl" >
          <div className='mx-2'><img src={sliderimg5} alt="img1" className='br-16 sliderimg5'/></div>
          <div className='mx-2'><img src={sliderimg6} alt="img1" className='sliderimg6 br-16'/></div>
          <div className='mx-2'><img src={sliderimg7} alt="img1" className='sliderimg7 br-16'/></div>
      </Slider>
    </div>
  )
}

export default Gallery
