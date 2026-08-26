import React, { useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import Slider from "react-slick";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Form from './form';

import Carousel1 from '../img/Carousel1.jpg';
import Carousel2 from '../img/Carousel2.jpg';
import Carousel3 from '../img/Carousel3.jpg';
import Carousel4 from '../img/Carousel4.jpg';
import fleet1 from '../img/fleet1.png';
import fleet2 from '../img/fleet2.png';
import fleet3 from '../img/fleet3.png';
import fleet4 from '../img/fleet4.png';
import fleet5 from '../img/fleet5.png';
import fleet6 from '../img/fleet6.png';

import arrow1 from '../img/arrow-1.svg';
import arrow2 from '../img/arrow-2.svg';
import arrow3 from '../img/arrow-3.svg';
import {
  faFilm,
  faDollarSign,
  faBed,
  faUsers,
  faDoorOpen,
  faLeaf,
  faShieldAlt,
  faSmile,
  faBinoculars,
  faBusAlt,
} from '@fortawesome/free-solid-svg-icons';
import advantage1 from '../img/advantage1.jpg';
import advantage2 from '../img/advantage2.jpg';
import advantage3 from '../img/advantage3.jpg';
import advantage4 from '../img/advantage4.jpg';
import advantage5 from '../img/advantage5.jpg';
import advantage6 from '../img/advantage6.jpg';
import advantage7 from '../img/advantage7.jpg';
import advantage8 from '../img/advantage8.jpg';
import advantage9 from '../img/advantage9.jpg';
import advantage10 from '../img/advantage10.jpg';
import advantage11 from '../img/advantage11.jpg';
import advantage12 from '../img/advantage12.jpg';



const testimonials = [
  {
    name: "SARAI CHAVEZ",
    text:
      "Legacy Coachlines handled our 140 guests effortlessly, even with last-minute changes. Friendly, flexible, and highly recommended!",
  },
  {
    name: "AIRA SAPINA",
    text:
      "A smooth, stress-free trip to Montreal! Great planning, professional service—looking forward to our next journey with them.",
  },
  {
    name: "SENTHILKUMAR",
    text:
      "Affordable and reliable! Our 4-day trip across cities was well-organized and comfortable. Excellent customer support throughout.",
  },
  {
    name: "EMILY DAVIS",
    text:
      "Legacy Coachlines provided exceptional coordination for our corporate retreat. Every detail was taken care of—truly seamless service!",
  },
];


const steps = [
  {
    icon: '🚌',
    title: 'Choose Your Ride',
    desc: 'Find the perfect bus for your group – by size, comfort, or features.'
  },
  {
    icon: '📄',
    title: 'Plan & Book',
    desc: 'Tell us your travel needs – we’ll handle the logistics with care.'
  },
  {
    icon: '💳',
    title: 'Secure Your Trip',
    desc: 'Confirm with easy and reliable payment options that suit you.'
  },
  {
    icon: '🗺️',
    title: 'Hit the Road!',
    desc: 'Relax and enjoy the ride – your travel adventure begins here!'
  }
];

const arrowImages = [arrow1, arrow2, arrow3];

function Home() {


  const benefits = [
    { number: 1, title: "We Do The Driving", text: "You're free of the hassles of traffic, parking, and backseat drivers." },
    { number: 2, title: "You Can See The Sights", text: "Enjoy the scenic mountains, villages, and lakes without distraction." },
    { number: 3, title: "Sleep If You’d Like", text: "Modern motorcoaches offer reclining seats so you can relax or nap." },
    { number: 4, title: "Get Up And Socialize", text: "Walk around, chat, or bond with friends during your trip." },
    { number: 5, title: "Enjoy A Movie", text: "Onboard entertainment systems let you enjoy movies or videos." },
    { number: 6, title: "Save Money", text: "Group motorcoach travel is much more affordable than multiple cars." },
    { number: 7, title: "Door-To-Door Service", text: "Get picked up and dropped off at your preferred locations." },
    { number: 8, title: "Consider The Environment", text: "Motorcoaches are fuel-efficient and eco-friendly for group travel." },
    { number: 9, title: "Safety. Safety. Safety.", text: "Statistically among the safest forms of travel, year after year." },

    { number: 10, title: "You Love To Be Surprised", text: "Modern coaches offer luxury, comfort, and style — nothing like old buses." }
  ];

  const activityItems = [
    { icon: faBusAlt, text: 'We do the driving' },
    { icon: faBinoculars, text: 'You can see the sights' },
    { icon: faBed, text: "Sleep if you'd like" },
    { icon: faUsers, text: 'Get up and socialize' },
    { icon: faFilm, text: 'Enjoy a movie' },
    { icon: faDollarSign, text: 'Save money' },

    { icon: faDoorOpen, text: 'Door-to-door service' },

    { icon: faLeaf, text: 'Consider the environment' },

    { icon: faShieldAlt, text: 'Safety. Safety. Safety.' },

    { icon: faSmile, text: 'You love to be surprised' },
  ];
  const settings = {
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 3,
    infinite: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 600,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "20px",
        },
      },
    ],
  };

  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // banner icon style
  const iconStyle = {
    fontSize: '1.5rem',
    color: 'white',
  };




  return (
    <>

      {/* Banner section start here */}
      <Carousel
        fade
        className="custom-carousel mb-3"
        indicators={false}
        prevIcon={<i className="bi bi-chevron-left" style={iconStyle} />}
        nextIcon={<i className="bi bi-chevron-right" style={iconStyle} />}
      >
        {/* Slide 1 */}
        <Carousel.Item>
          <img className="d-block w-100" src={Carousel1} alt="Luxury and Comfort" />
          <div className="carousel-caption">
            <div
              className="carousel-caption-content p-3"
              style={{
                maxWidth: '900px',
                backgroundColor: 'rgba(0, 0, 0, 0.2)',
                borderRadius: '10px',
                backdropFilter: 'blur(4px)',
              }}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h1
                className="display-4 text-capitalize text-white mb-4"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                Your Exceptional Journey Starts Here
              </h1>

              {/* Call & Email Buttons */}
              <div className="d-flex gap-3 justify-content-center" data-aos="fade-up" data-aos-delay="500">
                <a
                  className="btn btn-outline-light d-flex align-items-center gap-2"
                  data-bs-toggle="modal"
                  data-bs-target="#callModal"
                  role="button"
                >
                  <i className="bi bi-telephone-fill"></i> Call Us
                </a>

                <a
                  className="btn btn-outline-light d-flex align-items-center gap-2"
                  data-bs-toggle="modal"
                  data-bs-target="#emailModal"
                  role="button"
                >
                  <i className="bi bi-envelope-fill"></i>Email Us
                </a>

              </div>
            </div>

          </div>
        </Carousel.Item>

        {/* Slide 2 */}
        <Carousel.Item>
          <img className="d-block w-100" src={Carousel2} alt="Your Journey, Your Way" />
          <div className="carousel-caption">
            <div
              className="carousel-caption-content p-3"
              style={{
                maxWidth: '900px',
                backgroundColor: 'rgba(0, 0, 0, 0.2)',
                borderRadius: '10px',
                backdropFilter: 'blur(4px)',
              }}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h1
                className="display-4 text-capitalize text-white mb-4"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                Driven by Comfort. Trusted by Thousands.
              </h1>

              {/* Call & Email Buttons */}
              <div className="d-flex gap-3 justify-content-center" data-aos="fade-up" data-aos-delay="500">
                <a
                  className="btn btn-outline-light d-flex align-items-center gap-2"
                  data-bs-toggle="modal"
                  data-bs-target="#callModal"
                  role="button"
                >
                  <i className="bi bi-telephone-fill"></i> Call Us
                </a>

                <a className="btn btn-outline-light d-flex align-items-center gap-2" data-bs-toggle="modal" data-bs-target="#emailModal" role="button">
                  <i className="bi bi-envelope-fill"></i>Email Us
                </a>
              </div>
            </div>
          </div>
        </Carousel.Item>

        {/* Slide 3 */}
        <Carousel.Item>
          <img className="d-block w-100" src={Carousel3} alt="Travel with Confidence" />
          <div className="carousel-caption">
            <div
              className="carousel-caption-content p-3"
              style={{
                maxWidth: '900px',
                backgroundColor: 'rgba(0, 0, 0, 0.2)',
                borderRadius: '10px',
                backdropFilter: 'blur(4px)',
              }}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h1
                className="display-4 text-capitalize text-white mb-4"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                Luxury On The Move
              </h1>

              {/* Call & Email Buttons */}
              <div className="d-flex gap-3 justify-content-center" data-aos="fade-up" data-aos-delay="500">
                <a
                  className="btn btn-outline-light d-flex align-items-center gap-2"
                  data-bs-toggle="modal"
                  data-bs-target="#callModal"
                  role="button"
                >
                  <i className="bi bi-telephone-fill"></i> Call Us
                </a>

                <a
                  className="btn btn-outline-light d-flex align-items-center gap-2"
                  data-bs-toggle="modal"
                  data-bs-target="#emailModal"
                  role="button"
                >
                  <i className="bi bi-envelope-fill"></i>Email Us
                </a>
              </div>
            </div>
          </div>
        </Carousel.Item>

        {/* Slide 4 */}
        <Carousel.Item>
          <img className="d-block w-100" src={Carousel4} alt="Charter the Exceptional" />
          <div className="carousel-caption">
            <div
              className="carousel-caption-content p-3"
              style={{
                maxWidth: '900px',
                backgroundColor: 'rgba(0, 0, 0, 0.2)',
                borderRadius: '10px',
                backdropFilter: 'blur(4px)',
              }}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h1
                className="display-4 text-capitalize text-white mb-4"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                Safe. Reliable, Trusted
              </h1>

              {/* Call & Email Buttons */}
              <div className="d-flex gap-3 justify-content-center" data-aos="fade-up" data-aos-delay="500">
                <a
                  className="btn btn-outline-light d-flex align-items-center gap-2"
                  data-bs-toggle="modal"
                  data-bs-target="#callModal"
                  role="button"
                >
                  <i className="bi bi-telephone-fill"></i> Call Us
                </a>

                <a
                  className="btn btn-outline-light d-flex align-items-center gap-2"
                  data-bs-toggle="modal"
                  data-bs-target="#emailModal"
                  role="button"
                >
                  <i className="bi bi-envelope-fill"></i>Email Us
                </a>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
      {/* Banner section end here */}

      <Form />
      {/* Service Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-4 align-items-end">
            <div className="col-xl-8" data-aos="fade-up" data-aos-delay="100">
              <h4 className="text-secondary sub-title fw-bold">Services</h4>
              <h1 className="display-3 mb-4">
                <strong className="text-primary">Tours & Group</strong> Travel Services
              </h1>
            </div>
          </div>

          <Container className="my-5 position-relative step-container">
            <Row className="justify-content-center">
              {steps.map((step, index) => (
                <Col key={index} md={3} className="text-center position-relative">
                  <Card className="p-4 shadow step-card">
                    <div className="step-icon bg-orange mb-3 mx-auto">{step.icon}</div>
                    <Card.Title>{step.title}</Card.Title>
                    <Card.Text className="text-muted" style={{ height: '62px' }}>{step.desc}</Card.Text>
                  </Card>

                  {index < steps.length - 1 && (
                    <div className={`curved-arrow arrow-pos-${index}`}>
                      <img src={arrowImages[index]} alt={`Arrow ${index + 1}`} />
                    </div>
                  )}

                </Col>
              ))}
            </Row>
          </Container>
        </div>
      </div>

      {/* Service end */}

      {/* Fleet start here */}
      <div className="container-fluid service-sec py-5">
        <div className="container">
          <div className="row g-4 align-items-end">
            <div className="col-xl-8" data-aos="fade-up" data-aos-delay="100">
              <h4 className="text-secondary sub-title fw-bold">Fleet</h4>
              <h1 className="display-3 mb-4">
                <strong className="text-primary">Our</strong> Fleet
              </h1>
            </div>
          </div>

          <div className="row g-4">
            {/* Fleet Item 1 */}
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
              <div className="service-sec-item">
                <div className="service-sec-img">
                  <img src={fleet1} className="img-fluid rounded-top w-100" alt="Coach Bus Prevost" />
                </div>
                <div className="service-sec-content rounded-bottom p-4">
                  <a href="/fleet/coachbus" className="h4 d-block mb-3">Coach Bus Prevost</a>
                  <a href="/fleet/coachbus">View More <i className="fa fa-arrow-right"></i></a>
                </div>
              </div>
            </div>

            {/* Fleet Item 2 */}
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
              <div className="service-sec-item">
                <div className="service-sec-img">
                  <img src={fleet2} className="img-fluid rounded-top w-100" alt="37 Passenger Medium Coach" />
                </div>
                <div className="service-sec-content rounded-bottom p-4">
                  <a href="/fleet/mediumcoach" className="h4 d-block mb-3">37 Passenger Medium Coach</a>
                  <a href="/fleet/mediumcoach">View More <i className="fa fa-arrow-right"></i></a>
                </div>
              </div>
            </div>

            {/* Fleet Item 3 */}
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
              <div className="service-sec-item">
                <div className="service-sec-img">
                  <img src={fleet3} className="img-fluid rounded-top w-100" alt="27 Passenger Mini Coach" />
                </div>
                <div className="service-sec-content rounded-bottom p-4">
                  <a href="/fleet/minicoach" className="h4 d-block mb-3">27 Passenger Mini Coach</a>
                  <a href="/fleet/minicoach">View More <i className="fa fa-arrow-right"></i></a>
                </div>
              </div>
            </div>

            {/* Fleet Item 4 */}
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
              <div className="service-sec-item">
                <div className="service-sec-img">
                  <img src={fleet4} className="img-fluid rounded-top w-100" alt="School Bus" />
                </div>
                <div className="service-sec-content rounded-bottom p-4">
                  <a href="/fleet/schollbus" className="h4 d-block mb-3">School Bus</a>
                  <a href="/fleet/schollbus">View More <i className="fa fa-arrow-right"></i></a>
                </div>
              </div>
            </div>
            {/* Fleet Item 5 */}
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
              <div className="service-sec-item">
                <div className="service-sec-img">
                  <img src={fleet5} className="img-fluid rounded-top w-100" alt="14 Passenger Transit" />
                </div>
                <div className="service-sec-content rounded-bottom p-4">
                  <a href="/fleet/transitsprinter" className="h4 d-block mb-3">14 Passenger Transit</a>
                  <a href="/fleet/transitsprinter">View More <i className="fa fa-arrow-right"></i></a>
                </div>
              </div>
            </div>

            {/* Fleet Item 6 */}
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
              <div className="service-sec-item">
                <div className="service-sec-img">
                  <img src={fleet6} className="img-fluid rounded-top w-100" alt="Hummer Limousine Car" />
                </div>
                <div className="service-sec-content rounded-bottom p-4">
                  <a href="/fleet/hummerlimousinecar" className="h4 d-block mb-3">Hummer Limousine Car</a>
                  <a href="/fleet/hummerlimousinecar">View More <i className="fa fa-arrow-right"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fleet end */}
      <Container fluid className="py-5 activities-section">
        <h2 className="mb-3 fw-bold text-primary text-center">Advantages of motorcoach travel</h2>
        <p className="text-muted text-center">
          Ten reasons why you should take the Motorcoach.
        </p>
        <Container>
          <Row className="align-items-center">
            {/* Carousel first on mobile */}
            <Col xs={12} md={6} className="order-md-2 order-1">
              <div className="custom-carousel rounded-4 overflow-hidden shadow">
                <Carousel fade controls indicators={false} interval={4000}>
                  <Carousel.Item>
                    <img className="d-block w-100" src={advantage1} alt="Fleet 1" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className="d-block w-100" src={advantage2} alt="Fleet 2" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className="d-block w-100" src={advantage3} alt="Fleet 3" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className="d-block w-100" src={advantage4} alt="Fleet 1" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className="d-block w-100" src={advantage5} alt="Fleet 2" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className="d-block w-100" src={advantage6} alt="Fleet 3" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className="d-block w-100" src={advantage7} alt="Fleet 1" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className="d-block w-100" src={advantage8} alt="Fleet 2" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className="d-block w-100" src={advantage9} alt="Fleet 3" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className="d-block w-100" src={advantage10} alt="Fleet 1" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className="d-block w-100" src={advantage11} alt="Fleet 2" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className="d-block w-100" src={advantage12} alt="Fleet 3" />
                  </Carousel.Item>
                </Carousel>
              </div>
            </Col>

            <Col lg={6} className='Advantages'>
              <Card className="info-card border-0 shadow-sm rounded-4 ">
                <Card.Body>


                  <Row className="g-3 ">
                    {activityItems.map((item, idx) => (
                      <Col xs={12} sm={6} key={idx}>
                        <div className="feature-box d-flex align-items-start gap-3 p-3 bg-light rounded-3 h-100">
                          <div className="feature-icon  text-white rounded-circle d-flex align-items-center justify-content-center">
                            <FontAwesomeIcon icon={item.icon} />
                          </div>
                          <div className="feature-text pt-1">
                            <span className="fw-semibold small">{idx + 1}. {item.text}</span>
                          </div>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>



      {/* Benefit List */}
      <Container fluid className="py-5 benefits-section">
        <section className="benefits-section">
          <h2>
            Experience Canada The Way It Was Meant To Be Seen — <span className="highlight-yellow">By Luxury Motorcoach</span>
          </h2>
          <p>
            If getting there fast is your only goal, there are other ways to travel. But if you want to truly experience Canada — from the majestic Rockies to the rolling Maritimes — there's no better seat than the one aboard a luxury motorcoach.
          </p>
          <p>
            At ground level, the journey becomes part of the adventure. You don't just fly over the scenery — you feel it. You don’t just arrive — you discover.
          </p>
          <p><strong className="highlight-yellow">Luxury Travel. Local Connection. Real Experience.</strong></p>

          <div className="benefit-grid">
            {benefits.map((benefit) => (
              <div className="benefit-item" key={benefit.number}>
                <h6 className="benefit-title">
                  <span className='number-circle'>{benefit.number}</span>{benefit.title}
                </h6>
                <div className="benefit-text">{benefit.text}</div>
              </div>
            ))}
          </div>
        </section>
      </Container>

      {/* testimonial start */}
      <div
        className="container-xxl py-5"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="container">
          <div className="row g-4 align-items-end">
            <div className="col-xl-8">
              <h4 className="text-secondary sub-title fw-bold">Testimonial</h4>
              <h1 className="display-3 mb-4">
                <strong className="text-primary">Our</strong> Clients Say!!!
              </h1>
            </div>
          </div>

          <Slider {...settings} className="testimonial-carousel position-relative mt-3 mb-3">
            {testimonials.map((t, i) => (
              <div key={i} className="px-3" data-aos="fade-up" data-aos-delay={i * 100}>
                <div className="testimonial-item  text-center border p-4 rounded shadow-sm">
                  <h5 className="mb-0">{t.name}</h5>
                  <p className="mt-2 mb-0">{t.text}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      {/* testimonial end */}





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


      {/* Email Modal */}
      <div className="modal fade" id="emailModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content ">

            {/* Header */}
            <div className="modal-header bg-primary text-white">
              <h5 className="modal-title text-white">Email Us</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            {/* Body */}
            <div className="modal-body text-center">
              <p className="mb-4">
                We'd love to hear from you! Reach us directly at:
              </p>

              <h6 className="fw-semibold mb-3 text-primary">info@legacycoachlines.com</h6>

              <a href="mailto:info@legacycoachlines.com" className="btn btn-primary w-100">
                <i className="fas fa-envelope me-2"></i> Send Message
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;


