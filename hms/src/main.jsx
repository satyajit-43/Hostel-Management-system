import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Login from './login.jsx'
import Header from './Header.jsx'
// import Sign from './sign.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
    {/* <Header/> */}
  </StrictMode>,
)
