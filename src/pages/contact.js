import React, { useState } from 'react';

function Contact() {
  const [status, setStatus] = useState(null); 
  const [loading, setLoading] = useState(false);
    const [quoteStatus, setQuoteStatus] = useState(null);
  const [quoteLoading, setQuoteLoading] = useState(false);
const [dateError, setDateError] = useState('');

const today = new Date().toISOString().split('T')[0];
const [startDate, setStartDate] = useState(today);
const [endDate, setEndDate] = useState(today);

const whatsappNumber = '6476876161'; 

const openWhatsApp = (data) => {
  const message = `
    New Contact Form Submission:
    Name: ${data.name}
    Email: ${data.email}
    Phone: ${data.phone || 'N/A'}
    Subject: ${data.subject || 'N/A'}
    Message: ${data.message}
  `.trim();

  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
  window.open(whatsappUrl, '_blank');
};

const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus(null);
  setLoading(true);

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries());

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    const result = await response.json();

    if (response.ok && result.success) {
      setStatus('SUCCESS');
      e.target.reset();

      // Open WhatsApp with the form data
      openWhatsApp(data);
    } else {
      setStatus('ERROR');
    }
  } catch {
    setStatus('ERROR');
  }
  setLoading(false);
};

const openWhatsAppQuote = (data) => {
  const message = `
    Instant Quote Request:
    From: ${data.pickup}
    To: ${data.dropoff}
    Start Date: ${data.startDate}
    End Date: ${data.endDate}
    Bus Type: ${data.busType}
    Email: ${data.email}
    Phone: ${data.phone}
  `.trim();

  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
  window.open(whatsappUrl, '_blank');
};


const handleQuoteSubmit = async (e) => {
  e.preventDefault();

  if (dateError) {
    alert(dateError);
    return; 
  }

  setQuoteStatus(null);
  setQuoteLoading(true);


  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries());

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    const result = await response.json();

    if (response.ok && result.success) {
      setQuoteStatus('SUCCESS');
      e.target.reset();

      // Open WhatsApp with quote details
      openWhatsAppQuote(data);
    } else {
      setQuoteStatus('ERROR');
    }
  } catch {
    setQuoteStatus('ERROR');
  }
  setQuoteLoading(false);
};

  const handleStartDateChange = (e) => {
  const value = e.target.value;
  setStartDate(value);

  const today = new Date().toISOString().split('T')[0];
  if (value < today) {
    setDateError("Start Date cannot be before today.");
  } else if (endDate && value > endDate) {
    setDateError("Start Date cannot be after End Date.");
  } else {
    setDateError('');
  }
};

