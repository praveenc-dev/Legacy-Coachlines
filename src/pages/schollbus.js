import React from 'react';
import schoolBusImg from '../img/fleet4.png';  // Update the image path if needed
import { HashLink } from 'react-router-hash-link';

function SchoolBus() {
  return (
    <>
      {/* Banner Start */}
      <div className="container-fluid bg-breadcrumb">
        <div className="container text-center py-5" style={{ maxWidth: '900px' }}>
          <h3 className="text-white display-2 mb-4" data-aos="fade-down" data-aos-delay="100">School Bus</h3>
          <ol className="breadcrumb justify-content-center text-white mb-0" data-aos="fade-down" data-aos-delay="300">
            <li className="breadcrumb-item"><a href="/" className="text-white">Home</a></li>
            <li className="breadcrumb-item active text-white">School Bus</li>
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
              School <span className="text-primary">Bus</span>
            </h1>
            <p className="mb-0">
              Our School Buses provide safe, reliable, and comfortable transportation for students, with seating capacity for up to 37 passengers, equipped with modern safety features.
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
                      <h5 className="mb-3">Max Capacity: 37</h5>
                      <p className="mb-0">Seating designed to accommodate up to 37 students comfortably.</p>
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
                      <span className="fa fa-shield-alt fa-2x"></span>
                    </div>
                    <div className="ms-4">
                      <h5 className="mb-3">Safety Features</h5>
                      <p className="mb-0">Equipped with seat belts, emergency exits, and enhanced safety lighting.</p>
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
              <img src={schoolBusImg} className="img-fluid w-100" style={{ objectFit: 'cover' }} alt="School Bus" />
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
                      <h5 className="mb-3">Climate Control</h5>
                      <p className="mb-0">Heating and air conditioning to keep students comfortable year-round.</p>
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
                      <h5 className="mb-3">Communication Systems</h5>
                      <p className="mb-0">PA system and 2-way radios for driver-staff communication.</p>
                    </div>
                    <div className="coachbus-icon">
                      <span className="fa fa-bullhorn fa-2x"></span>
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

export default SchoolBus;
