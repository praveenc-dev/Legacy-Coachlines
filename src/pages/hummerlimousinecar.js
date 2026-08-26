import React from 'react';
import hummerLimousineImg from '../img/fleet6.png'; // Image for Hummer limousine
import { HashLink } from 'react-router-hash-link';

function HummerLimousine() {
  return (
    <>
      {/* Banner Start */}
      <div className="container-fluid bg-breadcrumb">
        <div className="container text-center py-5" style={{ maxWidth: '900px' }}>
          <h3 className="text-white display-2 mb-4" data-aos="fade-down" data-aos-delay="100">Hummer Limousine</h3>
          <ol className="breadcrumb justify-content-center text-white mb-0" data-aos="fade-down" data-aos-delay="300">
            <li className="breadcrumb-item"><a href="/" className="text-white">Home</a></li>
            <li className="breadcrumb-item active text-white">Hummer Limousine</li>
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
              Hummer <span className="text-primary">Limousine</span>
            </h1>
            <p className="mb-0">
              Experience luxury and style with our Hummer limousine, perfect for special occasions and executive transport, seating up to 20 passengers with premium amenities.
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
                      <h5 className="mb-3">Max Capacity: 20</h5>
                      <p className="mb-0">Spacious seating for up to 20 passengers in luxury.</p>
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
                      <span className="fa fa-glass-cheers fa-2x"></span>
                    </div>
                    <div className="ms-4">
                      <h5 className="mb-3">Luxury Amenities</h5>
                      <p className="mb-0">Includes minibar, premium sound system, LED lighting, and comfortable leather seats.</p>
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
              <img src={hummerLimousineImg} className="img-fluid w-100" style={{ objectFit: 'cover' }} alt="Hummer Limousine" />
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
                      <p className="mb-0">Keep cool or cozy with advanced A/C and heating systems.</p>
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
                      <h5 className="mb-3">Safety & Comfort</h5>
                      <p className="mb-0">Equipped with seatbelts, tinted windows, and privacy partitions.</p>
                    </div>
                    <div className="coachbus-icon">
                      <span className="fa fa-shield-alt fa-2x"></span>
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
      </div>
    </>
  );
}

export default HummerLimousine;
