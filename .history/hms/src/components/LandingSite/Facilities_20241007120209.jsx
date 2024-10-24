import React from 'react'
// import Logo from './assets/fcritlogo.png'

export default function Facilities() {
  return (
        <div>
    <div className="header">
          <div className="image">
            <img src={Logo} alt="FCRIT" /> 
          </div>
          
          <div className="nav">
            <button>Home</button>
            <button>Facilities</button>
            <button>Gallery</button>
            <button>Rules &amp; Regulation</button>
            <Link to="/login"> <button>Login </button> </Link>
          </div>
    </div>

        <div className="image_rule">
            <p>Facilities</p>
        </div>
        <div className="container">
            <div className="row">
            <div className="column">
                <img
                src="./Gallery/facility_1.jpg"
                alt="Dining Hall"
                className="facility-image"
                />
                <a href="#" className="facility-link">
                Gym
                </a>
            </div>
            <div className="column">
                <img
                src="./Gallery/facility_2.jpg"
                alt="Cafeteria"
                className="facility-image"
                />
                <a href="#" className="facility-link">
                Cafeteria
                </a>
            </div>
            </div>
            <div className="row">
            <div className="column">
                <img
                src="./Gallery/facility_3.jpg"
                alt="Vending Machine"
                className="facility-image"
                />
                <a href="#" className="facility-link">
                Washing Machine
                </a>
            </div>
            <div className="column">
                <img
                src="./Gallery/facility_4.jpg"
                alt="Kitchen"
                className="facility-image"
                />
                <a href="#" className="facility-link">
                Mess
                </a>
            </div>
            </div>
        </div>
        </div>

  )
}
