import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form, Button,Alert,Spinner } from "react-bootstrap";
import Flatpickr from 'react-flatpickr';
function TripForm() {

      const pad = (n) => (n < 10 ? '0' + n : n);
    
      // Helper format functions
      const formatDate = (date) => {
        if (!date) return '';
        return date.toLocaleDateString(undefined, { day: 'numeric', month: 'long', year: 'numeric' });
      };
      const formatTime = (time) => {
        if (!time) return '';
        return time.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', hour12: true });
      };
    
      // Get today's date string for placeholder
      const today = new Date();
      const todayFormatted = today.toLocaleDateString(undefined, { day: 'numeric', month: 'long', year: 'numeric' });
    
      const [departureDate, setDepartureDate] = useState(null);
      const [returnDate, setReturnDate] = useState(null);
      const [departureTime, setDepartureTime] = useState(null);
      const [returnTime, setReturnTime] = useState(null);
      const [tripType, setTripType] = useState('oneway');
    
      const [pickupStops, setPickupStops] = useState([]);
      const [destinationStops, setDestinationStops] = useState([]);
      const [returnStops, setReturnStops] = useState([]);
    
      const [errors, setErrors] = useState({});
      const [submitted, setSubmitted] = useState(false);
      const [loading, setLoading] = useState(false);
    
      const [formData, setFormData] = useState({
        leavingFrom: '',
        goingTo: '',
        returningTo: '',
        vehicle: '',
        name: '',
        email: '',
        phone: '',
        instructions: '',
        numberOfPassengers: '' // <-- Add this line
      });
    
      const [departureHour, setDepartureHour] = useState('');
      const [departureMinute, setDepartureMinute] = useState('');
      const [departurePeriod, setDeparturePeriod] = useState('AM');
    
      // Add these lines for return time:
      const [returnHour, setReturnHour] = useState('');
      const [returnMinute, setReturnMinute] = useState('');
      const [returnPeriod, setReturnPeriod] = useState('AM');
    
      // Update departureTime when hour/minute/period changes
      useEffect(() => {
        if (departureHour && departureMinute) {
          let hour = Number(departureHour);
          if (departurePeriod === 'PM' && hour < 12) hour += 12;
          if (departurePeriod === 'AM' && hour === 12) hour = 0;
          const date = new Date();
          date.setHours(hour, Number(departureMinute), 0, 0);
          setDepartureTime(date);
        } else {
          setDepartureTime(null);
        }
      }, [departureHour, departureMinute, departurePeriod]);
    
      // Update returnTime when hour/minute/period changes
      useEffect(() => {
        if (returnHour && returnMinute) {
          let hour = Number(returnHour);
          if (returnPeriod === 'PM' && hour < 12) hour += 12;
          if (returnPeriod === 'AM' && hour === 12) hour = 0;
          const date = new Date();
          date.setHours(hour, Number(returnMinute), 0, 0);
          setReturnTime(date);
        } else {
          setReturnTime(null);
        }
      }, [returnHour, returnMinute, returnPeriod]);
    
      const validateForm = () => {
        const newErrors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^\d{10}$/; // exactly 10 digits
        const todayMidnight = new Date();
        todayMidnight.setHours(0, 0, 0, 0);
    
        if (!formData.leavingFrom.trim()) newErrors.leavingFrom = 'Required';
        if (!formData.goingTo.trim()) newErrors.goingTo = 'Required';
    
        if (!departureDate || new Date(departureDate).setHours(0, 0, 0, 0) < todayMidnight.getTime())
          newErrors.departureDate = 'Must be today or later';
    
        if (!departureTime) newErrors.departureTime = 'Required';
    
        if (tripType === 'roundtrip') {
          if (!returnDate || new Date(returnDate).setHours(0, 0, 0, 0) < todayMidnight.getTime())
            newErrors.returnDate = 'Must be today or later';
          if (!returnTime) newErrors.returnTime = 'Required';
          if (!formData.returningTo.trim()) newErrors.returningTo = 'Required';
        }
    
        if (!formData.vehicle) newErrors.vehicle = 'Required';
        if (!formData.name.trim()) newErrors.name = 'Required';
        if (!formData.email || !emailRegex.test(formData.email))
          newErrors.email = 'Valid email required';
        if (!formData.phone || !phoneRegex.test(formData.phone))
          newErrors.phone = 'Enter exactly 10 digits, no spaces or dashes';
        if (!formData.numberOfPassengers || isNaN(formData.numberOfPassengers) || Number(formData.numberOfPassengers) < 1)
          newErrors.numberOfPassengers = 'Enter number of passengers (at least 1)';
    
        return newErrors;
      };
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
      };
    
      const handleAddStop = (type) => {
        const updater = {
          pickup: setPickupStops,
          destination: setDestinationStops,
          return: setReturnStops
        }[type];
        updater(prev => [...prev, '']);
      };
    
      const handleRemoveStop = (type, index) => {
        const updater = {
          pickup: setPickupStops,
          destination: setDestinationStops,
          return: setReturnStops
        }[type];
        updater(prev => prev.filter((_, i) => i !== index));
      };
    
      const handleStopChange = (type, index, value) => {
        const updater = {
          pickup: setPickupStops,
          destination: setDestinationStops,
          return: setReturnStops
        }[type];
    
        updater(prev => {
          const newStops = [...prev];
          newStops[index] = value;
          return newStops;
        });
      };
    
      const handleWhatsAppMessage = () => {
        const countryCode = '1'; 
        let userPhone = formData.phone.trim();
    
        if (!/^\d{10}$/.test(userPhone)) {
          alert("Please enter a valid 10 digit phone number.");
          return;
        }
    
        const fullPhoneNumber = countryCode + userPhone;
    
        // Your WhatsApp business number (must be full intl format, no +)
        const businessWhatsAppNumber = '6476876161'; // Change this!
    
        const baseUrl = `https://wa.me/${businessWhatsAppNumber}?text=`;
    
        const msgLines = [
          `Name: ${formData.name}`,
          `Email: ${formData.email}`,
          `Phone: +${fullPhoneNumber}`,
          `Trip Type: ${tripType}`,
          `Leaving From: ${formData.leavingFrom}`,
          `Pickup Stops: ${pickupStops.filter(s => s.trim()).join(', ') || 'None'}`,
          `Going To: ${formData.goingTo}`,
          `Destination Stops: ${destinationStops.filter(s => s.trim()).join(', ') || 'None'}`,
          `Departure Date: ${formatDate(departureDate)}`,
          `Departure Time: ${formatTime(departureTime)}`,
          `Number of Passengers: ${formData.numberOfPassengers}`,
          ...(tripType === 'roundtrip' ? [
            `Return Date: ${formatDate(returnDate)}`,
            `Return Time: ${formatTime(returnTime)}`,
            `Returning To: ${formData.returningTo}`,
            `Return Stops: ${returnStops.filter(s => s.trim()).join(', ') || 'None'}`,
          ] : []),
          `Vehicle: ${formData.vehicle}`,
          `Special Instructions: ${formData.instructions || 'None'}`
        ];
    
        const message = encodeURIComponent(msgLines.join('\n'));
    
        window.open(baseUrl + message, '_blank');
      };
    
 const handleSubmit = async (e) => {
  e.preventDefault();

  const validation = validateForm();
  setErrors(validation);

  if (Object.keys(validation).length === 0) {
    setLoading(true);
    setSubmitted(false);

    // Prepare data for Web3Forms
    const data = {
      access_key: "60c420aa-f315-400c-969f-71b3d5dfe8a9",
      subject: "New Trip Inquiry",
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: `Trip Type: ${tripType}\nLeaving From: ${formData.leavingFrom}\nPickup Stops: ${pickupStops.filter(s => s.trim()).join(', ') || 'None'}\nGoing To: ${formData.goingTo}\nDestination Stops: ${destinationStops.filter(s => s.trim()).join(', ') || 'None'}\nDeparture Date: ${formatDate(departureDate)}\nDeparture Time: ${formatTime(departureTime)}\nNumber of Passengers: ${formData.numberOfPassengers}\n${tripType === 'roundtrip' ? `Return Date: ${formatDate(returnDate)}\nReturn Time: ${formatTime(returnTime)}\nReturning To: ${formData.returningTo}\nReturn Stops: ${returnStops.filter(s => s.trim()).join(', ') || 'None'}\n` : ''}Vehicle: ${formData.vehicle}\nSpecial Instructions: ${formData.instructions || 'None'}`
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      if (res.ok) {
        handleWhatsAppMessage();
        setSubmitted(true);

        // Reset form
        setFormData({
          leavingFrom: '',
          goingTo: '',
          returningTo: '',
          vehicle: '',
          name: '',
          email: '',
          phone: '',
          instructions: '',
          numberOfPassengers: '' // <-- Add this line
        });
        setPickupStops([]);
        setDestinationStops([]);
        setReturnStops([]);
        setDepartureDate(null);
        setReturnDate(null);
        setDepartureTime(null);
        setReturnTime(null);
        setErrors({});
      } else {
        alert("Failed to send email via Web3Forms.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("There was an error submitting the form.");
    } finally {
      setLoading(false);
    }

  } else {
    setSubmitted(false);
  }
};

    
  return (
  <>
  {/* form start */}
  <Container className="trip-form-container my-5 p-4 shadow rounded">
      <h1 className="display-5 mb-1 text-center">
        <strong className="text-primary" id="form">Book</strong> Your Trip
      </h1>

    <Form
  className="p-4 shadow-sm bg-white"
  onSubmit={handleSubmit}
>

        <input type="hidden" name="access_key" value="60c420aa-f315-400c-969f-71b3d5dfe8a9" />
        <input type="hidden" name="subject" value="New Trip Inquiry" />

        {submitted && <Alert variant="success">Form submitted successfully!</Alert>}

        <div className="stylish-toggle mb-3">
          <div className={`slider ${tripType === "roundtrip" ? "right" : "left"}`} />

          <button
            type="button"
            className={`option ${tripType === "oneway" ? "active" : ""}`}
            onClick={() => setTripType("oneway")}
          >
            One way trip
          </button>

          <button
            type="button"
            className={`option ${tripType === "roundtrip" ? "active" : ""}`}
            onClick={() => setTripType("roundtrip")}
          >
            Round trip
          </button>
        </div>

        <Row className="g-4">
          <Col md={6}>
            <Form.Group>
              <Form.Label className="text-primary fw-bold">Leaving from <span className="text-danger">*</span></Form.Label>
              <Form.Control
                type="text"
                name="leavingFrom"
                placeholder="Starting location"
                onChange={handleChange}
                value={formData.leavingFrom}
              />
              {errors.leavingFrom && <div className="text-danger small">{errors.leavingFrom}</div>}
              {pickupStops.map((stop, i) => (
                <div className="d-flex mt-2" key={i}>
                  <Form.Control
                    placeholder="Pickup stop"
                    className="me-2"
                    value={stop}
                    onChange={e => handleStopChange('pickup', i, e.target.value)}
                    name={`pickupStop${i}`}
                  />
                  <Button variant="outline-danger" onClick={() => handleRemoveStop('pickup', i)}>x</Button>
                </div>
              ))}
              <div
                className="text-primary mt-2"
                style={{ cursor: 'pointer' }}
                onClick={() => handleAddStop('pickup')}
              >
                + Add pickup stop
              </div>
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group>
              <Form.Label className="text-primary fw-bold">Going to <span className="text-danger">*</span></Form.Label>
              <Form.Control
                type="text"
                name="goingTo"
                placeholder="Destination"
                onChange={handleChange}
                value={formData.goingTo}
              />
              {errors.goingTo && <div className="text-danger small">{errors.goingTo}</div>}
              {destinationStops.map((stop, i) => (
                <div className="d-flex mt-2" key={i}>
                  <Form.Control
                    placeholder="Destination stop"
                    className="me-2"
                    value={stop}
                    onChange={e => handleStopChange('destination', i, e.target.value)}
                    name={`destinationStop${i}`}
                  />
                  <Button variant="outline-danger" onClick={() => handleRemoveStop('destination', i)}>x</Button>
                </div>
              ))}
              <div
                className="text-primary mt-2"
                style={{ cursor: 'pointer' }}
                onClick={() => handleAddStop('destination')}
              >
                + Add destination stop
              </div>
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group>
              <Form.Label className="text-primary fw-bold">Departure date <span className="text-danger">*</span></Form.Label>
              <Flatpickr
                className="form-control"
                options={{ minDate: 'today', dateFormat: 'd F Y' }}
                value={departureDate}
                onChange={([date]) => setDepartureDate(date)}
                name="departureDate"
                placeholder={todayFormatted}
              />
              {errors.departureDate && <div className="text-danger small">{errors.departureDate}</div>}
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group>
              <Form.Label className="text-primary fw-bold">Departure time <span className="text-danger">*</span></Form.Label>
              <div className="d-flex align-items-center">
    <Form.Select
      value={departureHour}
      onChange={e => setDepartureHour(e.target.value)}
      style={{ width: '80px', marginRight: '5px' }}
      aria-label="Hour"
    >
      <option value="">HH</option>
      {[...Array(12)].map((_, i) => (
        <option key={i+1} value={i+1}>{i+1}</option>
      ))}
    </Form.Select>
    <span>:</span>
    <Form.Control
      type="number"
      min="0"
      
      max="59"
      value={departureMinute}
      onChange={e => {
        let val = e.target.value;
        if (val.length === 1) val = '0' + val;
        if (val > 59) val = '59';
        setDepartureMinute(val.replace(/^0+(\d)$/, '$1').padStart(2, '0'));
      }}
      style={{ width: '80px', marginLeft: '5px', marginRight: '5px' }}
      aria-label="Minute"
      placeholder="MM"
    />
    <Form.Select
      value={departurePeriod}
      onChange={e => setDeparturePeriod(e.target.value)}
      style={{ width: '80px', marginLeft: '5px' }}
      aria-label="AM/PM"
    >
      <option value="AM">AM</option>
      <option value="PM">PM</option>
    </Form.Select>
  </div>
              {errors.departureTime && <div className="text-danger small">{errors.departureTime}</div>}
            </Form.Group>
          </Col>

          {tripType === 'roundtrip' && (
            <>
              <Col md={6}>
                <Form.Group>
                  <Form.Label className="text-primary fw-bold">Return date <span className="text-danger">*</span></Form.Label>
                  <Flatpickr
                    className="form-control"
                    options={{ minDate: 'today', dateFormat: 'd F Y' }}
                    value={returnDate}
                    onChange={([date]) => setReturnDate(date)}
                    name="returnDate"
                    placeholder={todayFormatted}
                  />
                  {errors.returnDate && <div className="text-danger small">{errors.returnDate}</div>}
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group>
                  <Form.Label className="text-primary fw-bold">Return time <span className="text-danger">*</span></Form.Label>
                  <div className="d-flex align-items-center">
    <Form.Select
      value={returnHour}
      onChange={e => setReturnHour(e.target.value)}
      style={{ width: '80px', marginRight: '5px' }}
      aria-label="Hour"
    >
      <option value="">HH</option>
      {[...Array(12)].map((_, i) => (
        <option key={i+1} value={i+1}>{i+1}</option>
      ))}
    </Form.Select>
    <span>:</span>
    <Form.Control
      type="number"
      min="0"
      max="59"
      value={returnMinute}
      onChange={e => {
        let val = e.target.value;
        if (val.length === 1) val = '0' + val;
        if (val > 59) val = '59';
        setReturnMinute(val.replace(/^0+(\d)$/, '$1').padStart(2, '0'));
      }}
      style={{ width: '80px', marginLeft: '5px', marginRight: '5px' }}
      aria-label="Minute"
      placeholder="MM"
    />
    <Form.Select
      value={returnPeriod}
      onChange={e => setReturnPeriod(e.target.value)}
      style={{ width: '80px', marginLeft: '5px' }}
      aria-label="AM/PM"
    >
      <option value="AM">AM</option>
      <option value="PM">PM</option>
    </Form.Select>
  </div>
                  {errors.returnTime && <div className="text-danger small">{errors.returnTime}</div>}
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group>
                  <Form.Label className="text-primary fw-bold">Returning to <span className="text-danger">*</span></Form.Label>
                  <Form.Control
                    type="text"
                    name="returningTo"
                    placeholder="Return destination"
                    onChange={handleChange}
                    value={formData.returningTo}
                  />
                  {errors.returningTo && <div className="text-danger small">{errors.returningTo}</div>}
                  {returnStops.map((stop, i) => (
                    <div className="d-flex mt-2" key={i}>
                      <Form.Control
                        placeholder="Return stop"
                        className="me-2"
                        value={stop}
                        onChange={e => handleStopChange('return', i, e.target.value)}
                        name={`returnStop${i}`}
                      />
                      <Button variant="outline-danger" onClick={() => handleRemoveStop('return', i)}>x</Button>
                    </div>
                  ))}
                  <div
                    className="text-primary mt-2"
                    style={{ cursor: 'pointer' }}
                    onClick={() => handleAddStop('return')}
                  >
                    + Add return stop
                  </div>
                </Form.Group>
              </Col>
            </>
          )}

          <Col md={6}>
            <Form.Group>
              <Form.Label className="text-primary fw-bold">Vehicle <span className="text-danger">*</span></Form.Label>
              <Form.Select
                name="vehicle"
                onChange={handleChange}
                value={formData.vehicle}
              >
           <option value="">Choose vehicle</option>
              <option value="luxury-coach">56 Passenger Luxury Coach</option>
              <option value="mid-size-coach">37 Passenger Medium Coach</option>
              <option value="mini-coach">27 Passenger Mini Coach</option>
              <option value="school-bus">School Bus</option>
              <option value="minicoach">14 Passenger Transit/Sprinter</option>
              <option value="limousine">Hummer Limousine Car</option>
              </Form.Select>
              {errors.vehicle && <div className="text-danger small">{errors.vehicle}</div>}
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group>
              <Form.Label className="text-primary fw-bold">Name <span className="text-danger">*</span></Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Your full name"
                onChange={handleChange}
                value={formData.name}
              />
              {errors.name && <div className="text-danger small">{errors.name}</div>}
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group>
              <Form.Label className="text-primary fw-bold">Email <span className="text-danger">*</span></Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="you@example.com"
                onChange={handleChange}
                value={formData.email}
              />
              {errors.email && <div className="text-danger small">{errors.email}</div>}
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group>
              <Form.Label className="text-primary fw-bold">Phone <span className="text-danger">*</span></Form.Label>
              <Form.Control
                type="text"
                name="phone"
                placeholder="Enter 10 digit phone number (no spaces/dashes)"
                onChange={handleChange}
                value={formData.phone}
              />
              {errors.phone && <div className="text-danger small">{errors.phone}</div>}
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group>
              <Form.Label className="text-primary fw-bold">Number of Passengers <span className="text-danger">*</span></Form.Label>
              <Form.Control
                type="number"
                name="numberOfPassengers"
                min="1"
                placeholder="Enter number of passengers"
                onChange={handleChange}
                value={formData.numberOfPassengers}
              />
              {errors.numberOfPassengers && <div className="text-danger small">{errors.numberOfPassengers}</div>}
            </Form.Group>
          </Col>

          <Col xs={12}>
            <Form.Group>
              <Form.Label className="text-primary fw-bold">Special Instructions</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="instructions"
                placeholder="Additional details..."
                onChange={handleChange}
                value={formData.instructions}
              />
            </Form.Group>
          </Col>

          <Col xs={12} className="mt-4">
    <div className="d-flex justify-content-center align-items-center mt-4 ">
  <Button
    type="submit"
    variant="primary"
    className="submit-btn p-3"
    disabled={loading}
  >
    {loading ? (
      <>
        <Spinner
          as="span"
          animation="border"
          size="sm"
          role="status"
          aria-hidden="true"
          className="me-1"
        />
        Submitting...
      </>
    ) : (
      'Submit Trip Inquiry'
    )}
  </Button>
</div>


          </Col>
        </Row>
      </Form>
    </Container>

      {/* form end */}
  </>
  )
}

export default TripForm;
