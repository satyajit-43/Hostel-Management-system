import React from 'react'
import Logo from './assets/fcritlogo.png'

export default function Facilities() {
  return (
        <>
        <div className="header">
            <div className="image">
            <a href="index.html">
                {" "}
                <img src={Logo} alt="" />{" "}
            </a>
            </div>
            <div className="nav">
            <a href="index.html">Home</a>
            <a href="facility.html">Facilities</a>
            <a href="gallery.html">Gallery</a>
            <a href="rules.html">Rules &amp; Regulation</a>
            <a href="login.html">Login </a>
            </div>
        </div>
        <div className="image_rule">
            <p>Facilities athar</p>
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
        </>

  )
}
