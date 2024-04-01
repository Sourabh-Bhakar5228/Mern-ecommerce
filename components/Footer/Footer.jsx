import React from 'react'
import "./Footer.css"
import f_logo from "../assests/logo_big.png"
import instagarm from "../assests/instagram_icon.png"
import pintrest from "../assests/pintester_icon.png"
import whatsapp from "../assests/whatsapp_icon.png"




const Footer = () => {
    return (
        <div className='footer'>
            <div className="f-logo">
                <img src={f_logo} alt="" />
                <p>D-shopping</p>
            </div>
            <ul className='f-link'>
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="f-s-icon">
                <div className="f-icon-container">
                    <img src={instagarm} alt="" />
                </div>
                <div className="f-icon-container">
                    <img src={pintrest} alt="" />
                </div>
                <div className="f-icon-container">
                    <img src={whatsapp} alt="" />
                </div>
            </div>
            <div className="f-copyright">
                <hr />
                <p>Copyright @ 2024 - All Right Reserved.</p>
            </div>
        </div>
    )
}

export default Footer
