import React, { useContext } from 'react'
import "./pd.css"
import star_icon from "../assests/star_icon.png"
import star_dull_icon from "../assests/star_dull_icon.png"
import { ShopContext } from '../../context/ShopContext'

const ProductDisplay = (props) => {
    const { product } = props
    const { addToCart } = useContext(ShopContext)


    return (
        <div className='productdisplay'>
            <div className="display-left">
                <div className="p_img_list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="p_d_img">
                    <img className='p_d_main_img' src={product.image} alt="" />
                </div>
            </div>
            <div className="display-right">
                <h1>{product.name}</h1>
                <div className="p_d_right_star">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(122)</p>
                </div>
                <div className="p_d_right_price">
                    <div className="p_d_r_price_old">
                        ${product.old_price}
                    </div>
                    <div className="p_d_r_price_new">
                        ${product.new_price}
                    </div>
                </div>
                <div className="p_d_right_decs">
                    Explore a myriad of styles, ranging from classic to avant-garde, ensuring there's a jacket for every taste and occasion.Immerse yourself in a world of quality craftsmanship.
                </div>
                <div className='p_d_right_size'>
                    <h1>Select Size</h1>
                    <div className="p_d_right_sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button onClick={() => { addToCart(product.id) }}>Add To Cart</button>
                <p className='p_d_r_category'>
                    <span>Category : </span>
                    Women , T-shirt , Crop-top
                </p>
                <p className='p_d_r_category'>
                    <span>Tags : </span>
                    Modern , Latest
                </p>
            </div>
        </div>
    )
}

export default ProductDisplay
