import React from "react";

const Ourservices = () => {
  return (
    <div className="pb-5">
      <div className="container">
        <h2 className="text-center font-Libre fs-36 lh-42 fw-normal pb-3 mb-3">
          Our Services
        </h2>
        <div className="row pt-1 align-items-center">
          <div className="col-xl-4 col-md-6 d-flex justify-content-center d-xl-block mb-4 mb-lg-0">
            <div className="servicecard1 service-bg1 d-flex justify-content-end  position-relative flex-column overflow-hidden ">
              <div className="z-1">
                  <h3 className=" font-Libre fs-22 lh-24 text-white ps-3 mb-3 pb-1 heading">
                    Commercial Property Services
                  </h3>
              </div>
              <div className="cardlayer w-100 h-100 position-absolute d-flex justify-content-center align-items-center">
              <div className="z-1">
                  <h3 className=" font-Libre fs-22 lh-24 text-white ps-3 mb-3 pb-1">
                    Commercial Property Services
                  </h3>
                  <p className="text-white text-center opacity-70 ">Snow Shoveling
                  <span className="d-block">Snow Plowing</span>
                  Cleaning of Walkways & <span className="d-block">Sidewalks Ice Melt Applications</span></p>
              </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 d-flex justify-content-center d-xl-block mb-4 mb-lg-0">
            <div className="servicecard1 service-bg2 d-flex justify-content-end  position-relative flex-column overflow-hidden ">
                  <h3 className=" font-Libre fs-22 lh-24 text-white ps-3 mb-3 pb-1 heading">
                  Residential Property Services
                  </h3>
              <div className="cardlayer w-100 h-100 position-absolute d-flex justify-content-center align-items-center">
              <div className="">
                  <h3 className=" font-Libre fs-22 lh-24 text-white ps-4 mb-3 pb-1">
                  Residential Property Services
                  </h3>
                  <p className="text-white text-center opacity-70 ">Snow Shoveling
                  <span className="d-block">Snow Plowing</span>
                  Cleaning of Walkways & <span className="d-block">Sidewalks Ice Melt Applications</span></p>
              </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 d-flex justify-content-center d-xl-block">
            <div className="servicecard1 service-bg3 d-flex justify-content-center align-items-end  position-relative overflow-hidden ">
                  <h3 className=" font-Libre fs-22 lh-24 text-white mb-3 pb-1 heading">
                  Winter services
                  </h3>
              <div className="cardlayer w-100 h-100 position-absolute d-flex justify-content-center align-items-center">
              <div className="">
                  <h3 className=" font-Libre fs-22 lh-24 text-white ps-4 mb-3 pb-1">
                  Winter services
                  </h3>
                  <p className="text-white text-center opacity-70 ">Snow Shoveling
                  <span className="d-block">Snow Plowing</span>
                  Cleaning of Walkways & <span className="d-block">Sidewalks Ice Melt Applications</span></p>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ourservices;
