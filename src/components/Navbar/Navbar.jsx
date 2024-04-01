import React from 'react'
import "./Navbar.css"
import navlogo from "../../assets/logo.png"
import navprofile from "../../assets/nav-profile.svg"

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='For_span'> <img src={navlogo} alt="" className='nav-logo' />
                <span className='first'>D-shopping
                    <span className='second'>Admin Panel</span> </span></div>
            <img src={navprofile} alt="" className='nav-profile ' />
        </div>
    )
}

export default Navbar
