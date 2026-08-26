import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle , faBus, faShieldAlt, faStar } from '@fortawesome/free-solid-svg-icons';

// Local image imports
import bus1 from '../img/about1.png';
import bus2 from '../img/about2.jpg';
import bus3 from '../img/about3.jpg';
import bus4 from '../img/about4.png';

function About() {
    const images = [bus1, bus2, bus3, bus4];
  return (
    <>
      {/* Banner Start */}
      <div className="container-fluid bg-breadcrumb">
        <div className="container text-center py-5" style={{ maxWidth: '900px' }}>
          <h3 className="text-white display-3 mb-4" data-aos="fade-down" data-aos-delay="100">About Us</h3>
          <ol className="breadcrumb justify-content-center text-white mb-0" data-aos="fade-down" data-aos-delay="300">
            <li className="breadcrumb-item"><a href="/" className="text-white">Home</a></li>
            <li className="breadcrumb-item active text-white">About Us</li>
          </ol>
        </div>
      </div>
      {/* Banner End */}
      {/* About section start here */}
   <section style={{
      background: '#fff',
      padding: '60px 20px',
      fontFamily: "'Inter', sans-serif",
      color: '#1a1a1a'
    }}>
      <div style={{ maxWidth: '1200px', margin: 'auto' }}>
        <h3 style={{
          textTransform: 'uppercase',
          color: '#650611',
          textAlign: 'center',
          marginBottom: '10px',
          fontWeight: 600
        }}>
          About Us
        </h3>
        <h2 style={{
          fontSize: '32px',
          textAlign: 'center',
          fontWeight: 700,
          marginBottom: '20px'
        }}>
          Proudly Canadian. Driven By Experience. <br />Committed To Excellence.
        </h2>

        <p style={{
          maxWidth: '850px',
          margin: '0 auto 30px',
          textAlign: 'center',
          lineHeight: 1.6,
          color: '#444'
        }}>
          With over 9 years of experience, we are a Canadian-owned charter bus company proudly serving communities across Canada and the United States. From day one, our mission has been simple: to provide <strong>safe, reliable, and comfortable transportation</strong> with exceptional service at every turn. Whether you're planning <em>a corporate retreat, school trip, wedding, or cross-country tour</em> — we’re here to make your journey smooth, enjoyable, and stress-free.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))',
          gap: '30px',
          margin: '40px 0'
        }}>
          {[
            {
              icon: faCheckCircle,
              title: '9 Years Of Industry Experience',
              desc: 'Built on professionalism, punctuality, and attention to detail.'
            },
            {
              icon: faBus,
              title: 'Diverse, Modern Fleet',
              desc: 'Luxury coaches to compact shuttles, maintained meticulously for any occasion.'
            },
            {
              icon: faShieldAlt,
              title: 'Safety First, Always',
              desc: 'Certified drivers, routine inspections, and deep-cleaned vehicles for peace of mind.'
            },
            {
              icon: faStar,
              title: 'Unmatched Service',
              desc: 'Support before, during, and after your trip — something others can’t match.'
            }
          ].map((item, index) => (
            <div key={index} style={{ display: 'flex', alignItems: 'flex-start' }}>
              <FontAwesomeIcon icon={item.icon} style={{ color: '#650611', marginRight: '12px', fontSize: '18px' }} />
              <div>
                <strong>{item.title}</strong>
                <p style={{ margin: '4px 0', color: '#555', fontSize: '14px' }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <h3 style={{
          marginTop: '40px',
          fontSize: '18px',
          color: '#1a1a1a',
          fontWeight: 600
        }}>
          Where We Go
        </h3>
        <p style={{
          maxWidth: '850px',
          margin: '10px auto 30px',
          textAlign: 'left',
          lineHeight: 1.6,
          color: '#444'
        }}>
          From the Rocky Mountains to the Maritimes, and Canadian cities to U.S. destinations — we've proudly served across borders. Every trip, short or long, is an experience to remember.
        </p>

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <h4 style={{ color: '#1a1a1a', marginBottom: '10px' }}>
            Let’s Make Your Next Journey Exceptional.
          </h4>
          <p style={{ color: '#650611', fontWeight: 600 }}>
            We’re More Than Just Transportation—We’re Your Partner In Travel.
          </p>
          <a
            href="/contact"
            style={{
              display: 'inline-block',
              marginTop: '20px',
              padding: '10px 20px',
              background: '#650611',
              color: '#fff',
              borderRadius: '6px',
              textDecoration: 'none',
              fontWeight: 600
            }}
          >
            Start Planning Now
          </a>
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          marginTop: '60px',
          flexWrap: 'wrap'
        }}>
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Gallery ${index + 1}`}
              style={{
                width: '250px',
                height: 'auto',
                borderRadius: '8px'
              }}
            />
          ))}
        </div>
      </div>
    </section>

      {/* About section end here */}
    </>
  );
}

export default About;










