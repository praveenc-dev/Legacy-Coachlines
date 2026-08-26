import React from 'react';
import Logo from '../../img/logo-header.png'; 
import { NavLink, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

function Topbar() {
  const location = useLocation();
  const isFleetActive = location.pathname.startsWith('/fleet');

  return (
    <>

  
      {/* Navbar Start */}
      <div className="container-fluid position-relative p-0">
        <nav className="navbar navbar-expand-lg navbar-light bg-white px-4 px-lg-5 py-3 py-lg-0">
          <NavLink to="/" className="navbar-brand p-0">
            <img src={Logo} alt="Logo" />
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="fa fa-bars"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  'nav-item nav-link' + (isActive ? ' active' : '')
                }
              >
                Home
              </NavLink>

              <NavLink to="/about"  className={({ isActive }) =>
                  'nav-item nav-link' + (isActive ? ' active' : '')
                }>
                About Us
              </NavLink>

              <NavLink
                to="/service"
                className={({ isActive }) =>
                  'nav-item nav-link' + (isActive ? ' active' : '')
                }
              >
                Our Services
              </NavLink>

              <div className="nav-item dropdown">
                <NavLink
                  to="/fleet"
                  className={`nav-link dropdown-toggle ${isFleetActive ? 'active' : ''}`}
                  id="fleetDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  onClick={e => e.preventDefault()}
                >
                  Our Fleet
                </NavLink>
                <ul className="dropdown-menu" aria-labelledby="fleetDropdown">
                  <li>
                    <NavLink
                      to="/fleet/coachbus"
                      className={({ isActive }) =>
                        'dropdown-item' + (isActive ? ' active' : '')
                      }
                    >
                    56 Passenger Luxury Coach
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/fleet/mediumcoach"
                      className={({ isActive }) =>
                        'dropdown-item' + (isActive ? ' active' : '')
                      }
                    >
                     37 Passenger Medium Coach
                    </NavLink>
                  </li>
                     <li>
                    <NavLink
                      to="/fleet/minicoach"
                      className={({ isActive }) =>
                        'dropdown-item' + (isActive ? ' active' : '')
                      }
                    >
                    27 Passenger Mini Coach
                    </NavLink>
                      <NavLink
                      to="/fleet/schollbus"
                      className={({ isActive }) =>
                        'dropdown-item' + (isActive ? ' active' : '')
                      }
                    >
                    School Bus
                    </NavLink>
                      <NavLink
                      to="/fleet/transitsprinter"
                      className={({ isActive }) =>
                        'dropdown-item' + (isActive ? ' active' : '')
                      }
                    >
                     14 Passenger Transit/Sprinter
                    </NavLink>
                         <NavLink
                      to="/fleet/hummerlimousinecar"
                      className={({ isActive }) =>
                        'dropdown-item' + (isActive ? ' active' : '')
                      }
                    >
                    Hummer Limousine Car
                    </NavLink>
                  </li>
                </ul>
              </div>

              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  'nav-item nav-link' + (isActive ? ' active' : '')
                }
              >
                Contact Us
              </NavLink>
            </div>

            <HashLink
              to="/form"
              className="btn btn-primary rounded-pill text-white py-2 px-4 flex-wrap flex-sm-shrink-0"
            >
              Get a Quote
            </HashLink>
          </div>
        </nav>
      </div>
      {/* Navbar End */}
    </>
  );
}

export default Topbar;
