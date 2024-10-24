// import { useEffect, useState } from "react";
// // import { Input } from "../../LandingSite/AuthPage/Input";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// function Complaints() {

//   const [loading, setLoading] = useState(false);

//   const registerComplaint = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     let student = JSON.parse(localStorage.getItem("student"));
//     const complaint = {
//       student: student._id,
//       hostel: student.hostel,
//       title: title,
//       description: desc,
//       type: type,
//     };

//     const res = await fetch("http://localhost:3000/api/complaint/register", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(complaint),
//     });

//     const data = await res.json();

//     if (data.success) {
//       setRegComplaints([]);
//       toast.success(
//         "Complaint Registered Successfully!", {
//         position: "top-right",
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "dark",
//       })
//       setTitle("");
//       setDesc("");
//       setType("Electric");
//     } else {
//       toast.error(
//         data.errors, {
//         position: "top-right",
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "dark",
//       })
//     }
//     setLoading(false);
//   };

//   const [title, setTitle] = useState("");
//   const [desc, setDesc] = useState("");
//   const [type, setType] = useState("Electric");

//   const types = ["Electric", "Furniture", "Cleaning", "Others"];

//   function chngType(e) {
//     setType(e.target.value);
//   }

//   function titleChange(e) {
//     setTitle(e.target.value);
//   }
//   function descChange(e) {
//     setDesc(e.target.value);
//   }

//   const complaintTitle = {
//     name: "complaint title",
//     placeholder: "Title",
//     req: true,
//     type: "text",
//     value: title,
//     onChange: titleChange,
//   };
//   const complaintType = {
//     name: "complaint type",
//     placeholder: "Type...",
//     req: true,
//     type: "text",
//     value: type,
//     onChange: chngType,
//   };

//   const [regComplaints, setRegComplaints] = useState([]);

  
//   useEffect(()=> {
//     const student = JSON.parse(localStorage.getItem("student"));
//     const cmpln = { student: student._id };
//     const fetchComplaints = async () => {
//       const res = await fetch("http://localhost:3000/api/complaint/student", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(cmpln),
//       });
//       const data = await res.json();
//       let complaints = data.complaints;
//       complaints = complaints.map((complaint) => {
//         var date = new Date(complaint.date);
//         complaint.date = date.toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });
//         return {
//           title: complaint.title,
//           status: complaint.status,
//           date: complaint.date,
//           type: complaint.type,
//         };
//       });
//       setRegComplaints(data.complaints);
//     }
//     fetchComplaints();
//   }, [regComplaints.length])


//   return (
//     <div className="w-full h-screen flex flex-col gap-10 items-center justify-center md:p-0 px-10 max-h-screen overflow-y-auto pt-80 md:pt-80 lg:p-0">
//       <h1 className="text-white font-bold text-5xl mt-10">Complaints</h1>
//       <div className="flex gap-5 flex-wrap items-center justify-center">
//         <form
//           method="POST"
//           onSubmit={registerComplaint}
//           className="md:w-96 w-full py-5 pb-7 px-10 bg-neutral-950 rounded-lg shadow-xl flex flex-col gap-5"
//         >
//           <div>
//             <label
//               htmlFor="description"
//               className="block mb-2 text-sm font-medium text-white"
//             >
//               Your complaint type
//             </label>
//             <select
//               className="border sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 outline-none"
//               onChange={chngType}
//             >
//               {types.map((type) => (
//                 <option key={type}>{type}</option>
//               ))}
//             </select>
//             {type.toLowerCase() === "electric" ||
//             type.toLowerCase() === "furniture" ||
//             type.toLowerCase() === "cleaning" ? (
//               <></>
//             ) : (
//               <div className="mt-5">
//                 <Input field={complaintType} />
//               </div>
//             )}
//           </div>
//           <Input field={complaintTitle} />
//           <div>
//             <label
//               htmlFor="description"
//               className="block mb-2 text-sm font-medium text-white"
//             >
//               Your complaint description
//             </label>
//             <textarea
//               name="description"
//               placeholder="Details of complaint"
//               className="border sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 outline-none"
//               onChange={descChange}
//               value={desc}
//             ></textarea>
//             <button
//               type="submit"
//               className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-800 text-lg rounded-lg px-5 py-2.5 mt-5 text-center"
//               disabled={loading}
//             >
//               {loading ? 'Registering Complaint...':'Register Complaint'}
//             </button>
//             <ToastContainer
//               position="top-right"
//               autoClose={5000}
//               hideProgressBar={false}
//               newestOnTop={false}
//               closeOnClick
//               rtl={false}
//               pauseOnFocusLoss
//               draggable
//               pauseOnHover
//               theme="dark"
//             />
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Complaints;


