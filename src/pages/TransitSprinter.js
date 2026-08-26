import React from 'react';
import transitSprinterImg from '../img/fleet5.png'; // Replace with your actual image path
import { HashLink } from 'react-router-hash-link';

function TransitSprinter() {
  return (
    <>
      {/* Banner Start */}
      <div className="container-fluid bg-breadcrumb">
        <div className="container text-center py-5" style={{ maxWidth: '900px' }}>
          <h3 className="text-white display-3 mb-4" data-aos="fade-down" data-aos-delay="100">
            Transit / Sprinter
          </h3>
          <ol className="breadcrumb justify-content-center text-white mb-0" data-aos="fade-down" data-aos-delay="300">
            <li className="breadcrumb-item">
              <a href="/" className="text-white">
                Home
              </a>
            </li>
            <li className="breadcrumb-item active text-white">Transit / Sprinter</li>
          </ol>
        </div>
      </div>
      {/* Banner End */}

      <div className="container-fluid coachbus py-5">
        <div className="container py-5">
          <div
            className="text-center mx-auto pb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: '800px', visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInUp' }}
          >
            <h1 className="display-5 text-capitalize mb-3">
              Transit / <span className="text-primary">Sprinter</span>
            </h1>
            <p className="mb-0">
              The Ford Sprinter and Transit Van offer compact, comfortable travel for small groups with climate control and seatbelt-equipped seating for up to 14 passengers.
            </p>
          </div>

          <div className="row g-4 align-items-center">
            {/* Left Features */}
            <div className="col-xl-4">
              <div className="row gy-4 gx-0">
                <div
                  className="col-12 wow fadeInUp"
                  data-wow-delay="0.1s"
                  style={{ visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInUp' }}
                >
                  <div className="coachbus-item">
                    <div className="coachbus-icon">
                      <span className="fa fa-users fa-2x"></span>
                    </div>
                    <div className="ms-4">
                      <h5 className="mb-3">Max Capacity: 14</h5>
                      <p className="mb-0">Ideal for smaller group travel needs with 14-seat capacity.</p>
                    </div>
                  </div>
                </div>

                <div
                  className="col-12 wow fadeInUp"
                  data-wow-delay="0.3s"
                  style={{ visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInUp' }}
                >
                  <div className="coachbus-item">
                    <div className="coachbus-icon">
                      <span className="fa fa-shuttle-van fa-2x"></span>
                    </div>
                    <div className="ms-4">
                      <h5 className="mb-3">Ford Transit / Sprinter</h5>
                      <p className="mb-0">Versatile van options perfect for short trips or shuttle service.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Center Image */}
            <div
              className="col-lg-12 col-xl-4 wow fadeInUp"
              data-wow-delay="0.2s"
              style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp' }}
            >
              <img src={transitSprinterImg} className="img-fluid w-100" style={{ objectFit: 'cover' }} alt="Ford Transit / Sprinter Van" />
            </div>

            {/* Right Features */}
            <div className="col-xl-4">
              <div className="row gy-4 gx-0">
                <div
                  className="col-12 wow fadeInUp"
                  data-wow-delay="0.1s"
                  style={{ visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInUp' }}
                >
                  <div className="coachbus-item justify-content-end">
                    <div className="text-end me-4">
                      <h5 className="mb-3">A/C & Heater</h5>
                      <p className="mb-0">Comfortable climate-controlled interior for any season.</p>
                    </div>
                    <div className="coachbus-icon">
                      <span className="fa fa-snowflake fa-2x"></span>
                    </div>
                  </div>
                </div>

                <div
                  className="col-12 wow fadeInUp"
                  data-wow-delay="0.3s"
                  style={{ visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInUp' }}
                >
                  <div className="coachbus-item justify-content-end">
                    <div className="text-end me-4">
                      <h5 className="mb-3">Seatbelts</h5>
                      <p className="mb-0">Travel safely with individual seatbelts for every passenger.</p>
                    </div>
                    <div className="coachbus-icon">
                      <span className="fa fa-shield-alt fa-2x"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enquire Button Centered */}
          <div className="row mt-4">
            <div className="col text-center">
              <HashLink smooth to="/form">
                <button className="btn btn-primary px-4 py-2">
                  <i className="fa fa-envelope me-2"></i> Enquire
                </button>
              </HashLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TransitSprinter;