const handleEndDateChange = (e) => {
  const value = e.target.value;
  setEndDate(value);

  if (startDate && value < startDate) {
    setDateError("End Date cannot be before Start Date.");
  } else {
    setDateError('');
  }
};


  return (
    <>
      {/* Banner Start */}
      <div className="container-fluid bg-breadcrumb">
        <div className="container text-center py-5" style={{ maxWidth: '900px' }}>
          <h3 className="text-white display-3 mb-4" data-aos="fade-down" data-aos-delay="100">Contact Us</h3>
          <ol className="breadcrumb justify-content-center text-white mb-0" data-aos="fade-down" data-aos-delay="300">
            <li className="breadcrumb-item"><a href="/" className="text-white">Home</a></li>
            <li className="breadcrumb-item active text-white">Contact Us</li>
          </ol>
        </div>
      </div>
      {/* Banner End */}

      {/* Contact Start */}
      <div className="container-fluid contact py-5">
        <div className="container py-5">
          <div className="pb-5">
            <h4 className="text-secondary sub-title fw-bold" data-aos="fade-up" data-aos-delay="100">Contact Us</h4>
            <h1 className="display-2 mb-0" data-aos="fade-up" data-aos-delay="300">Get In Touch</h1>
          </div>
          <div className="bg-light rounded p-4 pb-0">
            <div className="row g-5 align-items-center">
              <div className="col-lg-8" data-aos="fade-left" data-aos-delay="100">
                <h2 className="display-6 mb-2">Have a Question?</h2>
                <p className="mb-4">Feel free to reach out to us using the form below.</p>

                <form onSubmit={handleSubmit}>
                  <input type="hidden" name="access_key" value="60c420aa-f315-400c-969f-71b3d5dfe8a9" />
                  <div className="row g-3">
                    <div className="col-lg-12 col-xl-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          name="name"
                          placeholder="Your Name"
                          required
                        />
                        <label htmlFor="name">Your Name</label>
                      </div>
                    </div>
                    <div className="col-lg-12 col-xl-6">
                      <div className="form-floating">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          placeholder="Your Email"
                          required
                          pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                          title="Please enter a valid email address"
                        />
                        <label htmlFor="email">Your Email</label>
                      </div>
                    </div>
                    <div className="col-lg-12 col-xl-6">
                      <div className="form-floating">
                        <input
                          type="tel"
                          className="form-control"
                          id="phone"
                          name="phone"
                          placeholder="Phone"
                        />
                        <label htmlFor="phone">Your Phone</label>
                      </div>
                    </div>
                    <div className="col-lg-12 col-xl-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="subject"
                          name="subject"
                          placeholder="Subject"
                        />
                        <label htmlFor="subject">Subject</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea
                          className="form-control"
                          placeholder="Leave a message here"
                          id="message"
                          name="message"
                          style={{ height: "160px" }}
                          required
                        ></textarea>
                        <label htmlFor="message">Message</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn btn-primary w-100 py-3" disabled={loading}>
                        {loading ? 'Sending...' : 'Send Message'}
                      </button>
                    </div>
                    <div className="col-12">
                      {status === 'SUCCESS' && (
                        <div className="alert alert-success mt-3" role="alert">
                          Thank you! Your message has been sent.
                        </div>
                      )}
                      {status === 'ERROR' && (
                        <div className="alert alert-danger mt-3" role="alert">
                          Oops! Something went wrong. Please try again later.
                        </div>
                      )}
                    </div>
                  </div>
                </form>

              </div>

              {/* Contact Info + Modals */}
              <div className="col-lg-4 pt-5" data-aos="fade-right" data-aos-delay="300">
                <div className="d-flex align-items-center mb-5 mt-5" role="button" data-bs-toggle="modal" data-bs-target="#quoteModal">
                  <div className="mb-3">
                    <i className="fas fa-clipboard-list fa-2x text-primary"></i>
                  </div>
                  <div className="ms-4">
                    <h4 className="mb-0">Instant Quote</h4>
                    <small className="text-muted">Click to get a quick quote</small>
                  </div>
                </div>

                <div className="d-flex align-items-center mb-5" role="button" data-bs-toggle="modal" data-bs-target="#callModal">
                  <div className="mb-3"><i className="fa fa-phone-alt fa-2x text-primary"></i></div>
                  <div className="ms-4">
                    <h4 className="mb-0">Contact a specialist</h4>
                    <small className="text-muted">Click to call</small>
                  </div>
                </div>

                <div className="d-flex align-items-center mb-5" role="button" data-bs-toggle="modal" data-bs-target="#emailModal">
                  <div className="mb-3"><i className="fa fa-envelope-open fa-2x text-primary"></i></div>
                  <div className="ms-4">
                    <h4 className="mb-0">Email Us</h4>
                    <small className="text-muted">Click to email us</small>
                  </div>
                </div>

                <div className="d-flex align-items-center">
                  <div className="d-flex">
                    <a className="btn btn-lg-square btn-primary rounded-circle me-2" href="/"><i className="fab fa-facebook-f footer-icon"></i></a>
                    <a className="btn btn-lg-square btn-primary rounded-circle mx-2" href="/"><i className="fab fa-instagram footer-icon"></i></a>
                  </div>
                </div>
              </div>

              {/* Google Map */}
              <div className="col-12" data-aos="fade-up" data-aos-delay="100">
                <div className="rounded h-100 pb-3">
                  <iframe
                    className="rounded w-100"
                    style={{ height: "500px" }}
                    loading="lazy"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184551.9097722695!2d-79.5428670635676!3d43.7183709581945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sToronto%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sin!4v1752056314936!5m2!1sen!2sin"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Instant Quote Modal */}
    <div className="modal fade" id="quoteModal" tabIndex="-1" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-lg">
    <div className="modal-content">
      {/* Header */}
      <div className="modal-header bg-primary text-white">
        <h5 className="modal-title fw-bold text-white">Instant quote</h5>
        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>

      {/* Form */}
      <form onSubmit={handleQuoteSubmit} className="p-4">
        <input type="hidden" name="access_key" value="60c420aa-f315-400c-969f-71b3d5dfe8a9" />
        <input type="hidden" name="subject" value="Instant Quote Request" />

        <div className="row g-4">
          <div className="col-md-6">
            <label htmlFor="pickup" className="form-label text-primary fw-semibold">From</label>
            <input type="text" id="pickup" name="pickup" className="form-control border-success" placeholder="Enter a location" required />
          </div>
          <div className="col-md-6">
            <label htmlFor="dropoff" className="form-label text-primary fw-semibold">Going to</label>
            <input type="text" id="dropoff" name="dropoff" className="form-control border-success" placeholder="Enter a location" required />
          </div>

          <div className="col-md-6">
            <label htmlFor="startDate" className="form-label text-primary fw-semibold">Start Date</label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              className="form-control border-success"
              value={startDate}
              min={today}
              onChange={handleStartDateChange}
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="endDate" className="form-label text-primary fw-semibold">End Date</label>
            <input
              type="date"
              id="endDate"
              name="endDate"
              className="form-control border-success"
              value={endDate}
              min={startDate || today}
              onChange={handleEndDateChange}
              required
            />
          </div>

          <div className="col-12">
            <label htmlFor="busType" className="form-label text-primary fw-semibold">Select Bus</label>
            <select id="busType" name="busType" className="form-select border-success" required>
             <option value="">Choose vehicle</option>
              <option value="luxury-coach">56 Passenger Luxury Coach</option>
              <option value="mid-size-coach">37 Passenger Medium Coach</option>
              <option value="mini-coach">27 Passenger Mini Coach</option>
              <option value="school-bus">School Bus</option>
              <option value="minicoach">14 Passenger Transit/Sprinter</option>
              <option value="limousine">Hummer Limousine Car</option>
            </select>
          </div>

          <div className="col-md-6">
            <label htmlFor="email" className="form-label text-primary fw-semibold">Email</label>
            <input type="email" id="email" name="email" className="form-control border-success" placeholder="Enter your email" required />
          </div>

          <div className="col-md-6">
            <label htmlFor="phone" className="form-label text-primary fw-semibold">Phone no.</label>
            <input type="tel" id="phone" name="phone" className="form-control border-success" placeholder="Enter your phone" required />
          </div>
        </div>

        {/* Footer */}
        <div className="d-flex justify-content-center mt-4">
          <button type="submit" className="btn btn-primary  px-4 py-2" disabled={quoteLoading}>
            {quoteLoading ? 'Sending...' : 'Submit request'}
          </button>
        </div>

        {/* Feedback Messages */}
        {quoteStatus === 'SUCCESS' && (
          <div className="alert alert-success mt-3" role="alert">
            Thank you! Your quote request has been sent.
          </div>
        )}
        {quoteStatus === 'ERROR' && (
          <div className="alert alert-danger mt-3" role="alert">
            Oops! Something went wrong. Please try again later.
          </div>
        )}
      </form>
    </div>
  </div>
</div>


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

export default Contact;
