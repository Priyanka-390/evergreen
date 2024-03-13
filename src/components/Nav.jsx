import React, { useState } from "react";
import logo from '../assets/images/logo.webp'
import shortlogo from '../assets/images/shortlogo.webp'
const Nav = () => {
    const [show, setshow] = useState(true);
    if (show === false) {
      document.body.classList.add("overflow_hidden");
    } else {
      document.body.classList.remove("overflow_hidden");
    }
  return (
      <div className=" position-relative">
      <nav className="bg-white  position-fixed end-0 start-0 top-0 z-3 max-lg-pe-2  ">
            <div className=" d-flex align-items-center justify-content-between">
              <a href="#" className="d_none">
                <img
                  src={logo}
                  alt="Logo"
                />
              </a>
              <a href="#" className="d_block">
                <img
                  src={shortlogo}
                  alt="Logo"
                />
              </a>
              <ul className={`${show ? "left_100" : "left_0"} nav_bar`}>
                <li onClick={() => setshow(!show)}>
                  <a
                    className=" text-black font-poppins fs-16 fw-normal lh-17 nav_line position-relative head"
                    href="#create"
                  >
               How It Works
                  </a>
                </li>
                <li onClick={() => setshow(!show)}>
                  <a
                    className=" text-black font-poppins fs-16 fw-normal lh-20  nav_line position-relative head"
                    href="#recycling"
                  >
                 For Brands
                  </a>
                </li>
                <li onClick={() => setshow(!show)}>
                  <a
                    className=" text-black font-poppins fs-16 fw-normal lh-20  nav_line position-relative head"
                    href="#Faq"
                  >
               About Us
                  </a>
                </li>
                <li onClick={() => setshow(!show)}>
                  <a
                    className=" text-black font-poppins fs-16 fw-normal lh-20  nav_line position-relative head"
                    href="#Subscribe"
                  >
               Careers
                  </a>
                </li>
                <li onClick={() => setshow(!show)}>
                  <button className="nav-btn font-poppins fw-medium lh-20">Request a quote</button>
                </li>
              </ul>
              <div
                onClick={() => setshow(!show)}
                className={`${show ? "" : "cross"} navline`}
              >
                <span className="crl-1"></span>
                <span className="crl-2"></span>
                <span className="crl-3"></span>
              </div>
            </div>
        </nav>
    </div> 
  );
};

export default Nav;
