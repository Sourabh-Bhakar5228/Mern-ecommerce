import React from 'react'
import "./DescriptionBox.css"

const DescriptionBox = () => {
    return (
        <div className='descriptionBox'>
            <div className="DescriptionBox-Navigator">
                <div className="DescriptionBox-Navbox">Description</div>
                <div className="DescriptionBox-Navbox fade">Review (122)</div>
            </div>
            <div className="DescriptionBox-Description">
                <p>Discover a fashion-forward collection that transcends trends, bringing timeless classics and the latest runway-inspired pieces to your fingertips. Immerse yourself in cutting-edge technology that elevates your lifestyle, from the latest gadgets to smart home solutions. Transform your living spaces with carefully curated lifestyle essentials, including home decor and wellness items that redefine comfort and elegance. Indulge in a beauty haven where top-notch skincare, cosmetics, and self-care products empower you with confidence and radiance.
                </p>
                <p>Welcome to a digital marketplace that goes beyond the transaction, offering a curated journey that anticipates your needs and desires. Embrace the future of online shopping, where innovation and customer satisfaction converge to create an unparalleled experience. Happy shopping!</p>
            </div>
        </div>
    )
}

export default DescriptionBox
