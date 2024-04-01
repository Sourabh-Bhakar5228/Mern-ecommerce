import React from 'react'
import "./Offer.css"
import exclusive_img from "../assests/exclusive_image.png"

const Offer = () => {
    return (
        <div className='offer'>
            <div className="left">
                <h1>Exclusive</h1>
                <h1>Offer for You</h1>
                <p>Only On Best Seller Product</p>
                <button>Check Now</button>
            </div>
            <div className="right">
                <img src={exclusive_img} alt="" />
            </div>
        </div>
    )
}

export default Offer
