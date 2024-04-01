import React from 'react'
import "./RelatedProduct.css"
import data_product from "../assests/data"
import Items from "../Item/Items"

const RelatedProduct = () => {
    return (
        <div className='RelatedProduct'>
            <h1>Related Product</h1>
            <hr />
            <div className="RelatedProduct_item">
                {data_product.map((items, i) => {
                    return <Items key={i} id={items.id} name={items.name} image={items.image} new_price={items.new_price} old_price={items.old_price} />
                })}
            </div>
        </div>
    )
}

export default RelatedProduct
