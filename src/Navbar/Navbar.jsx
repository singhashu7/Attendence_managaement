import React from 'react'
import './Navbar.css'
import Logo from '../Components/Assets/gcet_logohd.png' 
const Navbar = () => {
  return (
    <div className="header">
        
        <img src={Logo} alt="" className='logo'/>
     
    </div>
  )
}

export default Navbar
