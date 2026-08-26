import React from 'react';
import miniCoachImg from '../img/fleet3.png'; // Replace with your actual image
import { HashLink } from 'react-router-hash-link';

function MiniCoach() {
  return (
    <>
      {/* Banner Start */}
      <div className="container-fluid bg-breadcrumb">
        <div className="container text-center py-5" style={{ maxWidth: '900px' }}>
          <h3 className="text-white display-3 mb-4" data-aos="fade-down" data-aos-delay="100">Mini Coach</h3>
          <ol className="breadcrumb justify-content-center text-white mb-0" data-aos="fade-down" data-aos-delay="300">
            <li className="breadcrumb-item"><a href="/" className="text-white">Home</a></li>
            <li className="breadcrumb-item active text-white">Mini Coach</li>
          </ol>
        </div>
      </div>
      {/* Banner End */}

      <div className="container-fluid coachbus py-5">
        <div className="container py-5">
          <div
            className="text-center mx-auto pb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: '800px' }}
          >
            <h1 className="display-5 text-capitalize mb-3">
              Mini <span className="text-primary">Coach</span>
            </h1>
            <p className="mb-0">
              The FS50 Krystal Mini Coach is a compact, climate-controlled ride ideal for small group travel, comfortably accommodating up to 28 passengers.
            </p>
          </div>

          <div className="row g-4 align-items-center">
            {/* Left Features */}
            <div className="col-xl-4">
              <div className="row gy-4 gx-0">
                <div className="col-12 wow fadeInUp" data-wow-delay="0.1s">
                  <div className="coachbus-item">
                    <div className="coachbus-icon">
                      <span className="fa fa-users fa-2x"></span>
                    </div>
                    <div className="ms-4">
                      <h5 className="mb-3">Max Capacity: 28</h5>
                      <p className="mb-0">Perfect for intimate group trips with seating for 28 passengers.</p>
                    </div>
                  </div>
                </div>

                <div className="col-12 wow fadeInUp" data-wow-delay="0.3s">
                  <div className="coachbus-item">
                    <div className="coachbus-icon">
                      <span className="fa fa-bus fa-2x"></span>
                    </div>
                    <div className="ms-4">
                      <h5 className="mb-3">FS50 Krystal</h5>
                      <p className="mb-0">A premium mini coach built for comfort, reliability, and maneuverability.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Center Image */}
            <div className="col-lg-12 col-xl-4 wow fadeInUp" data-wow-delay="0.2s">
              <img src={miniCoachImg} className="img-fluid w-100" style={{ objectFit: 'cover' }} alt="Mini Coach" />
            </div>

            {/* Right Features */}
            <div className="col-xl-4">
              <div className="row gy-4 gx-0">
                <div className="col-12 wow fadeInUp" data-wow-delay="0.1s">
                  <div className="coachbus-item justify-content-end">
                    <div className="text-end me-4">
                      <h5 className="mb-3">A/C & Heater</h5>
                      <p className="mb-0">Comfortable interior temperature in all seasons.</p>
                    </div>
                    <div className="coachbus-icon">
                      <span className="fa fa-snowflake fa-2x"></span>
                    </div>
                  </div>
                </div>

                <div className="col-12 wow fadeInUp" data-wow-delay="0.3s">
                  <div className="coachbus-item justify-content-end">
                    <div className="text-end me-4">
                      <h5 className="mb-3">Seatbelts</h5>
                      <p className="mb-0">Ensuring safety for every passenger onboard.</p>
                    </div>
                    <div className="coachbus-icon">
                      <span className="fa fa-shield-alt fa-2x"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enquire Button */}
          <div className="row mt-4">
            <div className="col text-center">
              <HashLink smooth to="/form">
                <button className="btn btn-primary px-4 py-2">
                  <i className="fa fa-envelope me-2"></i> Enquire
                </button>
              </HashLink>
            </div>
          </div>

          {/* Features Section */}
          <div className="row mt-5">
            {/* Standard Features */}
            <div className="col-lg-12">
              <div className="p-4 border rounded shadow-sm h-100 bg-light">
                <div className="d-flex align-items-center mb-3">
                  <i className="fa fa-star text-primary fa-lg me-2"></i>
                  <h4 className="mb-0">Standard Features</h4>
                </div>
                <hr />
                <ul className="list-unstyled ps-3 mb-0 row row-cols-1 row-cols-md-2">
                  <li className="mb-2 col"><i className="fa fa-check text-success me-2"></i>30 Passenger Interior</li>
                  <li className="mb-2 col"><i className="fa fa-check text-success me-2"></i>Interior of 30 Passenger</li>
                  <li className="mb-2 col"><i className="fa fa-check text-success me-2"></i>DVD Player & Monitors</li>
                  <li className="mb-2 col"><i className="fa fa-check text-success me-2"></i>Individual Reclining Seats</li>
                  <li className="mb-2 col"><i className="fa fa-check text-success me-2"></i>Foot and Arm Rests</li>
                  <li className="mb-2 col"><i className="fa fa-check text-success me-2"></i>CD Player & Radio</li>
                  <li className="mb-2 col"><i className="fa fa-check text-success me-2"></i>Super Comfort Control Package</li>
                  <li className="mb-2 col"><i className="fa fa-check text-success me-2"></i>Luggage Storage Space</li>
                  <li className="mb-2 col"><i className="fa fa-check text-success me-2"></i>PA Systems</li>
                  <li className="mb-2 col"><i className="fa fa-check text-success me-2"></i>2-Way Radios</li>
                  <li className="mb-2 col"><i className="fa fa-check text-success me-2"></i>Seat Belts</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default MiniCoach;