import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'; // Import axios

function Complaints() {
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [hostel, setHostel] = useState("");
  const [desc, setDesc] = useState("");
  const [type, setType] = useState("Electric");

  const types = ["Electric", "Furniture", "Cleaning", "Others"];

  const registerComplaint = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // const student = JSON.parse(localStorage.getItem("student"));
    
    // if (!student) {
    //   toast.error("Student data not found in local storage", {
    //     position: "top-right",
    //     autoClose: 3000,
    //     theme: "dark",
    //   });
    //   setLoading(false);
    //   return;
    // }

    const complaint = {
    //   name,
    //   hostel,
      title,
      description: desc,
      type,
    };

    try {
      // Use Axios to post the complaint
      const res = await axios.post("http://localhost:3001/complaint/", complaint);

      // Assuming the server responds with the created complaint
      if (res.data && res.data._id) {
        toast.success("Complaint Registered Successfully!", {
          position: "top-right",
          autoClose: 3000,
          theme: "dark",
        });
        setTitle(""); // Reset title
        setDesc("");  // Reset description
        setType("Electric"); // Reset type to default
      } else {
        toast.error(res.data.message || "Failed to register complaint", {
          position: "top-right",
          autoClose: 3000,
          theme: "dark",
        });
      }
    } catch (error) {
      // Handle errors
      toast.error("An error occurred. Please try again.", {
        position: "top-right",
        autoClose: 3000,
        theme: "dark",
      });
    }

    setLoading(false);
  };

  return (
    <div className="h-screen flex flex-col gap-10 items-center justify-center bg-white w-[100vw] border-[2px] border-[black] border-[solid]">
      <h1 className="text-black font-bold text-5xl mt-10">Complaints</h1>
      <form
        method="POST"
        onSubmit={registerComplaint}
        className="md:w-96 w-full py-5 pb-7 px-10 bg-[#31313174] rounded-lg shadow-xl flex flex-col gap-5 "
      >

        <div>
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-black"
          >
            Name
          </label>
          <input
            type="text"
            placeholder="Name"
            className="border sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-black focus:ring-blue-500 focus:border-blue-500 outline-none"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label
            htmlFor="hostel"
            className="block mb-2 text-sm font-medium text-black"
          >
            Hostel
          </label>
          <input
            type="text"
            placeholder="Hostel"
            className="border sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-black focus:ring-blue-500 focus:border-blue-500 outline-none"
            value={hostel}
            onChange={(e) => setHostel(e.target.value)}
            required
          />
        </div>
        
        <div>
          <label
            htmlFor="type"
            className="block mb-2 text-sm font-medium text-black"
          >
            Your complaint type
          </label>
          <select
            className="border sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-black focus:ring-blue-500 focus:border-blue-500 outline-none"
            onChange={(e) => setType(e.target.value)}
            value={type}
          >
            {types.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="title"
            className="block mb-2 text-sm font-medium text-black"
          >
            Complaint Title
          </label>
          <input
            type="text"
            placeholder="Title"
            className="border sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-black focus:ring-blue-500 focus:border-blue-500 outline-none"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div>
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-medium text-black"
          >
            Your complaint description
          </label>
          <textarea
            name="description"
            placeholder="Details of complaint"
            className="border sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-black focus:ring-blue-500 focus:border-blue-500 outline-none"
            onChange={(e) => setDesc(e.target.value)}
            value={desc}
            required
          ></textarea>
          <button
            type="submit"
            className="w-full text-black bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-800 text-lg rounded-lg px-5 py-2.5 mt-5 text-center"
            disabled={loading}
          >
            {loading ? 'Registering Complaint...' : 'Register Complaint'}
          </button>
        </div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </form>
    </div>
  );
}

export default Complaints;


