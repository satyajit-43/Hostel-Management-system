// import React, { useState } from 'react';
// import './Hostelallocation.css'

// export default function HostelAllocation() {
//   // State to store form data
//   const [formData, setFormData] = useState({
//     fullName: '',
//     currentAddress: '',
//     permanentAddress: '',
//     dob: '',
//     mobile: '',
//     email: '',
//     guardianName: '',
//     guardianContact: '',
//     medicalConsiderations: '',
//     hostel: ''
//   });

//   // Handle input change
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value
//     }));
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//     // Perform form submission logic here, such as sending data to the server
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add form submission logic here
//     axios.post('http://localhost:3001/allocation', {name,email,password})
//     .then(result => {console.log(result)
//       navigate('/login')
//     })
//     .catch(err => console.log(err))

//     // console.log("Name:", name);
//     // console.log("Email:", email);
//     // console.log("Password:", password);
//   }

//   return (
//     <div className="container">
//       <h1>Hostel Allocation</h1>
//       <h2>Registration</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-row">
//           <input 
//             type="text" 
//             name="fullName"
//             placeholder="Full Name" 
//             value={formData.fullName}
//             onChange={handleChange}
//           />
//           <input 
//             type="text" 
//             name="currentAddress"
//             placeholder="Current Address" 
//             value={formData.currentAddress}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="form-row">
//           <input 
//             type="text" 
//             name="permanentAddress"
//             placeholder="Permanent Address" 
//             value={formData.permanentAddress}
//             onChange={handleChange}
//           />
//           <input 
//             type="date" 
//             name="dob"
//             placeholder="DOB" 
//             value={formData.dob}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="form-row">
//           <input 
//             type="text" 
//             name="mobile"
//             placeholder="Mob No." 
//             value={formData.mobile}
//             onChange={handleChange}
//           />
//           <input 
//             type="email" 
//             name="email"
//             placeholder="Email Id" 
//             value={formData.email}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="form-row">
//           <input 
//             type="text" 
//             name="guardianName"
//             placeholder="Guardian/Parents Name" 
//             value={formData.guardianName}
//             onChange={handleChange}
//           />
//           <input 
//             type="text" 
//             name="guardianContact"
//             placeholder="Guardian/Parents Contact" 
//             value={formData.guardianContact}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="form-row">
//           <input 
//             type="text" 
//             name="medicalConsiderations"
//             placeholder="Medical Considerations" 
//             value={formData.medicalConsiderations}
//             onChange={handleChange}
//           />
//           <select 
//             name="hostel"
//             value={formData.hostel}
//             onChange={handleChange}
//           >
//             <option value="">Select Hostel</option>
//             <option value="New Hostel">New Hostel</option>
//             <option value="Old Hostel">Old Hostel</option>
//             {/* Add more hostels as needed */}
//           </select>
//         </div>
//         <div className="form-row submit-row">
//           <button type="submit">Submit</button>
//         </div>
//       </form>
//     </div>
//   );
// }

import React, { useState } from 'react';
import './Hostelallocation.css';
import axios from 'axios'; // Import axios for making HTTP requests
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function HostelAllocation() {
  // State to store form data
  const [formData, setFormData] = useState({
    fullName: '',
    currentAddress: '',
    permanentAddress: '',
    dob: '',
    mobile: '',
    email: '',
    guardianName: '',
    guardianContact: '',
    medicalConsiderations: '',
    hostel: ''
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here, sending data to the backend using Axios
    axios.post('http://localhost:3001/allocation', formData)
      .then(response => {
        console.log('Form data successfully submitted:', response.data);
        // You can also add navigation logic after successful submission
        // For example: navigate('/success') if using react-router
        toast.success("Form Submitted Successfully!", {
          position: "top-right",
          autoClose: 3000,
          theme: "dark",
        });
      })
      .catch(error => {
        console.error('There was an error submitting the form:', error);
      });
  };

  return (
    <div className="container">
      <h1>Hostel Allocation</h1>
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <input 
            type="text" 
            name="fullName"
            placeholder="Full Name" 
            value={formData.fullName}
            onChange={handleChange}
          />
          <input 
            type="text" 
            name="currentAddress"
            placeholder="Current Address" 
            value={formData.currentAddress}
            onChange={handleChange}
          />
        </div>
        <div className="form-row">
          <input 
            type="text" 
            name="permanentAddress"
            placeholder="Permanent Address" 
            value={formData.permanentAddress}
            onChange={handleChange}
          />
          <input 
            type="date" 
            name="dob"
            placeholder="DOB" 
            value={formData.dob}
            onChange={handleChange}
          />
        </div>
        <div className="form-row">
          <input 
            type="text" 
            name="mobile"
            placeholder="Mob No." 
            value={formData.mobile}
            onChange={handleChange}
          />
          <input 
            type="email" 
            name="email"
            placeholder="Email Id" 
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-row">
          <input 
            type="text" 
            name="guardianName"
            placeholder="Guardian/Parents Name" 
            value={formData.guardianName}
            onChange={handleChange}
          />
          <input 
            type="text" 
            name="guardianContact"
            placeholder="Guardian/Parents Contact" 
            value={formData.guardianContact}
            onChange={handleChange}
          />
        </div>
        <div className="form-row">
          <input 
            type="text" 
            name="medicalConsiderations"
            placeholder="Medical Considerations" 
            value={formData.medicalConsiderations}
            onChange={handleChange}
          />
          <select 
            name="hostel"
            value={formData.hostel}
            onChange={handleChange}
          >
            <option value="">Select Hostel</option>
            <option value="New Hostel">New Hostel</option>
            <option value="Old Hostel">Old Hostel</option>
          </select>
        </div>
        <div className="form-row submit-row">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
