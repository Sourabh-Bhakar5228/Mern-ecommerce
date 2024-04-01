import React from 'react'
import "./Breadcurb.css"
import arrow_icon from "../assests/breadcrum_arrow.png"

const Breadcurb = (props) => {
    const { product } = props
    return (
        <div className='BreadCurbs'>
            Home <img src={arrow_icon} alt="" /> Shop <img src={arrow_icon} alt="" />{product.category} <img src={arrow_icon} alt="" /> {product.name}
        </div>
    )
}

export default Breadcurb
