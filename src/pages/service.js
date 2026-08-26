import React, { useEffect } from 'react';

import service1 from '../img/service_airport.png';
import service2 from '../img/service_festival.png';
import service3 from '../img/service_field.png';
import service4 from '../img/service_intercity.png';
import service5 from '../img/service_tour.png';
import service6 from '../img/service_wedding.png';
import service7 from '../img/service_corporate.png';
import service8 from '../img/service_sports.png';

import AOS from 'aos';
import 'aos/dist/aos.css';

function Service() {
  const services = [
    {
      img: service1,
      title: 'Airport Shuttle',
      description: 'Reliable and professional airport transfers, including seaports and rail links. Our chauffeurs ensure timely arrivals and assist with luggage — all at competitive rates.'
    },
    {
      img: service2,
      title: 'Festival & Event',
      description: 'Travel stress-free to your favorite festivals and events. Whether it’s a theme park trip or a custom group outing, enjoy comfort and convenience on our shuttle or coach buses.'
    },
    {
      img: service3,
      title: 'Field Trip',
      description: 'Safe, affordable, and reliable transportation for school or college groups. Ideal for field trips, athletic events, theater outings, theme parks, and more.'
    },
    {
      img: service4,
      title: 'Intercity Transfer',
      description: 'Affordable and efficient intercity travel. Whether it’s for a business meeting or family event, we ensure a smooth and stylish journey across cities.'
    },
    {
      img: service5,
      title: 'Tour',
      description: 'Discover Canada in comfort with our luxury coach bus tours. From serene landscapes to bustling cities, we offer memorable experiences for every traveler.'
    },
    {
      img: service6,
      title: 'Wedding',
      description: 'Elegant and hassle-free wedding transportation. We work with you or your planner to ensure seamless travel for guests, bachelor(ette) parties, and special events.'
    },
    {
      img: service7,
      title: 'Corporate',
      description: 'Professional charter bus solutions for corporate events. Choose from various coach sizes and request amenities like WiFi or TV monitors for a productive journey.'
    },
    {
      img: service8,
      title: 'Sports Event',
      description: 'Timely and secure team transportation to games. Our spacious buses ensure comfort and safe equipment transport, with discounts for schools and institutions.'
    }
  ];


  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      {/* Banner Start  */}
      <div className="container-fluid bg-breadcrumb">
        <div className="container text-center py-5" style={{ maxWidth: "900px" }}>
          <h3 className="text-white display-3 mb-4" data-aos="fade-down" data-aos-delay="100">
            Our Services
          </h3>
          <ol className="breadcrumb justify-content-center text-white mb-0" data-aos="fade-down" data-aos-delay="300">
            <li className="breadcrumb-item"><a href="/" className="text-white">Home</a></li>
            <li className="breadcrumb-item active text-white">Services</li>
          </ol>
        </div>
      </div>
      {/* Banner End  */}

      {/*  Service start  */}
      <div className="container-fluid service-page bg-light py-5">
        <div className="container py-5">
          <div className="row g-4 align-items-end">
            <div className="col-xl-8">
              <h4 className="text-secondary sub-title fw-bold" data-aos="fade-up" data-aos-delay="100">Services</h4>
              <h1 className="display-3 mb-4" data-aos="fade-up" data-aos-delay="200"><strong className="text-primary">Our</strong> Services</h1>
            </div>
          </div>
          <div className="row g-4">
            {services.map((service, index) => (
              <div
                className="col-lg-4"
                key={index}
                data-aos="fade-up"
                data-aos-delay={`${0.2 + (index % 3) * 0.2}s`}
              >
                <div className="service-page-item">
                  <div className="service-page-img">
                    <img src={service.img} className="img-fluid w-100" alt={service.title} />
                  </div>
                  <div className="service-page-content text-center p-4">
                    <a href="/" className="d-block fs-4 my-4">{service.title}</a>
                    <p className="text-white mb-4">{service.description}</p>
                    <button
                      type="button"
                      className="btn btn-secondary service-btn py-2 px-4"
                      data-bs-toggle="modal"
                      data-bs-target="#callModal"
                    >
                      <i className="bi bi-telephone-fill"></i>
                      Call To Book
                    </button>
                  </div>
                  <div className="service-page-tytle d-flex align-items-center justify-content-start ps-4 w-100">
                    <h4>{service.title}</h4>
                    <div className="btn-xl-square bg-secondary p-4 ms-auto" style={{ width: "80px", height: "80px" }}>
                      <i className="fas fa-arrow-right text-white fa-2x"></i>

                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/*  Service End  */}


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
  );
}

export default Service;