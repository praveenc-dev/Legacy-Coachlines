import React from 'react'
// import { HashLink } from 'react-router-hash-link';
import Logo from '../../img/logo-header.png';

function footer() {
  return (
    <>


      {/* Footer Start */}
      <div className="container-fluid footer py-5 wow fadeIn" animationDelay="0.1s">
        <div className="container py-1">
          <div className="row g-5">

            {/* Logo */}
            <div className="col-md-6 col-lg-6 col-xl-3 ">
              <div className="footer-item d-flex flex-column">
                <img src={Logo} alt="Sastha Travels Logo" className="mb-3  rounded" style={{ height: 'auto', marginTop: '20px' }} />
              </div>
            </div>

            {/* Contact Info */}
            <div className="col-md-6 col-lg-6 col-xl-4">
              <div className="footer-item d-flex flex-column">
                <h4 className="text-white mb-4">Feel Free To Reach Us</h4>
                <div className="d-flex align-items-center mb-3">
                  <button
                    type="button"
                    className="btn btn-lg-square btn-primary rounded-circle mx-2"
                  >
                    <i className="fas fa-phone-alt footer-icon"></i>
                  </button>
                  <div className="text-white ms-2">
                    <a href="tel:+18883313450" className="text-white mb-0">1(888) 331-3450</a>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <a className="btn btn-lg-square btn-primary rounded-circle mx-2" href="tel:+16476876161">
                    <i className="fa fa-phone-alt footer-icon"></i>
                  </a>
                  <div className="text-white ms-2">
                    <a href="tel:+6479461987" className="text-white mb-0">(647) 946-1987</a>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <a className="btn btn-lg-square btn-primary rounded-circle mx-2" href="mailto:info@legacycoachlines.com">
                    <i className="fas fa-envelope footer-icon"></i>
                  </a>
                  <div className="text-white ms-2">
                    <a href="mailto:info@legacycoachlines.com" className="text-white mb-0">info@legacycoachlines.com</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-md-6 col-lg-6 col-xl-2">
              <div className="footer-item d-flex flex-column">
                <h4 className="text-white mb-4">Quick Links</h4>
                <a href="/" className="footer-link text-white mb-1">Home</a>
                <a href="/about" className="footer-link text-white mb-1">About Us</a>

                <a href="/service" className="footer-link mb-1 text-white">Our Services</a>
                <a href="/contact" className="footer-link mb-1 text-white">Contact Us</a>
              </div>
            </div>

            {/* Company Info & Social */}
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <h4 className="text-white mb-4">Legacy Coachlines Bus Charter</h4>
                <p className="text-white mb-3">
                  Proudly Canadian, providing reliable charter services across Canada for tours, school trips, corporate events and more. </p>
                <div className="d-flex">
                  <a className="btn btn-lg-square btn-primary rounded-circle me-2" href="https://www.facebook.com/share/1C1sytuDCt/?mibextid=wwXIfr"><i className="fab fa-facebook-f footer-icon"></i></a>
                  <a className="btn btn-lg-square btn-primary rounded-circle mx-2" href="https://www.youtube.com/channel/UCblaQsteYYb_3fplhOM1Shg"><i className="fab bi bi-youtube footer-icon"></i></a>
                  <a className="btn btn-lg-square btn-primary rounded-circle mx-2" href="https://www.instagram.com/sastha_express?igsh=cHF0ZzlvYjhiMGhu&utm_source=qr"><i className="fab fa-instagram footer-icon"></i></a>
                </div>
              </div>
            </div>
            <div className="container text-center text-white border-top pt-5">
              © 2025{' '}
              <a
                className="custom-link"
                href="https://sasthaexpress.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Legacy Coachlines.
              </a> All Rights Reserved
            </div>
          </div>
        </div>
      </div>

      {/* Footer End */}




      {/* new social media links design   */}
      <nav className="social">
        <ul>
          <li>
            <a
              href="https://www.facebook.com/share/1C1sytuDCt/?mibextid=wwXIfr"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
              <i
                className="bi bi-facebook soc_icon"
                style={{ color: "rgba(24, 119, 242)" }}
              ></i>
            </a>
          </li>

          <li>
            <a
              href="https://www.instagram.com/sastha_express?igsh=cHF0ZzlvYjhiMGhu&utm_source=qr"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
              <i
                className="bi bi-instagram soc_icon"
                style={{ color: "#E1306C" }}
              ></i>
            </a>
          </li>

          <li>
            <a
              href="https://www.youtube.com/channel/UCblaQsteYYb_3fplhOM1Shg"
              target="_blank"
              rel="noreferrer"
            >
              YouTube
              <i
                className="bi bi-youtube soc_icon"
                style={{ color: "#FF0000" }}
              ></i>
            </a>
          </li>

          <li>
            <button
              type="button"
              className="footer-social-button"
              data-bs-toggle="modal"
              data-bs-target="#callModal"
            >
              Call Us
              <i
                className="bi bi-phone"
                style={{ color: "#333" }}
              ></i>
            </button>
          </li>
        </ul>
      </nav>
      {/*  new social media links design ends   */}


      {/*  whats app sticky icons   */}
      <a href="https://wa.me/6476876161?text=Enquiry For Construction" class="whatsapp-icon" rel="noreferrer" target="_blank" title="Chat with us on WhatsApp">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" />
      </a>

      {/*  Back to Top  */}
      <button
        type="button"
        className="btn btn-lg btn-primary back-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <i className="bi bi-arrow-up"></i>
      </button>

      {/* Mobile Modal */}
      <div className="modal fade" id="callModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">

            {/* Header */}
            <div className="modal-header bg-primary text-white">
              <h5 className="modal-title text-white">Contact a specialist</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            {/* Body */}
            <div className="modal-body text-center">
              <p className="mb-4">Choose a number below to reach us directly:</p>

              <a href="tel:+16479461987" className="btn btn-outline-primary w-100 mb-3">
                <i className="fas fa-phone-alt me-2"></i> (647) 946-1987
              </a>

              <a href="tel:+18883313450" className="btn btn-outline-primary w-100">
                <i className="fas fa-phone-alt me-2"></i> 1 (888) 331-3450
              </a>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default footer