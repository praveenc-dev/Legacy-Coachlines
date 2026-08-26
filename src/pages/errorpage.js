import React, { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

function ErrorPage() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      {/* Banner Start */}
      <div className="container-fluid bg-breadcrumb">
        <div className="container text-center py-5" style={{ maxWidth: '900px' }}>
          <h3 className="text-white display-3 mb-4" data-aos="fade-down" data-aos-delay="100">404</h3>
          <ol className="breadcrumb justify-content-center text-white mb-0" data-aos="fade-down" data-aos-delay="300">
            <li className="breadcrumb-item"><a href="/" className="text-white">Home</a></li>
            <li className="breadcrumb-item active text-white">404</li>
          </ol>
        </div>
      </div>
      {/* Banner End */}
      {/* 404 Start  */}
      <div className="container-fluid bg-light py-5">
        <div className="container py-5 text-center">
          <div className="row justify-content-center">
            <div className="col-lg-6" data-aos="fade-in" data-aos-delay="100">
              <i className="bi bi-exclamation-triangle display-1 text-secondary"></i>
              <h1 className="display-1" data-aos="fade-up" data-aos-delay="200">404</h1>
              <h1 className="mb-4" data-aos="fade-up" data-aos-delay="300">Page Not Found</h1>
              <p className="mb-4" data-aos="fade-up" data-aos-delay="400">
                We’re sorry, the page you have looked for does not exist in our website! Maybe go to our home page or try to use a search?
              </p>
              <a className="btn btn-primary text-white rounded-pill py-3 px-5" href="/" data-aos="zoom-in" data-aos-delay="500">
                Go Back To Home
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* 404 End  */}
    </>
  );
}

export default ErrorPage;