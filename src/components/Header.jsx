import React from "react";
import Nav from "./Nav";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Header = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    fade: true,
    cssEase: "linear",
    autoplay:true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const slider = React.useRef(null);
  return (
    <div className="overflow-x-hidden position-relative">
      <Nav />
      <Slider ref={slider} {...settings}>
        <div className="bg-1 min-vh-100 d-flex flex-column w-100">
          <div className="d-flex flex-grow-1 align-items-end">
            <div className="container">
              <h1 className="font-Libre text-white  fs-40 lh-47 fw-bold">
                Ut pretium egestas
                <span className="d-block fst-italic lh-47">
                  {" "}
                  sagittis convallis
                </span>
              </h1>
              <p className="font-poppins text-white fs-16 lh-20 mb-30">
                Platea neque amet a dolor. Libero malesuada pellentesque
                ultrices{" "}
                <span className="d-block">
                  urna pellentesque. Varius in est porttitor pellentesque.
                </span>
              </p>
              <button className="btn1 font-poppins mb-5 ">
                Request a quote
              </button>
            </div>
          </div>
        </div>
        <div className="bg-2 min-vh-100 d-flex flex-column">
          <div className="d-flex flex-grow-1 align-items-end">
            <div className="container">
              <h1 className="font-Libre text-white  fs-40 lh-47 fst-italic fw-bold">
              <span className="fst-normal">Donec</span> orci mauris <span className="d-block">in enim viverra</span>
              </h1>
              <p className="font-poppins text-white fs-16 lh-20 mb-30">
                Platea neque amet a dolor. Libero malesuada pellentesque
                ultrices{" "}
                <span className="d-block">
                  urna pellentesque. Varius in est porttitor pellentesque.
                </span>
              </p>
              <button className="btn1 font-poppins mb-5 ">
                Request a quote
              </button>
            </div>
          </div>
        </div>
        <div className="bg-3 min-vh-100 d-flex flex-column">
          <div className="d-flex flex-grow-1 align-items-end">
            <div className="container">
              <h1 className="font-Libre text-white  fs-40 lh-47 fw-bold">
              Sit amet in <span className="d-block"><span className="fst-italic">vulputate</span> ultrices</span>
              </h1>
              <p className="font-poppins text-white fs-16 lh-20 mb-30">
                Platea neque amet a dolor. Libero malesuada pellentesque
                ultrices{" "}
                <span className="d-block">
                  urna pellentesque. Varius in est porttitor pellentesque.
                </span>
              </p>
              <button className="btn1 font-poppins mb-5 ">
                Request a quote
              </button>
            </div>
          </div>
        </div>
      </Slider>
      <button className="left-arrow bg-transparent border-none d-none d-sm-block" onClick={() => slider?.current?.slickPrev()}>
          <svg
            width="35"
            height="66"
            viewBox="0 0 35 66"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M34 1L2 33L34 65" stroke="white" stroke-width="2" />
          </svg>
        </button>
        <button className="right-arrow bg-transparent border-none d-none d-sm-block" onClick={() => slider?.current?.slickNext()}>
          <svg
            width="35"
            height="66"
            viewBox="0 0 35 66"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 1L33 33L1 65" stroke="white" stroke-width="2" />
          </svg>
    </button>
   
    </div>
  );
};

export default Header;
