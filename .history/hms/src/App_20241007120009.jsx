import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Sign from './Sign'
import Login from './login'
import Home from './Home'
import Admin from './Admin'
import Complaints from './Compliant'
import HostelAllocation from './Hostelallocation'
import Facilities from './components/LandingSite/Facilities'
// import Complaints from "./components/Dashboards/StudentDashboard/Complaints";
// import AdminHome from "./components/Dashboards/AdminDashboard/Home/Home"


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/sign' element={<Sign/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/admin' element={<Admin/>}></Route>
        <Route path='/complaint' element={<Complaints/>}></Route>
        <Route path='/facility' element={<Facilities/>}></Route>
        <Route path='/allocation' element={<HostelAllocation/>}></Route>
        {/* <Route path="/complaints" element={<Complaints/>} /> */}
        {/* <Route path='/admin' element={<AdminHome />} /> */}
      </Routes>
    </BrowserRouter>
  )
}


export default App
