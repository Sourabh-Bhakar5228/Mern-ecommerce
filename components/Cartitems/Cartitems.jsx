import React, { useContext } from 'react'
import "./Cartitems.css"
import { ShopContext } from '../../context/ShopContext'
import remove_icon from "../assests/cart_cross_icon.png"

const Cartitems = () => {
    const { getTotalcartamount, all_product, cartItems, removeFromcart } = useContext(ShopContext)
    return (<>
        <div className='cartitems'>
            <div className="main-formet">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />

            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return <div className="cart_items_formet main-formet">
                        <img src={e.image} alt="" className='cart_icon_product_icon' />
                        <p>{e.name}</p>
                        <p>${e.new_price}</p>
                        <button className='cartItems_qunatity'>{cartItems[e.id]}</button>
                        <p>${e.new_price * cartItems[e.id]}</p>
                        <img src={remove_icon} onClick={() => { removeFromcart(e.id) }} alt="" className='remove_cart' />
                    </div>
                }
                else {
                    return null
                }
            })}
            <div className="cartItems_down">
                <div className="cartItems_total">
                    <h1>Cart Totals</h1>
                    <div >
                        <div className="cart_total_item">
                            <p>Subtotal</p>
                            <p style={{
                                display: 'flex',
                                flexDirection: 'row-reverse',
                            }}>${getTotalcartamount()}</p>
                            <hr />
                            <div className='cart_total_item'>
                                <p>Shipping Fee</p>
                                <p style={{
                                    display: 'flex',
                                    flexDirection: 'row-reverse',
                                }}>Free</p>
                            </div>
                            <hr />
                            <div className='cart_total_item'>
                                <h3>Total</h3>
                                <h3 style={{
                                    display: 'flex',
                                    flexDirection: 'row-reverse',
                                }}>${getTotalcartamount()}</h3>
                            </div>

                        </div>
                        <button className='btn_2' >Proceed To Checkout</button>
                    </div>
                    <div className="promo_cart">
                        <p>If you have a promo code , Enter it here</p>
                        <div className="promo_box">
                            <input type="text " placeholder='Your promo code' />
                            <button>Submit</button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    </>
    )
}

export default Cartitems
