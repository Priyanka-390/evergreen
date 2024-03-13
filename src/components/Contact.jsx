import React from "react";
import { Email, Phone } from "./Icons";
import ellipse1 from "../assets/images/contactellipse1.webp";
import ellipse2 from "../assets/images/contactellipse2.webp";
const Contact = () => {
  return (
    <div className="py-5 mt-1">
      <div className="mt-3 pt-4 pt-1">
        <div className="contact-bg bg-whitegreen pb-5 position-relative z-1">
          <div className="container py-4">
            <div className="row pt-4 pb-2 ">
              <div className="col-lg-6 pt-3">
                <h2 className="font-Libre fs-36 text-black lh-42 mb-3">
                  Contact Us
                </h2>
                <div className="d-flex mt-1 align-items-center gap-3 mb-2">
                  <div className="circle2 d-flex justify-content-center align-items-center">
                    <span>
                      <Phone />
                    </span>
                  </div>
                  <p className=" font-poppins fs-16  lh-25 text-black opacity-70 mb-0">
                    (312) 610-9790
                  </p>
                </div>
                <div className="d-flex pt-1 align-items-center gap-3 mb-4">
                  <div className="circle2 d-flex justify-content-center align-items-center">
                    <span>
                      <Email />
                    </span>
                  </div>
                  <p className=" font-poppins fs-16  lh-25 text-black opacity-70 mb-0">
                    info@evergreenlandscapesco.com
                  </p>
                </div>
                <p className="font-Libre text-black fs-16 lh-25 fw-normal mb-1 pt-1">
                  Hours
                </p>
                <p className=" font-poppins text-black opacity-70 fs-16 fw-normal lh-25 mb-3">    
                  MON-FRI: 9AM - 5PM
                  <span className="d-block">SAT-SUN: CLOSED</span>
                </p>
                <p className="pt-1 font-poppins fst-italic fs-16 lh-24 text-darkblack opacity-70 fw-normal mb-0">
                  Contact us today for a free no{" "}
                  <span className="d-block">obligation consultation</span>
                </p>
              </div>
              <div className="col-lg-6 position-relative">
                <div className="formcard pt-4 ">
                  <h3 className="pt-2 text-black font-Libre fs-24 lh-38 fw-normal text-black mb-3 pb-3">
                    Contact us! someone from{" "}
                    <span className="d-block">
                      <span className="fst-italic text-green fw-medium">
                        Evergreen
                      </span>{" "}
                      will reach out to you soon
                    </span>
                  </h3>
                  <form className="pb-2">
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-100 font-poppins py-3 pl-12 lh-16 mb-2"
                    />
                    <input
                      type="tel"
                      name="Phone"
                      placeholder="Phone"
                      className="w-100 font-poppins py-3 pl-12 lh-16 mb-2"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="w-100 font-poppins py-3 pl-12 lh-16 mb-2"
                    />
                    <input
                      type="text"
                      name="Address"
                      placeholder="Address"
                      className="w-100 font-poppins py-3 pl-12 lh-16 mb-2"
                    />
                    <textarea
                      name="Message"
                      placeholder="Message"
                      className="w-100 font-poppins py-3 pl-12 lh-16 mb-4"
                    ></textarea>
                  </form>
                  <button className="btn1 w-100 font-poppins fs-16 lh-20 fw-medium">
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
          <img
            src={ellipse1}
            alt="ellipse"
            className="position-absolute bottom-0 start-0"
          />
          <img
            src={ellipse2}
            alt="ellipse"
            className="position-absolute top-0 end-0 z-n1"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
