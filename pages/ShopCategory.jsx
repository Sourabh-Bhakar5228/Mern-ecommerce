import React, { useContext } from "react";
import "./Css/ShopCategory.css"
import { ShopContext } from "../context/ShopContext";
import drop_down from "../components/assests/dropdown_icon.png"
import Items from "../components/Item/Items";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext)

  return (
    <div className="shop-category">
      <img className="s-banner" src={props.banner} alt="" />
      <div className="shop-category-index">
        <p><span>
          Showing 1-12 </span>Out of 36 Product</p>
        <div className="shopCategory-sort">
          Sort By <img src={drop_down} alt="" />
        </div>
      </div>
      <div className="shopCategory-product">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
          } else {
            return null
          }
        })}
      </div>
      <div className="load-more">Explore-More</div>
    </div>
  )
};

export default ShopCategory;