import React from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Role() {
  return (
    <div>
        <p className='text-black text-[50px] text-center mb-[100px] mt-[200px]'>Select Role</p>

      <div className='flex gap-[180px] justify-center'>
        <div className='text-white bg-black px-[50px] py-[25px]'>
        <Link to="/login"> <button>Student </button> </Link>
        </div>

        <div className='text-white bg-black px-[50px] py-[25px]'>
        <Link to="/login"> <button>Admin </button> </Link>
        </div>

        <div className='text-white bg-black px-[50px] py-[25px]'>
        <Link to="/login"> <button>Mess </button> </Link>
        </div>
      </div>
    </div>
  )
}
