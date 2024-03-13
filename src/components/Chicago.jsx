import React from "react";
import chicagoimg from "../assets/images/chicagoimg.webp";
const Chicago = () => {
  return (
    <div className="py-5">
      <div className="container py-5">
        <div className="row align-items-center py-4">
          <div className="col-lg-6 py-1 d-flex justify-content-center">
            <img src={chicagoimg} alt="img" className="w-max-sm-100" />
          </div>
          <div className="col-lg-6">
            <h2 className="font-Libre text-baseblack fs-36 lh-42 fw-normal mb-18">
              Evergreen Landscapes is a full-service landscaping company
              servicing the{" "}
              <span className="fst-italic text-green fw-medium">Chicago</span>{" "}
              land area.
            </h2>
            <p className="font-poppins fs-16 lh-24 fw-normal text-black opacity-50 mb-1">
              Our team is dedicated to giving our clients the very best of
              landscaping in a safe and professional manner.
            </p>
            <p className="font-poppins fs-16 lh-24 fw-normal text-black opacity-50 mb-1">
              Founded in 2012, Evergreen Landscapes (formerly David's Lawn Care)
              has come a long way from its beginnings. When we first started
              out, our passion for providing quality and affordable services to
              our valuable clients drove us to take action and gave us the
              momentum to turn hard work and inspiration into a growing
              landscaping company. We now serve customers all over the Chicago
              land area and are thrilled to be a part of the landscaping
              industry.
            </p>
            <p className="font-poppins fs-16 lh-24 fw-normal text-black opacity-50 mb-0">
              We hope you enjoy our services as much as we enjoy offering them
              to you. If you have any questions or comments, please don't
              hesitate to contact us.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chicago;
