import React from 'react'
import './home.css'
import Logo from './assets/fcritlogo.png'
import fcrit from './assets/fcrit1.jpg'
import { Link } from 'react-router-dom'
import Complaints from './Compliant'

export default function Home() {
  return (
//  <>
//         <div className="header">
//             <div className="image">
//                     <img src={Logo} alt="" />{" "}
//             </div>

//             <div className="nav">
//             <a href="index.html">Home</a>
//             <a href="facility.html">Facilities</a>
//             <a href="gallery.html">Gallery</a>
//             <a href="rules.html">Rules &amp; Regulation</a>
//             <a href="login.html">Login </a>
//             </div>
//         </div>
//         <div className="main">
//             <div className="college_name">
//             <h1>FCRIT</h1>
//             <p>Hostel Management System</p>
//             </div>
//         </div>
//         <div className="about">
//             <p>About Us</p>
//             <hr />
//             <div className="content">
//             <div className="about_img" />
//             <div className="about_us">
//                 Fr. CRIT. has, within a short span of time, established itself as a
//                 leading engineering college in Mumbai University. Though its reputation
//                 rests mainly on the high quality, value-based technical education that
//                 it imparts, it has to its credit a verdant, well-maintained Campus and
//                 extensive facilities. Its location in the vicinity of the holy places of
//                 various religious denominations underscores its secular credentials and
//                 its philosophy of "Vasudhaiva Kuttumbakam".
//             </div>
//             </div>
//         </div>
//         <div className="footer">
//             <div className="quick">
//             <div>
//                 <a href="allocation.html">
//                 <h3>Hostel Allocation</h3>
//                 </a>
//                 <h3>Report Grievence</h3>
//                 <h3>Rules &amp; Regulation</h3>
//             </div>
//             <div>
//                 <h3>Alumini Connect</h3>
//                 <h3>Mess Menu</h3>
//                 <h3>Gallery</h3>
//             </div>
//             </div>
//             <div className="contact">
//             <h1>Contact Us</h1>
//             <p>
//                 Agnel Technical Education Complex Sector 9-A, Vashi, Navi Mumbai,
//                 Maharashtra, India PIN - 400703
//             </p>
//             </div>
//             <div className="handles">
//             <h1>Our Handles</h1>
//             </div>
//         </div>
//     </>

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

    <div className="main">
      <img src={fcrit} alt="fcrit" />
          <div className="college_name">
            <h1>FCRIT</h1>
            <p>Hostel Management System</p>
          </div>
    </div>

    <div className="about">
          <p>About Us</p>
          <hr />
          <div className="content">  
            <div className="about_img" />
            <div className="about_us">
              Fr. CRIT. has, within a short span of time, established itself as a leading engineering college in Mumbai University. Though its reputation rests mainly on the high quality, value-based technical education that it imparts, it has to its credit a verdant, well-maintained Campus and extensive facilities. Its location in the vicinity of the holy places of various religious denominations underscores its secular credentials and its philosophy of "Vasudhaiva Kuttumbakam".
            </div>
          </div>
    </div>

    <div className="footer">
        <div className="quick">           
            <div>
              <a href="/allocation"><h3>Hostel Allocation</h3></a>
              {/* <h3>Report Grievence</h3> */}
              <Link to={"/complaint"}>Report Grievence</Link>
              <h3>Rules &amp; Regulation</h3>
            </div>
            <div>
              <h3>Alumini Connect</h3>
              <h3>Mess Menu</h3>
              <h3>Gallery</h3>
            </div>
        </div>

        <div className="contact">
            <h1>Contact Us</h1>
            <p>Agnel Technical Education Complex
              Sector 9-A, Vashi, Navi Mumbai,
              Maharashtra, India
              PIN - 400703</p>
        </div>

        <div className="handles">
            <h1>Our Handles</h1>
        </div>
     </div>
</div>
  )
}
