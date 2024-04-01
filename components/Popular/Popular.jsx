import React, { useEffect, useState } from 'react'
import "./Popular.css"
// import data_product from "../assests/data"
import Items from '../Item/Items'

const Popular = () => {
    const [popularProduct, setPopularProduct] = useState([])

    useEffect(() => {
        fetch("http://localhost:4000/popularinwomen")
            .then((response) => response.json())
            .then((data) => setPopularProduct(data))
    }, [])
    return (
        <div className='popular'>
            <h1>Popular In Womens</h1>
            <hr />
            <div className="popular-items">
                {popularProduct.map((items, i) => {
                    return <Items key={i} id={items.id} name={items.name} image={items.image} new_price={items.new_price} old_price={items.old_price} />
                })}
            </div>
        </div>
    )
}

export default Popular
