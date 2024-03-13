import React from "react";
import footlogo from "../assets/images/footlogo.webp";
import { Facebook, Instagram, Twitter } from "./Icons";
const Footer = () => {
  return (
    <div className="pt-5">
      <div className="container pt-5">
        <div className="row pt-3 pb-5">
          <div className="col-lg-6 pb-2">
            <img src={footlogo} alt="logo" />
            <p className=" font-poppins fs-16  text-black opacity-70 fw-normal pt-1 mb-0">
              Lorem ipsum dolor sit amet consectetur.
              <span className="d-block">
                Suspendisse semper felis vulputate leo. Id duis
              </span>{" "}
              morbi facilisis consequat mattis facilisi.{" "}
            </p>
          </div>
          <div className="col-lg-6 d-flex flex-column justify-content-lg-end align-items-lg-end">
            <ul className="d-sm-flex  font-poppins fs-16 ps-0  gap-4 ">
              <li>
                <a href="" className="text-black opacity-70">
                  Home
                </a>
              </li>
              <li className="ps-sm-1">
                <a href="" className="text-black opacity-70">
                  Our Services
                </a>
              </li>
              <li className="ps-sm-1">
                <a href="" className="text-black opacity-70">
                  Photos
                </a>
              </li>
              <li className="ps-sm-1">
                <a href="" className="text-black opacity-70">
                  Contact Us
                </a>
              </li>
            </ul>
            <div className="d-flex pt-1 gap-3">
              <a href="">
                <Twitter />
              </a>
              <a href="">
                <Facebook />
              </a>
              <a href="">
                <Instagram />
              </a>
            </div>
          </div>
        </div>
        <div className="footline w-100"></div>
<p className="text-center font-poppins fs-16 lh-25 text-black opacity-70 my-2 py-4">Copyright © 2023 Evergreen Landscapes LLC. All rights reserved.</p>
        
      </div>
    </div>
  );
};

export default Footer;
